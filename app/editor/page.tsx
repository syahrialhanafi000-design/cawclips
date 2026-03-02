'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Rnd } from 'react-rnd';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import WelcomeModal from '../../components/WelcomeModal';
import Tooltip from '../../components/Tooltip';

// ReactPlayer is loaded dynamically to avoid SSR issues
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false }) as React.ComponentType<any>;

type JobStatus = 'idle' | 'loading' | 'processing' | 'finished' | 'error';
type OutputMode = 'video' | 'super_photo' | 'burst';

// ────────────────────────────────────────────────────────────────────────────
// Constants & Config
// ────────────────────────────────────────────────────────────────────────────
// Menghilangkan trailing slash otomatis agar path URL tidak double
const RAW_API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000';
const API_URL = RAW_API_URL.replace(/\/$/, '');
const POLL_INTERVAL_MS = 3000;

// Helper to extract YouTube ID
const extractVideoId = (url: string): string => {
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|live|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(youtubeRegex);
  return (match && match[1]) || url;
};

// ────────────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────────────
function toHMS(seconds: number, showMs = false): string {
  const s = Math.max(0, seconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = Math.floor(s % 60);
  const ms = Math.floor((s % 1) * 100);
  const base = [h, m, sec].map((v) => String(v).padStart(2, '0')).join(':');
  return showMs ? `${base}.${String(ms).padStart(2, '0')}` : base;
}

// ────────────────────────────────────────────────────────────────────────────
// Custom Timeline Component
// ────────────────────────────────────────────────────────────────────────────
interface TimelineProps {
  duration: number;
  start: number;
  end: number;
  currentTime: number;
  zoom: number;
  onStartChange: (v: number) => void;
  onEndChange: (v: number) => void;
  onSeek: (v: number) => void;
}

function Timeline({ duration, start, end, currentTime, zoom, onStartChange, onEndChange, onSeek }: TimelineProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef<'start' | 'end' | 'range' | null>(null);
  const dragOffset = useRef(0);

  const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

  const posToSec = useCallback(
    (clientX: number): number => {
      if (!trackRef.current) return 0;
      const rect = trackRef.current.getBoundingClientRect();
      // rect.left is the screen coordinate of the track's left edge
      // (clientX - rect.left) is the relative pixel position within the full (possibly scrolled) track
      const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
      return ratio * duration;
    },
    [duration],
  );

  const startPct = duration > 0 ? (start / duration) * 100 : 0;
  const endPct = duration > 0 ? (end / duration) * 100 : 100;

  const onPointerDown = useCallback(
    (e: React.PointerEvent, handle: 'start' | 'end' | 'range') => {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      dragging.current = handle;
      if (handle === 'range') {
        dragOffset.current = posToSec(e.clientX) - start;
      }
    },
    [posToSec, start],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      const sec = posToSec(e.clientX);
      const minGap = Math.max(0.1, duration * 0.0001); // Minimal jarak klip lebih kecil saat bisa zoom

      if (dragging.current === 'start') {
        onStartChange(clamp(sec, 0, end - minGap));
      } else if (dragging.current === 'end') {
        onEndChange(clamp(sec, start + minGap, duration));
      } else if (dragging.current === 'range') {
        const span = end - start;
        const newStart = clamp(sec - dragOffset.current, 0, duration - span);
        onStartChange(newStart);
        onEndChange(newStart + span);
      }
    },
    [posToSec, start, end, duration, onStartChange, onEndChange],
  );

  const onPointerUp = useCallback(() => {
    dragging.current = null;
  }, []);

  const onTrackClick = useCallback(
    (e: React.MouseEvent) => {
      if (dragging.current) return;
      const sec = posToSec(e.clientX);

      // If clicking inside the range, seek there
      if (sec >= start && sec <= end) {
        onSeek(sec);
        return;
      }

      // If clicking outside, move the whole range (existing behavior)
      const span = end - start;
      const newStart = clamp(sec, 0, duration - span);
      onStartChange(newStart);
      onEndChange(newStart + span);
    },
    [posToSec, start, end, duration, onStartChange, onEndChange, onSeek],
  );

  if (duration === 0) {
    return <div className="flex items-center justify-center h-14 rounded-xl border border-white/10 bg-[#0d2137] text-sm text-slate-500 select-none">Load a video to enable the timeline</div>;
  }

  // Markers logic: dynamic density based on zoom and screen width
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 640;
  const density = isSmallScreen ? 5 : 10;
  const numMarkers = Math.max(isSmallScreen ? 3 : 5, Math.floor(density * zoom));
  const markers = Array.from({ length: numMarkers + 1 }).map((_, i) => (duration / numMarkers) * i);

  return (
    <div className="relative select-none border border-white/10 rounded-xl bg-[#0b1a2b] overflow-hidden" onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerLeave={onPointerUp}>
      <div ref={scrollContainerRef} className="overflow-x-auto overflow-y-hidden custom-scrollbar">
        <div ref={trackRef} onClick={onTrackClick} className="relative h-14 bg-[#0d2137] overflow-visible cursor-crosshair min-w-full" style={{ width: `${zoom * 100}%` }}>
          <div className="absolute inset-0 flex items-end pb-1 pointer-events-none">
            {markers.map((time, i) => (
              <div key={i} className="absolute flex flex-col items-center gap-0.5" style={{ left: `${(time / duration) * 100}%`, transform: 'translateX(-50%)' }}>
                <span className="text-[9px] text-slate-600 font-mono whitespace-nowrap">{toHMS(time, zoom > 20)}</span>
                <div className={`w-px ${i % 5 === 0 ? 'h-3 bg-slate-600' : 'h-2 bg-slate-700'}`} />
              </div>
            ))}
          </div>

          <div
            className="absolute top-0 h-full rounded-lg cursor-grab active:cursor-grabbing"
            style={{
              left: `${startPct}%`,
              width: `${endPct - startPct}%`,
              background: 'linear-gradient(135deg, rgba(20,184,166,0.25) 0%, rgba(16,185,129,0.20) 100%)',
              border: '1.5px solid rgba(20,184,166,0.6)',
              boxShadow: '0 0 16px 2px rgba(20,184,166,0.15)',
            }}
            onPointerDown={(e) => onPointerDown(e, 'range')}
          />

          <Handle pct={startPct} side="left" onPointerDown={(e) => onPointerDown(e, 'start')} />
          <Handle pct={endPct} side="right" onPointerDown={(e) => onPointerDown(e, 'end')} />

          {/* Playhead Indicator */}
          <div
            className="absolute top-0 bottom-0 z-50 pointer-events-none flex flex-col items-center"
            style={{
              left: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
              transform: 'translateX(-50%)',
            }}>
            {/* Handle at the top - Prominent White Tag */}
            <div className="w-5 h-7 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)] flex flex-col items-center justify-center rounded-b-md relative">
              <div className="w-1.5 h-3 bg-teal-500 rounded-full" />
              {/* Tooltip-style pointer bottom */}
              <div className="absolute -bottom-1 w-2 h-2 bg-white rotate-45 transform" />
            </div>
            {/* Vertical White Line with intense glow */}
            <div className="flex-1 w-[3px] bg-white shadow-[0_0_20px_rgba(255,255,255,1),0_0_10px_rgba(20,184,166,0.8)]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-1 left-0 right-0 pointer-events-none px-2 z-10 flex flex-wrap justify-between gap-x-2 gap-y-0.5">
        <div className="bg-[#07111f]/90 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/5 text-[9px] sm:text-[10px] font-mono text-teal-400">
          <span className="hidden xsm:inline">Start: </span>
          {toHMS(start, true)}
        </div>
        <div className="bg-[#07111f]/90 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/20 text-[9px] sm:text-[10px] font-mono text-white shadow-lg">
          <span className="hidden xsm:inline">NOW: </span>
          {toHMS(currentTime, true)}
        </div>
        <div className="bg-[#07111f]/90 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/5 text-[9px] sm:text-[10px] font-mono text-teal-400">
          <span className="hidden xsm:inline">End: </span>
          {toHMS(end, true)}
        </div>
      </div>
    </div>
  );
}

