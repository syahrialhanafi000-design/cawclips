'use client';

import { useState } from 'react';
import { User, Lock, Loader2, Scissors, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Login failed');
      }

      router.push('/');
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
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
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Selamat Datang</h1>
          <p className="text-slate-400 text-sm">Masuk untuk mengakses editor CAW Clip.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500 group-focus-within:text-teal-400 transition-colors">
                <User size={18} />
              </div>
              <input
                name="username"
                type="text"
                required
                placeholder="Nama Pengguna"
                className="w-full bg-[#0d2137] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/50 transition-all font-medium"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500 group-focus-within:text-teal-400 transition-colors">
                <Lock size={18} />
              </div>
              <input
                name="password"
                type="password"
                required
                placeholder="Kata Sandi"
                className="w-full bg-[#0d2137] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/50 transition-all font-medium"
              />
            </div>
          </div>

          {error && <div className="p-3 text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl animate-in shake duration-500">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-teal-900/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <span>Masuk</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>

          <p className="text-center text-sm text-slate-500">
            Belum punya akses?{' '}
            <Link href="/register" className="text-teal-400 hover:text-teal-300 font-bold transition-colors">
              Daftar di sini
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
