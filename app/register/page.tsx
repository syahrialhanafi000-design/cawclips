'use client';

import { useState } from 'react';
import { User, Lock, Link as LinkIcon, AtSign, Loader2, Scissors } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to submit application');
      }

      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 bg-[#07111f]">
        <div className="glass w-full max-w-md rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500 shadow-2xl shadow-black/60">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white">Aplikasi Terkirim!</h2>
          <p className="text-slate-400">Terima kasih telah mendaftar. Admin akan meninjau permintaan anda segera. Anda dapat login setelah disetujui.</p>
          <div className="mt-8 flex flex-col gap-3">
            <Link href="/login" className="rounded-xl bg-teal-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-teal-500 shadow-lg shadow-teal-900/20">
              Ke Halaman Login
            </Link>
            <button onClick={() => setSuccess(false)} className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
              Daftar akun lain
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-[#07111f]">
      <div className="glass w-full max-w-md rounded-2xl p-8 shadow-2xl shadow-black/60 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-teal-500/10 rounded-2xl border border-teal-500/20">
              <Scissors className="w-8 h-8 text-teal-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Gabung CAW Clip</h1>
          <p className="text-slate-400 text-sm">Daftar untuk mulai membuat klip video berkualitas tinggi.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            {/* Username */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500 group-focus-within:text-teal-400 transition-colors">
                <User size={18} />
              </div>
              <input
                name="username"
                type="text"
                required
                placeholder="Nama Pengguna Pilihan"
                className="w-full bg-[#0d2137] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/50 transition-all font-medium"
              />
            </div>

            {/* Password */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500 group-focus-within:text-teal-400 transition-colors">
                <Lock size={18} />
              </div>
              <input
                name="password"
                type="password"
                required
                placeholder="Pilih Kata Sandi"
                className="w-full bg-[#0d2137] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/50 transition-all font-medium"
              />
            </div>

            {/* TikTok Username */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500 group-focus-within:text-teal-400 transition-colors">
                <AtSign size={18} />
              </div>
              <input
                name="tiktokUsername"
                type="text"
                required
                placeholder="Username TikTok (misal @user)"
                className="w-full bg-[#0d2137] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/50 transition-all font-medium"
              />
            </div>

            {/* TikTok Link */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500 group-focus-within:text-teal-400 transition-colors">
                <LinkIcon size={18} />
              </div>
              <input
                name="tiktokLink"
                type="url"
                required
                placeholder="Tautan Profil TikTok"
                className="w-full bg-[#0d2137] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/50 transition-all font-medium"
              />
            </div>
          </div>

          {error && <div className="p-3 text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl animate-in shake duration-500">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-teal-900/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {loading ? <Loader2 className="animate-spin" size={20} /> : 'Kirim Pendaftaran'}
          </button>

          <p className="text-center text-sm text-slate-500">
            Sudah punya akses?{' '}
            <Link href="/login" className="text-teal-400 hover:text-teal-300 font-bold transition-colors">
              Masuk di sini
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
