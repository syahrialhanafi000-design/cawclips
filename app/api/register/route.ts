import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { username, password, tiktokUsername, tiktokLink } = await req.json();

    if (!username || !password || !tiktokLink) {
      return NextResponse.json({ error: 'Field yang diperlukan tidak lengkap' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.appUser.findUnique({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Nama pengguna sudah digunakan' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with PENDING status
    await prisma.appUser.create({
      data: {
        username,
        password: hashedPassword,
        tiktokUsername,
        tiktokLink,
        status: 'PENDING',
      },
    });

    return NextResponse.json({ message: 'Pendaftaran berhasil dikirim' }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Kesalahan internal server' }, { status: 500 });
  }
}
