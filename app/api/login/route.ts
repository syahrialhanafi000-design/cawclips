import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Kredensial tidak lengkap' }, { status: 400 });
    }

    const user = await prisma.appUser.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json({ error: 'Kredensial salah' }, { status: 401 });
    }

    if (user.status !== 'APPROVED') {
      return NextResponse.json({ error: 'Akun anda masih menunggu persetujuan atau telah ditolak' }, { status: 403 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: 'Kredensial salah' }, { status: 401 });
    }

    // Set simple session cookie
    const response = NextResponse.json({ success: true });
    (await cookies()).set('user_session', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Kesalahan internal server' }, { status: 500 });
  }
}
