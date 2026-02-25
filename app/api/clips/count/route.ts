import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

function extractVideoId(url: string): string {
  // Handle YouTube variations
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|live|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(youtubeRegex);
  if (match && match[1]) return match[1];

  // Fallback to full URL if not a standard YouTube link (e.g. Twitch or direct file)
  return url;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json({ error: 'URL diperlukan' }, { status: 400 });
    }

    const videoId = extractVideoId(url);
    const cookieStore = await cookies();
    const userId = cookieStore.get('user_session')?.value;

    if (!userId) {
      return NextResponse.json({ error: 'Tidak diizinkan' }, { status: 401 });
    }

    // Verify user exists in DB
    const user = await prisma.appUser.findUnique({ where: { id: userId } });
    if (!user) {
      console.error(`DEBUG (GET /api/clips/count) User ${userId} not found in DB`);
      return NextResponse.json({ error: 'Pengguna tidak ditemukan. Silakan login kembali.' }, { status: 401 });
    }

    const clipCount = await prisma.videoClipCount.findUnique({
      where: {
        userId_videoId: {
          userId,
          videoId,
        },
      },
    });

    return NextResponse.json({ count: clipCount?.count || 0 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Clip count GET error:', message);
    return NextResponse.json({ error: 'Kesalahan Internal Server' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: 'URL diperlukan' }, { status: 400 });
    }

    const videoId = extractVideoId(url);
    const cookieStore = await cookies();
    const userId = cookieStore.get('user_session')?.value;

    if (!userId) {
      return NextResponse.json({ error: 'Tidak diizinkan' }, { status: 401 });
    }

    // Verify user exists in DB
    const user = await prisma.appUser.findUnique({ where: { id: userId } });
    if (!user) {
      console.error(`DEBUG (POST /api/clips/count) User ${userId} not found in DB`);
      return NextResponse.json({ error: 'Pengguna tidak ditemukan. Silakan login kembali.' }, { status: 401 });
    }

    const clipCount = await prisma.videoClipCount.upsert({
      where: {
        userId_videoId: {
          userId,
          videoId,
        },
      },
      update: {
        count: { increment: 1 },
      },
      create: {
        userId,
        videoId,
        count: 1,
      },
    });

    return NextResponse.json(clipCount);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Clip count POST error:', message);
    return NextResponse.json({ error: 'Kesalahan Internal Server', detail: message }, { status: 500 });
  }
}