function Handle({ pct, side, onPointerDown }: { pct: number; side: 'left' | 'right'; onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => void }) {
  return (
    <div className="absolute top-0 h-full flex items-center justify-center cursor-ew-resize z-20 group" style={{ left: `${pct}%`, transform: 'translateX(-50%)', width: '28px' }} onPointerDown={onPointerDown}>
      <div className="h-full w-[3px] rounded-full" style={{ background: 'linear-gradient(180deg, #14b8a6 0%, #10b981 100%)', boxShadow: '0 0 10px 2px rgba(20,184,166,0.5)' }} />
      <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center border-2 border-teal-400 bg-[#0a1628] shadow-lg">
        <svg viewBox="0 0 16 16" className="w-3 h-3 text-teal-400" fill="currentColor">
          {side === 'left' ? <path d="M10 3L5 8l5 5V3z" /> : <path d="M6 3l5 5-5 5V3z" />}
        </svg>
      </div>
    </div>
  );
}

function Spinner({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────────────
function translateError(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes('failed to fetch') || m.includes('network error') || m.includes('connection refused')) {
    return 'Gagal menghubungi server. Pastikan koneksi internet stabil atau server sedang dalam maintenace';
  }
  if (m.includes('http error 404')) return 'Data tidak ditemukan (404).';
  if (m.includes('http error 500')) return 'Terjadi kesalahan pada server (500).';
  if (m.includes('http error 429')) return 'Terlalu banyak permintaan. Silakan tunggu sebentar.';
  if (m.includes('failed to start clip job')) return 'Gagal memulai proses clipping.';
  if (m.includes('unknown error')) return 'Terjadi kesalahan sistem yang tidak diketahui.';
  if (m.includes('minimal durasi')) return msg;
  if (m.includes('maksimal durasi')) return msg;
  if (m.includes('mencapai batas maksimal')) return msg;

  // Cleanup potential technical prefixes
  return msg.replace(/^error:/i, '').trim() || 'Maaf, terjadi kendala teknis.';
}

// ────────────────────────────────────────────────────────────────────────────
// Main Page Component
// ────────────────────────────────────────────────────────────────────────────
export default function VideoEditorPage() {
  const router = useRouter();
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/session');
        const data = await res.json();
        if (!data.authenticated) {
          router.push('/login');
        } else {
          setAuthLoading(false);
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        router.push('/login');
      }
    }
    checkAuth();
  }, [router]);
  const [inputUrl, setInputUrl] = useState('');
  const [activeUrl, setActiveUrl] = useState('');
  const [duration, setDuration] = useState(0);
  const [playerReady, setPlayerReady] = useState(false);

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [zoom, setZoom] = useState(1);

  const [jobStatus, setJobStatus] = useState<JobStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [clipDuration, setClipDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [mode, setMode] = useState<OutputMode>('video');
  const [burstInterval, setBurstInterval] = useState(1);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const [globalSettings, setGlobalSettings] = useState({ minClipDuration: 5, maxClipDuration: 600, maxClipsPerVideo: 5 });
  const [currentClipCount, setCurrentClipCount] = useState(0);

  // Crop states
  const [enableCrop, setEnableCrop] = useState(false);
  const [crop, setCrop] = useState({ x: 25, y: 25, width: 50, height: 50 });
  const [playerSize, setPlayerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = playerContainerRef.current;
    if (!container) return;

    // Initial size check
    const rect = container.getBoundingClientRect();
    if (rect.width > 0) {
      setPlayerSize({ width: rect.width, height: rect.height });
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setPlayerSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        }
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [activeUrl, playerReady]);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const res = await fetch('/api/config');
        if (res.ok) {
          const data = await res.json();
          setGlobalSettings(data);
        }
      } catch (err) {
        console.error('Failed to fetch config:', err);
      }
    }
    fetchConfig();
  }, []);

  useEffect(() => {
    if (!activeUrl) return;
    async function fetchClipCount() {
      try {
        const videoId = extractVideoId(activeUrl);
        const res = await fetch(`/api/clips/count?url=${encodeURIComponent(activeUrl)}&videoId=${videoId}`);
        if (res.ok) {
          const data = await res.json();
          setCurrentClipCount(data.count);
        } else {
          console.warn('DEBUG (Editor) fetchClipCount failed:', res.status, await res.text().catch(() => ''));
        }
      } catch (err) {
        console.error('Failed to fetch clip count:', err);
      }
    }
    fetchClipCount();
  }, [activeUrl]);

  useEffect(() => {
    const accepted = localStorage.getItem('caw_editor_welcome_accepted');
    if (!accepted) {
      setShowWelcome(true);
    }
  }, []);

  const closeWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem('caw_editor_welcome_accepted', 'true');
  };

  const pollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const previewStopRef = useRef<(() => void) | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [playerInstance, setPlayerInstance] = useState<any>(null);

  // Fallback timer to ensure playhead moves even if onProgress is slow/fails
  useEffect(() => {
    if (!isPlaying && !isPreviewing) return;

    const interval = setInterval(() => {
      if (playerInstance) {
        let time = 0;
        if (typeof playerInstance.getCurrentTime === 'function') {
          time = playerInstance.getCurrentTime();
        } else if (playerInstance.currentTime !== undefined) {
          time = playerInstance.currentTime;
        }

        // Constrain to clip end
        if (time >= endTime) {
          setIsPlaying(false);
          setIsPreviewing(false);

          // Use the robust seek logic
          const target = playerInstance.seekTo ? playerInstance : playerInstance.getInternalPlayer?.() || playerInstance;
          if (typeof target.seekTo === 'function') {
            target.seekTo(startTime, 'seconds');
          } else if (target.currentTime !== undefined) {
            target.currentTime = startTime;
          }
          setCurrentTime(startTime);
        } else {
          setCurrentTime(time);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, isPreviewing, playerInstance, startTime, endTime]);

  useEffect(() => {
    return () => {
      if (pollTimerRef.current) clearTimeout(pollTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (jobStatus === 'finished' && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [jobStatus]);

  useEffect(() => {
    setClipDuration(Math.max(0, endTime - startTime));
  }, [startTime, endTime]);

  useEffect(() => {
    if (jobStatus !== 'finished' || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [jobStatus, timeLeft]);

  useEffect(() => {
    const container = playerContainerRef.current;
    if (!container || !activeUrl) return;
    const onDurationChange = (e: Event) => {
      const target = e.target as HTMLVideoElement | null;
      const d = target?.duration ?? (e.currentTarget as HTMLVideoElement)?.duration;
      if (d && isFinite(d) && d > 0) handleDuration(d);
    };
    container.addEventListener('durationchange', onDurationChange, { capture: true });
    container.addEventListener('loadedmetadata', onDurationChange, { capture: true });
    return () => {
      container.removeEventListener('durationchange', onDurationChange, { capture: true });
      container.removeEventListener('loadedmetadata', onDurationChange, { capture: true });
    };
  }, [activeUrl]);

  const stopPolling = useCallback(() => {
    if (pollTimerRef.current) {
      clearTimeout(pollTimerRef.current);
      pollTimerRef.current = null;
    }
  }, []);

  const handleLoad = () => {
    const trimmed = inputUrl.trim();
    if (!trimmed) return;
    setDuration(0);
    setStartTime(0);
    setEndTime(0);
    setCurrentTime(0);
    setPlayerReady(false);
    setJobStatus('idle');
    setErrorMsg('');
    setDownloadUrl('');
    setStatusMessage('');
    setCurrentStep(0);
    setTimeLeft(300);
    setActiveUrl(trimmed);
  };

  const handleCancel = () => {
    setJobStatus('idle');
    setDownloadUrl('');
    setErrorMsg('');
    setStatusMessage('');
    setCurrentStep(0);
  };

  const handleReset = useCallback(() => {
    setJobStatus('idle');
    setDownloadUrl('');
    setErrorMsg('');
    setStatusMessage('');
    setCurrentStep(0);
  }, []);

  const handleDuration = (d: number) => {
    setDuration(d);
    setStartTime(0);
    setEndTime(d);
    setCurrentTime(0);
    setPlayerReady(true);
  };

  const pollStatus = useCallback(
    (jobId: string) => {
      let retryCount = 0;
      const MAX_RETRIES = 3;

      const check = async () => {
        try {
          const statusUrl = `${API_URL}/status/${jobId}`;

          const res = await fetch(statusUrl);
          if (!res.ok) throw new Error(`HTTP Error ${res.status}`);

          const data = await res.json();

          // Support both 'processing' and potential 'procesing' typo
          const isStillProcessing = data.status === 'processing' || data.status === 'procesing' || !data.status || data.status === 'idle';

          if (data.status === 'finished' && data.download) {
            stopPolling();
            const raw = data.download as string;
            setDownloadUrl(raw.startsWith('http') ? raw : `${API_URL}${raw}`);
            setJobStatus('finished');
            setStatusMessage('');
            setCurrentStep(4);

            if (mode === 'video') {
              const videoId = extractVideoId(activeUrl);
              fetch('/api/clips/count', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: activeUrl, videoId }),
              })
                .then((res) => {
                  if (!res.ok) {
                    // Fail silently or handle gracefully for the user
                  }
                })
                .catch(() => {});
            }
          } else if (data.status === 'error') {
            stopPolling();
            setErrorMsg(translateError(data.msg ?? 'An unknown error occurred.'));
            setJobStatus('error');
            setStatusMessage('');
          } else if (isStillProcessing) {
            if (data.message) setStatusMessage(data.message);
            if (data.step) setCurrentStep(data.step);
            pollTimerRef.current = setTimeout(check, POLL_INTERVAL_MS);
          } else {
            pollTimerRef.current = setTimeout(check, POLL_INTERVAL_MS);
          }
        } catch (err) {
          if (retryCount < MAX_RETRIES) {
            retryCount++;
            pollTimerRef.current = setTimeout(check, POLL_INTERVAL_MS);
          } else {
            stopPolling();
            setErrorMsg(translateError(err instanceof Error ? err.message : 'Network error. Backend might be down.'));
            setJobStatus('error');
          }
        }
      };

      // Small delay before first check to give backend time to register job
      pollTimerRef.current = setTimeout(check, 1000);
    },
    [stopPolling, activeUrl, mode],
  );

  const handleCreateClip = async () => {
    if (!activeUrl || duration === 0) return;

    // Validation: Min Duration (Exempt super_photo)
    const isDurationLimited = mode === 'video' || mode === 'burst';
    if (isDurationLimited && clipDuration < globalSettings.minClipDuration) {
      setErrorMsg(translateError(`Minimal durasi clip adalah ${globalSettings.minClipDuration} detik.`));
      return;
    }

    // Validation: Max Duration (Exempt super_photo)
    if (isDurationLimited && clipDuration > (globalSettings.maxClipDuration || 600)) {
      const msg = `Maksimal durasi clip adalah ${Math.floor((globalSettings.maxClipDuration || 600) / 60)} menit.`;
      setErrorMsg(translateError(msg));
      window.alert(msg);
      return;
    }

    // Validation: Max Clips (Only for video)
    if (mode === 'video' && currentClipCount >= globalSettings.maxClipsPerVideo) {
      const msg = `Video ini sudah mencapai batas maksimal ${globalSettings.maxClipsPerVideo} clips.`;
      setErrorMsg(translateError(msg));
      window.alert(msg);
      return;
    }

    setJobStatus('loading');
    setErrorMsg('');
    setDownloadUrl('');
    setStatusMessage('');
    setCurrentStep(1);
    setTimeLeft(300);

    try {
      const formData = new FormData();
      formData.append('url', activeUrl);

      formData.append('start', (mode === 'super_photo' ? currentTime : startTime).toFixed(2));
      formData.append('end', (mode === 'super_photo' ? currentTime : endTime).toFixed(2));
      formData.append('mode', mode);

      if (mode === 'burst') {
        formData.append('interval', burstInterval.toString());
      }

      if (mode === 'super_photo' && enableCrop) {
        formData.append('crop_w', `iw*${Math.max(0.01, crop.width / 100).toFixed(4)}`);
        formData.append('crop_h', `ih*${Math.max(0.01, crop.height / 100).toFixed(4)}`);
        formData.append('crop_x', `iw*${Math.max(0, crop.x / 100).toFixed(4)}`);
        formData.append('crop_y', `ih*${Math.max(0, crop.y / 100).toFixed(4)}`);
      }

      const res = await fetch(`${API_URL}/download`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload.detail ?? `HTTP Error ${res.status}`);
      }

      const { job_id } = await res.json();
      setJobStatus('processing');
      pollStatus(job_id);
    } catch (err) {
      stopPolling();
      setErrorMsg(translateError(err instanceof Error ? err.message : 'Failed to start clip job.'));
      setJobStatus('error');
    }
  };

  const handleDownload = useCallback(async () => {
    if (!downloadUrl || isDownloading) return;

    setIsDownloading(true);
    console.log('[DEBUG] Pemicu download aktif:', downloadUrl);

    try {
      // 1. Simulasi loading singkat untuk UI (memberikan feedback visual)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 2. Pemicu download langsung lewat browser (metode paling handal)
      const a = document.createElement('a');
      const downloadUrlWithParam = downloadUrl.includes('?') ? `${downloadUrl}&download=1` : `${downloadUrl}?download=1`;
      a.href = downloadUrlWithParam;
      const fileName = downloadUrl.split('/').pop()?.split('?')[0] || 'CAW_Media';
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      console.log('[DEBUG] Download dipicu, mereset editor...');

      // 3. Reset editor otomatis setelah sedikit jeda agar tidak mengganggu trigger browser
      setTimeout(() => {
        handleReset();
        setIsDownloading(false);
      }, 1000);
    } catch (err) {
      console.error('[DEBUG] Gagal memicu download:', err);
      window.open(downloadUrl, '_blank');
      handleReset();
      setIsDownloading(false);
    }
  }, [downloadUrl, isDownloading, handleReset]);

  const stopPreview = useCallback(() => {
    previewStopRef.current?.();
    previewStopRef.current = null;
    setIsPreviewing(false);
  }, []);

  const handlePreview = useCallback(() => {
    if (isPreviewing) {
      stopPreview();
      return;
    }

    const container = playerContainerRef.current;
    if (!container) return;

    const mediaEl = (container.querySelector('video') as HTMLVideoElement | null) ?? (container.querySelector('youtube-video-element') as HTMLVideoElement | null) ?? (container.querySelector('[src]') as HTMLVideoElement | null);

    if (!mediaEl) return;

    mediaEl.currentTime = startTime;
    mediaEl.play().catch(() => {});
    setIsPreviewing(true);

    const onTimeUpdate = () => {
      if (mediaEl.currentTime >= endTime) {
        mediaEl.pause();
        cleanup();
      }
    };

    const cleanup = () => {
      mediaEl.removeEventListener('timeupdate', onTimeUpdate);
      previewStopRef.current = null;
      setIsPreviewing(false);
    };

    mediaEl.addEventListener('timeupdate', onTimeUpdate);
    previewStopRef.current = () => {
      mediaEl.pause();
      cleanup();
    };
  }, [isPreviewing, stopPreview, startTime, endTime]);

  const handleTogglePlay = useCallback(() => {
    const nextPlaying = !isPlaying;

    if (nextPlaying) {
      // If we are past the end or before the start, jump to start
      if (currentTime >= endTime - 0.1 || currentTime < startTime) {
        const player = playerInstance || playerRef.current;
        if (player) {
          const target = player.seekTo ? player : player.getInternalPlayer?.() || player;
          if (typeof target.seekTo === 'function') {
            target.seekTo(startTime, 'seconds');
          } else if (target.currentTime !== undefined) {
            target.currentTime = startTime;
          }
          setCurrentTime(startTime);
        }
      }
    }

    setIsPlaying(nextPlaying);
  }, [isPlaying, currentTime, startTime, endTime, playerInstance]);

  const getSteps = () => {
    switch (mode) {
      case 'super_photo':
        return [
          { title: 'Inisialisasi & Antrian', step: 1 },
          { title: 'Cari Posisi Frame', step: 2 },
          { title: 'Ambil Foto HD', step: 3 },
          { title: 'Finalisasi & Siap', step: 4 },
        ];
      case 'burst':
        return [
          { title: 'Inisialisasi & Antrian', step: 1 },
          { title: 'Ekstraksi Batch Frame', step: 2 },
          { title: 'Kompresi ZIP', step: 3 },
          { title: 'Finalisasi & Siap', step: 4 },
        ];
      default:
        return [
          { title: 'Inisialisasi & Antrian', step: 1 },
          { title: 'Ekstraksi Stream Video', step: 2 },
          { title: 'Proses Pemotongan (FFmpeg)', step: 3 },
          { title: 'Finalisasi & Siap', step: 4 },
        ];
    }
  };

  const steps = getSteps();

  const isProcessing = jobStatus === 'loading' || jobStatus === 'processing';

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#07111f] flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
          <Spinner className="w-6 h-6 text-teal-400" />
        </div>
        <p className="text-sm font-medium text-slate-400 animate-pulse">Mengecek akses...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07111f] text-white flex flex-col">
      <AnimatePresence>{showWelcome && <WelcomeModal onClose={closeWelcome} />}</AnimatePresence>
      <header className="border-b border-white/5 bg-[#07111f]/95 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 mr-auto sm:mr-4 shrink-0">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <line x1="20" y1="4" x2="8.12" y2="15.88" />
              <line x1="14.47" y1="14.48" x2="20" y2="20" />
              <line x1="8.12" y1="8.12" x2="12" y2="12" />
            </svg>
            <span className="font-semibold text-sm tracking-tight text-white/90">CAW Clip</span>
          </div>

          <Tooltip content="Buka panduan fitur" position="bottom">
            <button
              onClick={() => setShowWelcome(true)}
              className="h-8 px-3 rounded-full bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 text-[9px] font-black border border-teal-500/20 transition-all flex items-center gap-1.5 active:scale-95 tracking-widest uppercase">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span className="hidden xs:inline">Bantuan</span>
            </button>
          </Tooltip>

          <div className="flex-1 min-w-[200px] order-last sm:order-0 w-full sm:w-auto">
            <input
              id="tour-url-input"
              type="url"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLoad()}
              placeholder="Tempel URL video…"
              className="w-full h-10 rounded-lg px-4 text-xs sm:text-sm bg-[#0d2137] border border-white/10 text-white placeholder-slate-500 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
            />
          </div>

          <Tooltip content="Memproses video" position="bottom" className="shrink-0">
            <button
              id="tour-load-button"
              onClick={handleLoad}
              disabled={!inputUrl.trim()}
              className="h-10 px-4 sm:px-5 rounded-lg text-xs sm:text-sm font-semibold bg-teal-600 hover:bg-teal-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-lg shadow-teal-900/40">
              Muat
            </button>
          </Tooltip>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 flex flex-col gap-5">
        <div className={`relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/60 transition-colors duration-300 border-2 ${isPreviewing ? 'border-amber-500/50' : 'border-white/8'}`} style={{ background: '#05200f' }}>
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            {activeUrl ? (
              <div ref={playerContainerRef} className="absolute inset-0">
                <ReactPlayer
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ref={(player: any) => {
                    playerRef.current = player;
                    if (player && !playerInstance) {
                      setPlayerInstance(player);
                      // Extract internal video element if possible
                      if (typeof player.getInternalPlayer === 'function') {
                        const internal = player.getInternalPlayer();
                        if (internal instanceof HTMLVideoElement) {
                          videoRef.current = internal;
                        }
                      }
                    }
                  }}
                  src={activeUrl}
                  width="100%"
                  height="100%"
                  controls
                  playing={isPlaying || isPreviewing}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onProgress={(state: any) => {
                    const time = state.playedSeconds;
                    if (typeof time === 'number' && isFinite(time)) {
                      setCurrentTime(time);
                    }
                  }}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onDurationChange={(e: any) => {
                    handleDuration(e.target.duration);
                  }}
                  onReady={() => {
                    setPlayerReady(true);
                    if (playerRef.current) setPlayerInstance(playerRef.current);
                  }}
                />

                {/* Crop Overlay */}
                {mode === 'super_photo' && enableCrop && playerSize.width > 0 && (
                  <Rnd
                    bounds="parent"
                    size={{
                      width: (crop.width / 100) * playerSize.width,
                      height: (crop.height / 100) * playerSize.height,
                    }}
                    position={{
                      x: (crop.x / 100) * playerSize.width,
                      y: (crop.y / 100) * playerSize.height,
                    }}
                    onDragStop={(e, d) => {
                      setCrop((prev) => ({
                        ...prev,
                        x: Math.max(0, (d.x / playerSize.width) * 100),
                        y: Math.max(0, (d.y / playerSize.height) * 100),
                      }));
                    }}
                    onResizeStop={(e, direction, ref, delta, position) => {
                      setCrop({
                        width: Math.max(0.01, (ref.offsetWidth / playerSize.width) * 100),
                        height: Math.max(0.01, (ref.offsetHeight / playerSize.height) * 100),
                        x: Math.max(0, (position.x / playerSize.width) * 100),
                        y: Math.max(0, (position.y / playerSize.height) * 100),
                      });
                    }}
                    className="z-50 border-2 border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.3)] bg-teal-500/10 pointer-events-auto"
                    style={{ cursor: 'move' }}>
                    {/* 3x3 Grid */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute top-1/3 left-0 right-0 h-px bg-white/30" />
                      <div className="absolute top-2/3 left-0 right-0 h-px bg-white/30" />
                      <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/30" />
                      <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/30" />
                    </div>
                  </Rnd>
                )}
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-500">
                <svg className="w-14 h-14 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <p className="text-sm">
                  Paste a video URL above and click <strong className="text-teal-500">Load</strong>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 px-0.5">
            <div className="flex items-center gap-5">
              {((playerReady && duration > 0 && !isPreviewing) || showWelcome) && (
                <button
                  id="tour-play-pause"
                  onClick={handleTogglePlay}
                  className={`flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-sm shrink-0 transition-colors border ${isPlaying ? 'border-teal-500/40 bg-teal-500/10 text-teal-400 hover:bg-teal-500/20' : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'}`}>
                  {isPlaying ? (
                    <>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                      </svg>
                      <span>Jeda</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      <span>Putar</span>
                    </>
                  )}
                </button>
              )}
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-white/80">Timeline Range</span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] text-slate-500 font-mono">Duration: {duration > 0 ? toHMS(duration) : '--:--:--'}</span>
                  {activeUrl && (
                    <Tooltip content="Batas pembuatan klip per video" position="right">
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded border transition-all duration-300 ${currentClipCount >= globalSettings.maxClipsPerVideo ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 font-bold shadow-[0_0_8px_rgba(244,63,94,0.1)]' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                        Clips: {currentClipCount} / {globalSettings.maxClipsPerVideo}
                      </span>
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>

            <div id="tour-zoom-slider" className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-full sm:w-auto overflow-hidden">
              <Tooltip content="Atur tingkat detail tampilan timeline" position="left" className="shrink-0">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold hidden xsm:inline">Skala</span>
                </div>
              </Tooltip>
              <Tooltip content="Geser untuk Zoom In (Ke Kanan) atau Zoom Out (Ke Kiri)" position="top" className="flex-1">
                <input type="range" min="1" max="100" step="0.5" value={zoom} onChange={(e) => setZoom(parseFloat(e.target.value))} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500" />
              </Tooltip>
              <span className="text-[10px] font-mono text-teal-400 w-8 text-right shrink-0">{zoom}x</span>
            </div>
          </div>
          <div id="tour-timeline">
            <Timeline
              duration={duration}
              start={startTime}
              end={endTime}
              currentTime={currentTime}
              zoom={zoom}
              onStartChange={setStartTime}
              onEndChange={setEndTime}
              onSeek={(time) => {
                const player = playerInstance || playerRef.current;
                if (player) {
                  // Determine if it's the direct instance or wrapped by dynamic
                  const target = player.seekTo ? player : player.getInternalPlayer?.() || player;

                  if (typeof target.seekTo === 'function') {
                    target.seekTo(time, 'seconds');
                  } else if (target.currentTime !== undefined) {
                    target.currentTime = time;
                  }
                  setCurrentTime(time);
                }
              }}
            />
          </div>
          <div className="text-center px-4">
            <span className="text-[9px] sm:text-[10px] text-slate-600 block leading-relaxed">Geser tuas untuk tentukan klip • Geser kotak pilihan untuk memindah rentang</span>
          </div>
        </div>

        {/* Moment Picker Panel */}
        <div
          className={`rounded-2xl border ${clipDuration > globalSettings.maxClipDuration ? 'border-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.3)]' : 'border-white/8'} bg-[#0a1628] p-5 flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-2 duration-500 transition-all`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center border border-teal-500/30">
                <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest">Pemilih Momen</h3>
            </div>
            <div className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
              <span className="text-xs font-mono text-teal-400 font-bold">{toHMS(currentTime, true)}</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Seek Slider */}
            <Tooltip content="Geser kursor ini untuk mencari posisi waktu secara cepat" position="top" className="w-full">
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 px-1">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Geser Cepat</span>
                  <span className="text-[10px] text-slate-500 font-mono">{toHMS(duration)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={Number.isFinite(duration) && duration > 0 ? duration : 100}
                  step="0.1"
                  value={Number.isFinite(currentTime) ? currentTime : 0}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    const time = isFinite(val) ? val : 0;
                    const player = playerInstance || playerRef.current;
                    if (player) {
                      const target = player.seekTo ? player : player.getInternalPlayer?.() || player;
                      if (typeof target.seekTo === 'function') {
                        target.seekTo(time, 'seconds');
                      } else if (target.currentTime !== undefined) {
                        target.currentTime = time;
                      }
                      setCurrentTime(time);
                    }
                  }}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-500"
                />
              </div>
            </Tooltip>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Manual Boundary Controls */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Tentukan Batas</span>
                <div id="tour-point-controls" className="grid grid-cols-2 gap-2">
                  <Tooltip content="Set waktu mulai pada posisi saat ini">
                    <button
                      onClick={() => setStartTime(currentTime)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-500/50 transition-all group">
                      <div className="w-2 h-2 rounded-full bg-teal-500 group-hover:animate-pulse" />
                      <span className="text-xs font-bold text-white">Mulai Sini</span>
                    </button>
                  </Tooltip>
                  <Tooltip content="Set waktu akhir pada posisi saat ini">
                    <button
                      onClick={() => setEndTime(currentTime)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all group">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:animate-pulse" />
                      <span className="text-xs font-bold text-white">Selesai Sini</span>
                    </button>
                  </Tooltip>
                </div>
              </div>

              {/* Quick Preset Durations */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Durasi Instan</span>
                <div id="tour-preset-durations" className="grid grid-cols-2 xsm:grid-cols-4 gap-2">
                  {[5, 10, 30, 60].map((s) => (
                    <Tooltip key={s} content={`Tambah ${s} detik dari start`} className="w-full">
                      <button
                        onClick={() => setEndTime(Math.min(duration, startTime + s))}
                        className="w-full px-2 py-3 rounded-xl bg-teal-500/5 border border-teal-500/10 hover:bg-teal-500/20 hover:border-teal-500/30 text-xs font-bold text-teal-400 transition-all">
                        +{s}s
                      </button>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Stats & Warnings */}
            <div className="p-3 rounded-xl bg-black/20 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center md:justify-start w-full md:w-auto">
                <TimeReadout label="Mulai" value={toHMS(startTime)} tooltip="Titik waktu dimulainya klip" />
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
                <TimeReadout label="Selesai" value={toHMS(endTime)} tooltip="Titik waktu berakhirnya klip" />
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
                <TimeReadout label="Durasi Klip" value={toHMS(Math.max(0, endTime - startTime))} accent tooltip="Total panjang waktu media yang akan diproses" />
              </div>

              <div className="flex flex-wrap items-center gap-2 justify-center md:justify-end w-full md:w-auto">
                {clipDuration > globalSettings.maxClipDuration && (
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 animate-pulse">
                    <svg className="w-3 h-3 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">Batas {Math.floor(globalSettings.maxClipDuration / 60)}m terlampaui</span>
                  </div>
                )}
                {clipDuration < globalSettings.minClipDuration && clipDuration > 0 && (
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20 animate-pulse">
                    <svg className="w-3 h-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider">Min {globalSettings.minClipDuration}d diperlukan</span>
                  </div>
                )}
                <div className="text-[10px] text-slate-500 font-medium italic hidden md:block">{startTime === 0 && endTime === duration ? 'Pilih rentang lebih kecil' : 'Fitur bantuan aktif'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/8 bg-[#0a1628] p-4 flex flex-col md:flex-row items-center gap-4">
          {jobStatus === 'error' && errorMsg && <p className="text-xs text-red-400 max-w-xs text-center sm:text-right">{errorMsg}</p>}

          <div className="flex flex-col gap-4 w-full md:flex-1">
            <div id="tour-mode-selection" className="flex flex-wrap items-center gap-2 p-1 bg-white/5 rounded-xl border border-white/10 w-full sm:w-fit justify-center sm:justify-start">
              <Tooltip content="Ekspor sebagai klip video MP4" position="bottom" className="flex-1 sm:flex-none">
                <button
                  id="tour-mode-video"
                  onClick={() => setMode('video')}
                  className={`w-full sm:w-auto px-4 py-2 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${mode === 'video' ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/40' : 'text-slate-400 hover:text-white'}`}>
                  Klip (MP4)
                </button>
              </Tooltip>
              <Tooltip content="Ambil foto HD dari frame saat ini" position="bottom" className="flex-1 sm:flex-none">
                <button
                  id="tour-mode-photo"
                  onClick={() => setMode('super_photo')}
                  className={`w-full sm:w-auto px-4 py-2 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${mode === 'super_photo' ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/40' : 'text-slate-400 hover:text-white'}`}>
                  Foto (PNG)
                </button>
              </Tooltip>
              <Tooltip content="Ekspor banyak frame dalam file ZIP" position="bottom" className="flex-1 sm:flex-none">
                <button
                  id="tour-mode-burst"
                  onClick={() => setMode('burst')}
                  className={`w-full sm:w-auto px-4 py-2 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${mode === 'burst' ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/40' : 'text-slate-400 hover:text-white'}`}>
                  Burst (ZIP)
                </button>
              </Tooltip>
            </div>

            {mode === 'super_photo' && (
              <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" checked={enableCrop} onChange={(e) => setEnableCrop(e.target.checked)} className="sr-only" />
                    <div className={`w-10 h-5 rounded-full transition-colors ${enableCrop ? 'bg-teal-600' : 'bg-slate-700'}`} />
                    <div className={`absolute left-1 top-1 w-3 h-3 rounded-full bg-white transition-transform ${enableCrop ? 'translate-x-5' : 'translate-x-0'}`} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-teal-400 transition-colors">Aktifkan Crop</span>
                </label>
              </div>
            )}

            {(mode === 'burst' || showWelcome) && (
              <div id="tour-burst-interval" className="flex items-center gap-3 animate-in fade-in slide-in-from-left-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Interval Frame (detik)</label>
                <input
                  type="number"
                  min="0.2"
                  step="0.2"
                  value={Number.isNaN(burstInterval) ? '' : burstInterval}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setBurstInterval(Number.isNaN(val) ? 0.2 : val);
                  }}
                  className="w-20 h-8 rounded-lg px-2 text-sm bg-[#0d2137] border border-white/10 text-white outline-none focus:border-teal-500 transition-all font-mono"
                />
              </div>
            )}
          </div>

          {((playerReady && duration > 0) || showWelcome) && (
            <Tooltip content="Lihat pratinjau rentang waktu yang dipilih" position="top" className="w-full sm:w-auto">
              <button
                id="tour-preview-button"
                onClick={handlePreview}
                className={`flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-sm shrink-0 transition-colors border ${isPreviewing ? 'border-amber-500/40 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20' : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'}`}>
                {isPreviewing ? (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                    <span>Berhenti</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span>Pratinjau</span>
                  </>
                )}
              </button>
            </Tooltip>
          )}

          {jobStatus === 'finished' ? (
            <Tooltip content="Simpan hasil ke perangkat Anda" position="top">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm shrink-0 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-emerald-900/40">
                {isDownloading ? (
                  <>
                    <Spinner />
                    <span>Mendownload…</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Unduh File
                  </>
                )}
              </button>
            </Tooltip>
          ) : (
            <Tooltip content="Mulai proses pengolahan media" position="top" className="w-full sm:w-auto">
              <button
                id="tour-create-button"
                onClick={handleCreateClip}
                disabled={
                  !playerReady ||
                  duration === 0 ||
                  isProcessing ||
                  (mode === 'video' && (clipDuration < globalSettings.minClipDuration || clipDuration > globalSettings.maxClipDuration || currentClipCount >= globalSettings.maxClipsPerVideo)) ||
                  (mode === 'burst' && (clipDuration < globalSettings.minClipDuration || clipDuration > globalSettings.maxClipDuration))
                }
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-xl font-semibold text-sm shrink-0 bg-teal-600 hover:bg-teal-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-lg shadow-teal-900/40">
                {isProcessing ? (
                  <>
                    <Spinner />
                    <span>{jobStatus === 'loading' ? 'Mengirim…' : 'Memproses…'}</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {mode === 'video' ? (
                        <>
                          <polygon points="23 7 16 12 23 17 23 7" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </>
                      ) : mode === 'super_photo' ? (
                        <>
                          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                          <circle cx="12" cy="13" r="4" />
                        </>
                      ) : (
                        <>
                          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                          <line x1="7" y1="2" x2="7" y2="22" />
                          <line x1="17" y1="2" x2="17" y2="22" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <line x1="2" y1="7" x2="22" y2="7" />
                          <line x1="2" y1="17" x2="22" y2="17" />
                        </>
                      )}
                    </svg>
                    <span>{mode === 'video' ? 'Buat Klip' : mode === 'super_photo' ? 'Ambil Foto' : 'Buat Burst'}</span>
                  </>
                )}
              </button>
            </Tooltip>
          )}
        </div>

        {isProcessing && (
          <div className="rounded-2xl border border-white/10 bg-[#0a1628]/80 backdrop-blur-xl p-8 animate-in fade-in zoom-in-95 duration-700 shadow-[0_0_50px_rgba(20,184,166,0.1)] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-teal-500/10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full" />

            <div className="relative flex flex-col items-center gap-8">
              {/* Central Animation Area */}
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-linear-to-br from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 animate-spin-slow">
                    <svg className="w-10 h-10 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
                    </svg>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-teal-500/40 animate-pulse" />
                </div>
                {/* Pulse Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-teal-500/20 rounded-2xl animate-ping opacity-20" />
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-lg font-bold text-white tracking-widest uppercase">Sedang Memproses</h3>
                <p className="text-xs text-slate-400 font-medium">{statusMessage}</p>
              </div>

              {/* Progress Steps */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {steps.map((s) => {
                  const isDone = currentStep > s.step;
                  const isActive = currentStep === s.step;

                  return (
                    <div
                      key={s.step}
                      className={`relative overflow-hidden flex flex-col gap-3 p-4 rounded-xl border transition-all duration-500 ${
                        isActive ? 'bg-teal-500/10 border-teal-500/40 shadow-[0_0_15px_rgba(20,184,166,0.15)] ring-1 ring-teal-500/50' : isDone ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-white/5 border-white/5 grayscale opacity-50'
                      }`}>
                      {/* Active Progress Bar Underneath */}
                      {isActive && <div className="absolute bottom-0 left-0 h-0.5 bg-teal-500 animate-progress-flow" style={{ width: '100%' }} />}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {isDone ? (
                            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          ) : isActive ? (
                            <div className="w-5 h-5 flex items-center justify-center relative">
                              <div className="absolute inset-0 bg-teal-500/20 rounded-full animate-ping" />
                              <Spinner className="w-4 h-4 text-teal-400 relative z-10" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center">
                              <span className="text-[9px] font-bold text-slate-600">{s.step}</span>
                            </div>
                          )}
                          <span className={`text-[11px] font-bold uppercase tracking-wider ${isActive ? 'text-teal-400' : isDone ? 'text-emerald-400' : 'text-slate-500'}`}>{s.title}</span>
                        </div>
                        {isActive && <span className="flex h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />}
                      </div>

                      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                        <div className={`h-full transition-all duration-1000 ${isDone ? 'w-full bg-emerald-500' : isActive ? 'w-1/2 bg-teal-500 animate-pulse' : 'w-0'}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tip Text */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-[10px] text-slate-500 font-medium italic">Jangan tutup tab ini sampai proses selesai</span>
              </div>
            </div>
          </div>
        )}

        {jobStatus === 'finished' && downloadUrl && (
          <div ref={resultRef} className="mt-4 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-3 px-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-white tracking-tight">Klip Siap!</h2>
                <div className={`text-[10px] font-mono flex items-center gap-1.5 ${timeLeft < 60 ? 'text-rose-400 animate-pulse' : 'text-amber-400 opacity-80'}`}>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tersedia selama: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                </div>
              </div>
            </div>

            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 bg-black/40 aspect-video group">
              {downloadUrl.toLowerCase().endsWith('.mp4') ? (
                <video src={downloadUrl} controls className="w-full h-full object-contain" poster="/preview-placeholder.png" />
              ) : downloadUrl.toLowerCase().endsWith('.png') ? (
                <Image src={downloadUrl} alt="Clipped Result" fill className="object-contain" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-[#0d2137]">
                  <div className="w-20 h-20 rounded-2xl bg-teal-500/20 flex items-center justify-center border border-teal-500/30">
                    <svg className="w-10 h-10 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">Paket Burst ZIP</p>
                    <p className="text-xs text-slate-400">Beberapa frame PNG siap</p>
                  </div>
                </div>
              )}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-emerald-500/90 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider backdrop-blur-sm">Hasil Klip</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-4 rounded-2xl font-bold text-base bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-emerald-900/40 hover:scale-[1.02] active:scale-[0.98]">
                {isDownloading ? (
                  <>
                    <Spinner className="w-5 h-5" />
                    <span>Mendownload…</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Unduh Klip
                  </>
                )}
              </button>
              <button
                onClick={handleCancel}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                Batal
              </button>
            </div>
            <p className="text-[11px] text-slate-500 text-center">File siap untuk anda unduh dan gunakan.</p>
          </div>
        )}
      </main>
    </div>
  );
}

function TimeReadout({ label, value, tooltip, accent = false }: { label: string; value: string; tooltip?: string; accent?: boolean }) {
  const content = (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-[10px] uppercase tracking-widest text-slate-500">{label}</span>
      <span className={`font-mono text-base font-semibold ${accent ? 'text-teal-400' : 'text-white'}`}>{value}</span>
    </div>
  );

  if (tooltip) {
    return (
      <Tooltip content={tooltip} position="top">
        {content}
      </Tooltip>
    );
  }

  return content;
}
