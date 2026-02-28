'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hammer, Clock, ShieldAlert, Sparkles } from 'lucide-react';

interface Star {
  id: number;
  width: string;
  height: string;
  top: string;
  left: string;
  duration: number;
  delay: number;
}

export default function MaintenancePage() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = [...Array(20)].map((_, i) => ({
      id: i,
      width: Math.random() * 4 + 2 + 'px',
      height: Math.random() * 4 + 2 + 'px',
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 4,
    }));

    // Use requestAnimationFrame to avoid synchronous setState in Effect
    const frameId = requestAnimationFrame(() => {
      setStars(generatedStars);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="min-h-screen bg-[#07111f] text-white flex flex-col items-center justify-center p-6 overflow-hidden relative font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-teal-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-teal-400/5 rounded-full blur-[80px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 text-center max-w-2xl">
        {/* Animated Icon */}
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex p-4 rounded-3xl bg-linear-to-br from-teal-600/20 to-blue-600/20 border border-white/10 shadow-2xl mb-8 relative">
          <Hammer className="w-12 h-12 text-teal-400" />
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-1 -right-1">
            <Sparkles className="w-5 h-5 text-blue-400" />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-white via-white to-white/40">
          SEDANG <span className="text-teal-400">MENYETEL</span> MESIN
        </h1>

        <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 leading-relaxed max-w-lg mx-auto">CAW Clip sedang dalam pemeliharaan terjadwal untuk meningkatkan performa dan pengalaman kliping Anda.</p>

        {/* Status Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-left group hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-teal-400" />
              <span className="text-sm font-bold uppercase tracking-wider text-teal-400">Perkiraan Waktu</span>
            </div>
            <p className="text-slate-300 font-medium tracking-wide">Sekitar 15 - 30 menit</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-left group hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <ShieldAlert className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-bold uppercase tracking-wider text-blue-400">Integritas Sistem</span>
            </div>
            <p className="text-slate-300 font-medium tracking-wide">Semua data Anda aman dan terlindungi.</p>
          </div>
        </div>

        {/* Interactive Element */}
        <div className="relative group inline-block">
          <div className="absolute -inset-1 bg-linear-to-r from-teal-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-8 py-4 bg-black rounded-2xl border border-white/10 leading-none flex items-center divide-x divide-gray-600">
            <span className="flex items-center space-x-5">
              <span className="pr-6 text-gray-100 font-bold">Butuh bantuan?</span>
            </span>
            <span className="pl-6 text-teal-400 group-hover:text-teal-300 transition duration-200 uppercase text-sm font-black tracking-widest">Hubungi Dukungan &rarr;</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              width: star.width,
              height: star.height,
              top: star.top,
              left: star.left,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
