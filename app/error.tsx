'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#09090b] text-white font-sans">
      <div className="glass rounded-3xl p-10 max-w-xl w-full text-center border-teal-500/20 shadow-2xl shadow-teal-900/10">
        <div className="space-y-8">
          <div className="flex justify-center">
            <div className="p-5 bg-teal-500/10 rounded-2xl text-teal-400 animate-bounce">
              <AlertTriangle size={56} />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Ups! Terjadi Kesalahan</h1>
            <p className="text-slate-400 leading-relaxed">Maaf, kami mengalami masalah teknis saat memproses permintaan Anda. Silakan coba sesaat lagi.</p>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button onClick={reset} className="w-full py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-teal-900/40 uppercase tracking-wider text-sm">
              <RefreshCw className="inline-block mr-2" size={18} />
              Coba Lagi
            </button>

            <Link href="/" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold transition-all active:scale-95 border border-white/5 uppercase tracking-wider text-sm">
              <ArrowLeft className="inline-block mr-2" size={18} />
              Kembali ke Beranda
            </Link>
          </div>

          <div className="pt-6 opacity-30">
            <p className="text-[10px] font-mono tracking-widest uppercase">System Digest: {error.digest || 'Unknown Tech Error'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
