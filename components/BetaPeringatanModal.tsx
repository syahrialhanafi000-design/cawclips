'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Info, Zap, ArrowRight } from 'lucide-react';

interface BetaPeringatanModalProps {
  onClose: () => void;
}

export default function BetaPeringatanModal({ onClose }: BetaPeringatanModalProps) {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Background Overlay */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-[#0a1628] border-2 border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_32px_64px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[60px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-500/10 blur-[60px] pointer-events-none" />

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
            <ShieldAlert className="w-6 h-6 text-rose-500" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">Peringatan Beta</h2>
            <p className="text-teal-400 text-[10px] font-black tracking-widest uppercase">Penting untuk dibaca</p>
          </div>
        </div>

        <div className="space-y-5 mb-8">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <Info className="w-4 h-4 text-teal-400" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-0.5 text-xs uppercase tracking-wider">Batasan Fitur</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Saat ini fitur klip hanya tersedia untuk video yang <span className="text-teal-400 font-medium">bukan akses khusus membership</span>.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div>
              <h4 className="text-rose-400 font-bold mb-0.5 text-xs uppercase tracking-wider">Etika & Hak Cipta</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">Hargai privasi dan hak milik konten kreator. Jangan memaksakan clipping pada video yang dilarang oleh pemiliknya.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-amber-500" />
            </div>
            <div>
              <h4 className="text-amber-500 font-bold mb-0.5 text-xs uppercase tracking-wider">Status Beta</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">Aplikasi masih dalam tahap pengembangan. Beberapa fitur mungkin mengalami kendala teknis sementara.</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-4 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-black text-xs transition-all shadow-xl shadow-teal-900/40 active:scale-95 flex items-center justify-center gap-2 tracking-[0.2em]">
          SAYA MENGERTI & LANJUT
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}
