'use client';

import { useState, useLayoutEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Scissors, Download, Link2, Pause, Search, MapPin, Zap } from 'lucide-react';

interface WelcomeModalProps {
  onClose: () => void;
}

interface TourStep {
  targetId: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}

export default function WelcomeModal({ onClose }: WelcomeModalProps) {
  const [step, setStep] = useState(0);
  const [coords, setCoords] = useState<{ top: number; left: number; width: number; height: number; right: number; bottom: number } | null>(null);
  const [windowResized, setWindowResized] = useState(0);

  const steps: TourStep[] = useMemo(
    () => [
      {
        targetId: 'tour-url-input',
        title: 'Masukkan Link Video',
        content: 'Tempelkan URL video YouTube (biasa atau Shorts) di sini. Pastikan video bersifat publik agar sistem kami dapat memprosesnya dengan lancar.',
        icon: <Link2 className="w-8 h-8 text-teal-400" />,
      },
      {
        targetId: 'tour-load-button',
        title: 'Muat Video',
        content: 'Setelah URL terisi, klik tombol "Muat". Sistem akan mengambil data video, durasi, dan menampilkan pratinjau di dalam editor.',
        icon: <ArrowRight className="w-8 h-8 text-teal-400" />,
      },
      {
        targetId: 'tour-play-pause',
        title: 'Kontrol Video',
        content: 'Gunakan tombol ini untuk memutar atau menghentikan video. Anda juga bisa menekan tombol Space pada keyboard untuk melakukan hal yang sama.',
        icon: <Pause className="w-8 h-8 text-teal-400" />,
      },
      {
        targetId: 'tour-zoom-slider',
        title: 'Zoom Timeline',
        content: 'Geser slider ini untuk memperbesar tampilan timeline. Sangat berguna untuk pemotongan yang sangat presisi hingga sepersekian detik.',
        icon: <Search className="w-8 h-8 text-teal-400" />,
      },
      {
        targetId: 'tour-timeline',
        title: 'Geser Range Klip',
        content: 'Tarik handle berwarna teal pada timeline untuk menentukan area video yang ingin Anda potong secara manual.',
        icon: <Scissors className="w-8 h-8 text-teal-400" />,
      },
      {
        targetId: 'tour-point-controls',
        title: 'Penanda Mulai & Selesai',
        content: 'Klik "Mulai Sini" atau "Selesai Sini" untuk menetapkan batas klip tepat pada posisi video yang sedang diputar saat ini.',
        icon: <MapPin className="w-8 h-8 text-teal-400" />,
      },
      {
        targetId: 'tour-preset-durations',
        title: 'Durasi Instan',
        content: 'Ingin hasil cepat? Gunakan preset ini untuk secara otomatis mengambil durasi 5s, 10s, 30s, atau 60s dari titik awal yang sudah Anda tentukan.',
        icon: <Zap className="w-8 h-8 text-amber-400" />,
      },
      {
        targetId: 'tour-mode-video',
        title: 'Klip Video (MP4)',
        content: 'Mode utama untuk membuat potongan video pendek berkualitas tinggi. Sangat cocok untuk dibagikan ke media sosial atau dokumentasi momen.',
        icon: <Scissors className="w-8 h-8 text-teal-400" />,
      },
      {
        targetId: 'tour-mode-photo',
        title: 'Foto Super (PNG)',
        content: 'Mengambil satu frame terbaik (HD) dari video pada posisi saat ini. Sempurna untuk pembuatan thumbnail atau koleksi foto dari momen video.',
        icon: <Pause className="w-8 h-8 text-amber-400" />,
      },
      {
        targetId: 'tour-mode-burst',
        title: 'Burst Frames (ZIP)',
        content: 'Mengekstrak rangkaian gambar dalam interval cepat (misal: tiap 0.2s) dan mengemasnya dalam ZIP. Ideal untuk analisis detail gerakan.',
        icon: <Zap className="w-8 h-8 text-teal-400" />,
      },
      {
        targetId: 'tour-preview-button',
        title: 'Cek Hasil (Pratinjau)',
        content: 'Gunakan ini untuk memutar hanya bagian yang telah Anda tandai. Pastikan potongan sudah sempurna sebelum melanjutkan ke tahap akhir.',
        icon: <Play className="w-8 h-8 text-amber-500" />,
      },
      {
        targetId: 'tour-create-button',
        title: 'Buat & Unduh',
        content: 'Terakhir, klik tombol ini! Sistem akan memproses permintaan Anda, dan link unduhan akan muncul otomatis setelah selesai.',
        icon: <Download className="w-8 h-8 text-teal-400" />,
      },
    ],
    [],
  );

  const [screenWidth, setScreenWidth] = useState(1920);
  const [screenHeight, setScreenHeight] = useState(1080);

  const updateViewport = useCallback(() => {
    setScreenWidth(document.documentElement.clientWidth);
    setScreenHeight(document.documentElement.clientHeight);
  }, []);

  const updateCoords = useCallback(() => {
    const targetId = steps[step].targetId;
    const el = document.getElementById(targetId);
    if (el) {
      const rect = el.getBoundingClientRect();

      setCoords({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        right: rect.right,
        bottom: rect.bottom,
      });
    } else {
      setCoords(null);
    }
  }, [step, steps]);

  // Auto-scroll to target element
  useLayoutEffect(() => {
    const targetId = steps[step].targetId;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [step, steps]);

  useLayoutEffect(() => {
    // Wrapped in RAF to avoid synchronous setState lint errors
    const rafId = requestAnimationFrame(() => {
      updateViewport();
      updateCoords();
    });

    const handleResize = () => {
      requestAnimationFrame(() => {
        updateViewport();
        setWindowResized((v) => v + 1);
      });
    };
    const scrollHandler = () => {
      requestAnimationFrame(updateCoords);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', scrollHandler, true);

    const interval = setInterval(updateCoords, 100);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', scrollHandler, true);
      clearInterval(interval);
    };
  }, [updateViewport, updateCoords, windowResized, step]);

  const handleNext = () => setStep((s) => Math.min(steps.length - 1, s + 1));
  const handlePrev = () => setStep((s) => Math.max(0, s - 1));

  const isLastStep = step === steps.length - 1;
  const currentStep = steps[step];

  // Adaptive logic for tooltip positioning
  const modalWidth = Math.min(280, screenWidth - 32);
  const getPositionStyles = () => {
    if (!coords)
      return {
        position: 'fixed' as const,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: modalWidth,
      };

    const padding = 16;
    const horizontalOffset = modalWidth / 2;

    // Calculate best horizontal position centered on target
    let left = coords.left + coords.width / 2 - horizontalOffset;

    // Clamp to screen boundaries with 16px safety margin
    const maxAllowedLeft = screenWidth - modalWidth - padding;
    left = Math.max(padding, Math.min(left, maxAllowedLeft));

    // Determine vertical position
    const spaceBelow = screenHeight - coords.bottom - 20;
    const spaceAbove = coords.top - 20;

    let top;
    // Step 2 ("Muat") is usually at the top, so we'll almost always use 'bottom' placement
    if (spaceBelow > 300 || spaceBelow >= spaceAbove) {
      top = coords.bottom + 16;
      // Clamp bottom to ensure button is visible
      if (top + 320 > screenHeight) {
        top = Math.max(padding, screenHeight - 330 - padding);
      }
    } else {
      top = Math.max(padding, coords.top - 330 - 16);
    }

    return {
      position: 'absolute' as const,
      top,
      left,
      width: modalWidth,
      maxHeight: Math.min(screenHeight - 40, 500),
      boxSizing: 'border-box' as const,
    };
  };

  return (
    <div className="fixed inset-0 z-99999 pointer-events-none overflow-hidden">
      {/* SVG Overlay with Precise Masking */}
      <svg className="absolute inset-0 w-full h-full pointer-events-auto">
        <defs>
          <mask id="spotlight-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            {coords && <rect x={coords.left - 4} y={coords.top - 4} width={coords.width + 8} height={coords.height + 8} rx="12" fill="black" />}
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="rgba(0, 0, 0, 0.7)" mask="url(#spotlight-mask)" />
      </svg>

      {/* Spotlight Border Glow */}
      <AnimatePresence>
        {coords && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute border-2 border-teal-500/80 rounded-xl pointer-events-none"
            style={{
              top: coords.top - 6,
              left: coords.left - 6,
              width: coords.width + 12,
              height: coords.height + 12,
              boxShadow: '0 0 15px rgba(20, 184, 166, 0.3)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Tooltip Popup */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative z-100000 w-full pointer-events-auto flex flex-col" style={getPositionStyles()}>
            <div className="bg-[#0a1628] border-2 border-white/10 rounded-2xl p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-y-auto max-h-full scrollbar-none flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                <motion.div className="h-full bg-teal-500" initial={{ width: 0 }} animate={{ width: `${((step + 1) / steps.length) * 100}%` }} />
              </div>

              <div className="flex items-center justify-between mb-5">
                <div className="text-[9px] font-black tracking-widest text-teal-500 bg-teal-500/10 px-2.5 py-1 rounded-full uppercase">
                  Step {step + 1} / {steps.length}
                </div>
                {!isLastStep && (
                  <button onClick={onClose} className="text-[9px] font-bold text-slate-500 hover:text-rose-400 transition-colors tracking-widest uppercase">
                    Lewati panduan
                  </button>
                )}
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">{currentStep.icon}</div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-black text-white leading-tight underline decoration-teal-500/30 underline-offset-4 uppercase tracking-tight">{currentStep.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">{currentStep.content}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-7">
                {step > 0 && (
                  <button onClick={handlePrev} className="flex-1 px-3 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-[10px] border border-white/10 transition-all active:scale-95">
                    KEMBALI
                  </button>
                )}
                <button onClick={isLastStep ? onClose : handleNext} className="flex-2 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-[10px] shadow-lg shadow-teal-900/40 transition-all active:scale-95">
                  {isLastStep ? 'MENGERTI' : 'LANJUT'}
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
