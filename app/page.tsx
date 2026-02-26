'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Layers, Clock, ArrowRight, ShieldAlert, Info, Play, Zap } from 'lucide-react';
import BetaPeringatanModal from '@/components/BetaPeringatanModal';
import Tooltip from '@/components/Tooltip';

const FeatureCard = ({ icon: Icon, title, description, delay, tooltip }: { icon: React.ElementType; title: string; description: string; delay: number; tooltip: string }) => (
  <Tooltip content={tooltip} position="bottom">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-white/10 transition-all group">
      <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20 mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-teal-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  </Tooltip>
);

export default function LandingPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  return (
    <div className="min-h-screen bg-[#07111f] text-white overflow-x-hidden selection:bg-teal-500/30">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* Top Background Pattern */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-linear-to-b from-teal-500/5 to-transparent pointer-events-none" />

      {/* Membership Banner / Top Section */}
      <section className="relative z-50 px-6 py-12 border-b border-white/5 bg-teal-500/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center border border-teal-500/30">
              <Zap className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight">
                Cliperr AnangWaw, <span className="text-teal-400">Masa nggak Membership?</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium italic">Gabung jadi member sekarang untuk apresiasi AnangWaw!</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Tooltip content="Dukung Kreator di Channel Gaming" position="bottom">
              <a
                href="https://www.youtube.com/@ananggaming/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:scale-[1.05] transition-all shadow-xl active:scale-95 flex items-center gap-2 whitespace-nowrap">
                Join @ananggaming
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Tooltip>
            <Tooltip content="Dukung Kreator di Channel Utama" position="bottom">
              <a
                href="https://www.youtube.com/@anangwaw/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 rounded-xl bg-teal-600 text-white font-bold text-sm hover:scale-[1.05] transition-all shadow-xl active:scale-95 flex items-center gap-2 whitespace-nowrap">
                Join @anangwaw
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
            <Camera className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter">CAW CLIP</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Tooltip content="Lihat kumpulan fitur keren kami">
            <a href="#features" className="hover:text-white transition-colors">
              Fitur
            </a>
          </Tooltip>
          <Tooltip content="Baca syarat & ketentuan penggunaan">
            <button onClick={() => setShowDisclaimer(true)} className="hover:text-white transition-colors">
              Peringatan
            </button>
          </Tooltip>
        </div>
        <Tooltip content="Masuk ke Editor Klip" position="left">
          <Link href="/editor" className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-sm font-bold transition-all active:scale-95">
            Editor
          </Link>
        </Tooltip>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest mb-8">
          <Zap className="w-3 h-3 animate-pulse" />
          Sekarang dalam Tahap Beta
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none sm:leading-[0.9] mb-8">
          TANGKAP SETIAP <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-emerald-400 italic">MOMEN</span> DENGAN HD
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-xl text-slate-400 text-lg md:text-xl font-medium mb-12">
          Tangkap foto berkualitas tinggi, rangkaian frame, dan klip video dari livestream favorit anda dengan presisi sempurna.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Tooltip content="Mulai membuat klip video sekarang" position="bottom" className="w-full sm:w-auto">
            <button
              onClick={async () => {
                try {
                  const res = await fetch('/api/auth/session');
                  const data = await res.json();
                  window.location.href = data.authenticated ? '/editor' : '/login';
                } catch {
                  window.location.href = '/login';
                }
              }}
              className="group px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-teal-500 hover:bg-teal-400 text-white font-black text-base sm:text-lg transition-all shadow-xl shadow-teal-500/25 flex items-center justify-center gap-2 active:scale-95 w-full sm:w-auto">
              TANGKAP MOMEN SEKARANG
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Tooltip>
          <Tooltip content="Pelajari fitur kami" position="bottom" className="w-full sm:w-auto">
            <a
              href="#features"
              className="px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
              <Play className="w-5 h-5 text-teal-400 fill-teal-400" />
              Pelajari Fitur
            </a>
          </Tooltip>
        </motion.div>

        {/* Floating Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-24 w-full max-w-5xl aspect-video rounded-3xl bg-[#0a1628] border border-white/10 shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-linear-to-t from-[#07111f] via-transparent to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
            <Camera className="w-32 h-32 text-teal-500/20 animate-pulse" />
          </div>
          {/* Mock UI Overlay */}
          <div className="absolute bottom-12 left-12 z-20 hidden md:block text-left">
            <div className="flex gap-4">
              <div className="w-32 h-2 bg-teal-500 rounded-full" />
              <div className="w-24 h-2 bg-white/20 rounded-full" />
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Pemilih Momen</div>
                <div className="text-xl font-black text-white">01:23:45.67</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="px-6 py-32 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-4">DIRANCANG UNTUK KUALITAS</h2>
          <p className="text-slate-500 font-medium">Bawa momen livestreaming ke level profesional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Layers}
            title="Super HD PNG"
            description="Lakukan capture frame tunggal dengan resolusi lossless. Bukan sekedar screenshot, tapi frame asli berkualitas tinggi."
            delay={0.1}
            tooltip="Kualitas gambar terbaik tanpa kompresi"
          />
          <FeatureCard icon={Zap} title="Burst Mode" description="Tangkap urutan moment cepat dalam rangkaian frame PNG yang tajam. Sempurna untuk aksi yang sangat cepat." delay={0.2} tooltip="Banyak frame dalam satu kali klik" />
          <FeatureCard
            icon={Clock}
            title="Moment Picker"
            description="Timeline editor yang presisi dengan seek slider cepat dan boundary setter sekali klik untuk kemudahan clipping."
            delay={0.3}
            tooltip="Pilih durasi klip dengan presisi milidetik"
          />
        </div>
      </section>

      {/* Disclaimers Section */}
      <section id="disclaimers" className="px-6 py-32 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-[40px] bg-linear-to-br from-white/5 to-white/2 border border-white/10 relative overflow-hidden">
            {/* Glow Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px] pointer-events-none" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                <ShieldAlert className="w-6 h-6 text-rose-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">PERINGATAN BETA</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-6 items-start">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-1">
                  <Info className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-wider text-xs">Batasan Fitur</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Saat ini fitur klip hanya tersedia untuk video yang <span className="text-teal-400 font-medium">bukan akses khusus membership</span>.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center shrink-0 mt-1">
                  <ShieldAlert className="w-4 h-4 text-rose-500" />
                </div>
                <div>
                  <h4 className="text-rose-400 font-bold mb-1 uppercase tracking-wider text-xs">Etika & Anti-Pembajakan</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Gunakan aplikasi ini secara bertanggung jawab. Hindari mengunduh klip lebih dari <span className="text-rose-400 font-medium">2-3 menit</span> tanpa izin eksplisit dari pemilik konten.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start md:col-span-2">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0 mt-1">
                  <ShieldAlert className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-teal-400 font-bold mb-1 uppercase tracking-wider text-xs">Izin Konten Kreator</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Jika konten kreator <span className="text-white font-medium italic underline decoration-teal-500/50 decoration-2 underline-offset-4">tidak mengizinkan</span> pembuatan klip (clipping) pada video mereka, mohon hargai
                    privasi dan hak tersebut. Jangan memaksakan penggunaan aplikasi ini untuk video yang dilarang oleh pemiliknya.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start md:col-span-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-amber-500 font-bold mb-1 uppercase tracking-wider text-xs">Status Pengembangan</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Aplikasi ini masih dalam tahap <span className="text-amber-500 font-medium uppercase tracking-tighter">Beta Test</span>. Beberapa fitur mungkin belum berfungsi maksimal.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-slate-500 text-sm font-medium">
                © 2026 CAW Clips By{' '}
                <a href="https://iqbalhikam-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                  IqbalHikm
                </a>
                . Dibuat untuk Cliperr AnangWaw.
              </div>
              <Link href="/editor" className="text-teal-400 hover:text-teal-300 font-bold text-sm flex items-center gap-2 group">
                Ke Editor
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA Final */}
      <footer className="px-6 py-20 sm:py-32 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 sm:mb-12 italic tracking-tighter">SIAP MEMBUAT KLIP?</h2>
        <button
          onClick={async () => {
            try {
              const res = await fetch('/api/auth/session');
              const data = await res.json();
              window.location.href = data.authenticated ? '/editor' : '/login';
            } catch {
              window.location.href = '/login';
            }
          }}
          className="inline-flex px-12 py-6 rounded-3xl bg-teal-500 hover:bg-teal-400 text-white font-black text-xl transition-all shadow-2xl shadow-teal-500/20 active:scale-95">
          TANGKAP MOMEN PERTAMA ANDA
        </button>
      </footer>

      <AnimatePresence>{showDisclaimer && <BetaPeringatanModal onClose={() => setShowDisclaimer(false)} />}</AnimatePresence>
    </div>
  );
}
