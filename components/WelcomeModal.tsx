'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, Info, Zap, AlertCircle } from 'lucide-react';

interface WelcomeModalProps {
  onClose: () => void;
}

export default function WelcomeModal({ onClose }: WelcomeModalProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-100 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        className="max-w-md w-full bg-[#0a1628] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
        <div className="p-8 pb-4 flex flex-col items-center text-center gap-4 shrink-0">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
            <ShieldAlert className="w-6 h-6 text-rose-500" />
          </div>
          <h2 className="text-xl font-black text-white tracking-tight uppercase">Peringatan Beta</h2>
        </div>

        <div className="flex-1 overflow-y-auto premium-scrollbar px-8 py-2 space-y-4">
          <div className="space-y-4">
            {/* Batasan Fitur */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-teal-400" />
                <h4 className="text-[10px] font-black text-white uppercase tracking-wider">Batasan Fitur</h4>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Saat ini fitur klip hanya tersedia untuk video yang <span className="text-teal-400">bukan akses khusus membership</span>.
              </p>
            </div>

            {/* Etika & Anti-Pembajakan */}
            <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/10 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-500" />
                <h4 className="text-[10px] font-black text-rose-400 uppercase tracking-wider">Etika & Anti-Pembajakan</h4>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Gunakan aplikasi ini secara bertanggung jawab. Hindari mengunduh klip lebih dari <span className="text-rose-400">2-3 menit</span> tanpa izin pemilik.
              </p>
            </div>

            {/* Izin Konten Kreator */}
            <div className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/10 space-y-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-teal-400" />
                <h4 className="text-[10px] font-black text-teal-400 uppercase tracking-wider">Izin Konten Kreator</h4>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed italic">Hargai jika kreator tidak mengizinkan clipping. Jangan memaksakan penggunaan aplikasi pada video yang dilarang.</p>
            </div>

            {/* Status Pengembangan */}
            <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 space-y-2">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-wider">Status Pengembangan</h4>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Aplikasi masih dalam tahap <span className="text-amber-500 font-bold uppercase">Beta Test</span>. Beberapa fitur mungkin belum berfungsi maksimal.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 pt-4 flex flex-col items-center gap-4 shrink-0">
          <button onClick={onClose} className="w-full py-4 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm transition-all shadow-lg shadow-teal-900/40 active:scale-[0.98]">
            SAYA MENGERTI
          </button>
          <p className="text-slate-600 text-[10px] font-medium italic">
            © 2026 CAW Clips By{' '}
            <a href="https://iqbalhikam-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
              IqbalHikm
            </a>
            . Dibuat untuk Cliperr AnangWaw.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
