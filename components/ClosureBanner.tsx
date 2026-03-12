'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Timer, ServerOff, Info, EyeOff, X, MessageCircle } from 'lucide-react';
import Image from 'next/image';

// Import local images for automatic optimization and dimension handling
import detailHargaImg from '@/public/image/detailHarga.png';
import limitImg from '@/public/image/limit.png';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ClosureBanner() {
  const targetDate = useMemo(() => new Date('2026-03-23T00:00:00+07:00'), []);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const calculateTimeLeft = useCallback(() => {
    const difference = +targetDate - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (!timeLeft || !isVisible) return null;

  return (
    <>
      <div className="w-full bg-[#1a0b0b] border-b border-rose-500/30 relative overflow-hidden">
        {/* Animated Glow Background */}
        <div className="absolute inset-0 bg-linear-to-r from-rose-500/5 via-transparent to-rose-500/5" />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 pointer-events-none bg-linear-to-r from-transparent via-rose-500/20 to-transparent"
        />

        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center md:text-left flex-1">
              <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-rose-500/10 items-center justify-center border border-rose-500/20 shrink-0">
                <ServerOff className="w-6 h-6 text-rose-500 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-0.5">
                  <AlertCircle className="w-4 h-4 text-rose-500 hidden md:block" />
                  <h2 className="text-sm sm:text-base font-black text-rose-100 tracking-tight uppercase">Pengumuman Penting: Penutupan Aplikasi</h2>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <p className="text-[10px] sm:text-xs text-rose-300/80 leading-relaxed">Batas masa sewa server (trial) telah berakhir. Pastikan pekerjaan Anda selesai sebelum waktu habis.</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowModal(true)}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-bold hover:bg-rose-500/20 transition-all uppercase tracking-wider">
                      <Info className="w-3 h-3" />
                      Detail
                    </button>
                    <button
                      onClick={() => setIsVisible(false)}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold hover:bg-white/10 hover:text-white transition-all uppercase tracking-wider">
                      <EyeOff className="w-3 h-3" />
                      Disable
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 bg-black/40 px-4 py-2 rounded-2xl border border-rose-500/20 shadow-lg shadow-black/50 shrink-0">
              <div className="flex items-center gap-2 mr-2 sm:flex">
                <Timer className="w-4 h-4 text-rose-400" />
                <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Sisa Waktu:</span>
              </div>

              <div className="flex gap-3">
                <CountdownItem value={timeLeft.days} label="Hari" />
                <div className="text-rose-500/50 font-black self-start mt-1">:</div>
                <CountdownItem value={timeLeft.hours} label="Jam" />
                <div className="text-rose-500/50 font-black self-start mt-1">:</div>
                <CountdownItem value={timeLeft.minutes} label="Min" />
                <div className="text-rose-500/50 font-black self-start mt-1">:</div>
                <CountdownItem value={timeLeft.seconds} label="Det" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Image Modal */}
      {showModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setShowModal(false)} className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#07111f] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.9)] flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-rose-500 transition-all border border-white/5 hover:border-rose-500 shadow-lg">
              <X className="w-6 h-6" />
            </button>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col gap-12 sm:gap-16">
                {/* Section 1: Header & Sincere Explanation */}
                <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
                  <div className="relative mx-auto">
                    <div className="absolute inset-0 bg-rose-500 blur-2xl opacity-20 animate-pulse" />
                    <div className="relative w-20 h-20 rounded-3xl bg-linear-to-br from-rose-500/20 to-rose-500/5 flex items-center justify-center border border-rose-500/20">
                      <ServerOff className="w-10 h-10 text-rose-500" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-none">Status Layanan Server</h2>
                    <div className="h-1 w-20 bg-rose-500 mx-auto rounded-full" />
                  </div>

                  <div className="space-y-6">
                    <p className="text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
                      Halo semuanya, saya ingin berbagi kondisi jujur mengenai platform ini. Masa percobaan (trial) server penyimpanan kami akan segera berakhir. Saya sangat bersemangat untuk terus mengembangkan alat ini, namun biaya
                      operasional menjadi kendala utama saat ini.
                    </p>
                  </div>
                </div>

                {/* Section 2: Limit Preview */}
                <div className="space-y-4 transition-opacity">
                  <h3 className="text-[10px] font-bold text-slate-600 uppercase tracking-widest text-center">Visual Kondisi Server Saat Ini</h3>
                  <div className="w-full rounded-3xl overflow-hidden border border-white/5 bg-black/20 group relative">
                    <Image src={limitImg} alt="Server Limit Preview" placeholder="blur" className="w-full h-auto block transform group-hover:scale-[1.01] transition-transform duration-500" />
                  </div>
                </div>

                {/* Section 3: Estimasi Biaya */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/5" />
                    <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest italic">Estimasi Biaya</span>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>

                  <div className="w-full rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-inner group transition-all hover:border-rose-500/30 relative">
                    <Image src={detailHargaImg} alt="Detail Harga Server" placeholder="blur" className="w-full h-auto block transform group-hover:scale-[1.02] transition-transform duration-500" />
                  </div>
                  <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest">Gambar: Estimasi paket server yang dibutuhkan</p>
                </div>

                {/* Section 4: Call to Action (Saweria) */}
                <div className="relative group pb-8">
                  <div className="absolute inset-0 bg-teal-500/20 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-linear-to-b from-[#0f2a2d] to-[#07111f] p-8 sm:p-12 rounded-[3rem] border border-teal-500/20 text-center flex flex-col gap-8 shadow-2xl">
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-teal-400">Dukung Keberlanjutan Project</h3>
                      <p className="text-sm text-teal-100/60 leading-relaxed max-w-xl mx-auto">
                        Jika Anda terbantu dengan aplikasi ini dan ingin memberikan dukungan sukarela, kontribusi Anda akan sangat berarti untuk memperpanjang masa aktif server. Tidak ada paksaan, dukungan moral pun sangat kami hargai.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mx-auto">
                      <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://saweria.co/iqbalhikam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full sm:flex-1 py-4 px-6 rounded-2xl bg-linear-to-br from-teal-400 to-teal-600 text-[#07111f] font-black text-sm sm:text-base tracking-tight transition-all shadow-[0_15px_30px_-10px_rgba(20,184,166,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(20,184,166,0.5)] border border-teal-300/20">
                        <div className="bg-white/20 p-1.5 rounded-lg">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </div>
                        DUKUNG VIA SAWERIA
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.tiktok.com/@iqbalhikm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full sm:flex-1 py-4 px-6 rounded-2xl bg-white/5 border border-white/10 text-white/90 hover:bg-[#ff0050]/10 hover:border-[#ff0050]/30 hover:text-white transition-all text-sm sm:text-base font-bold shadow-xl backdrop-blur-sm">
                        <div className="bg-[#ff0050]/20 p-1.5 rounded-lg border border-[#ff0050]/20">
                          <MessageCircle className="w-5 h-5 text-[#ff0050]" />
                        </div>
                        Tanya di TikTok
                      </motion.a>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[10px] text-teal-500/50 font-black uppercase ">Terima kasih atas segala bantuannya</span>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-1 h-1 rounded-full bg-teal-500/30" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[32px]">
      <span className="text-lg sm:text-xl font-black text-white font-mono leading-none">{String(value).padStart(2, '0')}</span>
      <span className="text-[8px] font-bold text-rose-400/70 uppercase tracking-tighter mt-1">{label}</span>
    </div>
  );
}
