import { Ghost, Home, Compass } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#09090b] text-white font-sans">
      <div className="glass rounded-3xl p-12 max-w-lg w-full text-center border-teal-500/10 shadow-3xl shadow-teal-950/20">
        <div className="space-y-10">
          <div className="relative flex justify-center">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
              <span className="text-[140px] font-black text-white/5 tracking-tighter select-none">404</span>
            </div>
            <div className="relative z-10 p-6 bg-teal-500/10 rounded-full text-teal-400 border border-teal-500/20 shadow-inner">
              <Ghost size={72} className="animate-pulse" />
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            <h1 className="text-3xl font-bold tracking-tight">Halaman Tidak Ditemukan</h1>
            <p className="text-slate-400 leading-relaxed">Konten yang Anda cari mungkin telah ditarik atau dipindahkan ke alamat lain.</p>
          </div>

          <div className="flex flex-col gap-3 pt-6 relative z-10">
            <Link
              href="/"
              className="flex items-center justify-center gap-3 w-full py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-bold transition-all active:scale-95 shadow-xl shadow-teal-900/40 uppercase tracking-widest text-sm">
              <Home size={20} />
              Ke Beranda
            </Link>

            <Link
              href="/editor"
              className="flex items-center justify-center gap-3 w-full py-4 bg-slate-900 hover:bg-slate-800 text-teal-500 rounded-xl font-bold transition-all active:scale-95 border border-teal-500/20 uppercase tracking-widest text-sm">
              <Compass size={20} />
              Mulai Clipping
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center gap-3 opacity-40">
            <div className="h-px w-8 bg-teal-500/30" />
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase">CAW CLIP · 2026</p>
            <div className="h-px w-8 bg-teal-500/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
