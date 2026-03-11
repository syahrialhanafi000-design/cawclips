import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get('user_session')?.value;
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const url = new URL(req.url);
    const videoId = url.searchParams.get('videoId');

    if (!videoId) {
      // Return all moments for user
      const moments = await prisma.savedMoment.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      });
      return NextResponse.json({ moments });
    }

    // Return moments for specific video
    const moments = await prisma.savedMoment.findMany({
      where: { userId, videoId },
      orderBy: { startTime: 'asc' },
    });
    
    return NextResponse.json({ moments });
  } catch (error) {
    console.error('Error fetching moments:', error);
    return NextResponse.json({ error: 'Failed to fetch moments' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get('user_session')?.value;
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { videoId, label, startTime, endTime } = body;

    if (!videoId || typeof startTime !== 'number' || typeof endTime !== 'number') {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const moment = await prisma.savedMoment.create({
      data: {
        userId,
        videoId,
        label: label || 'Saved Moment',
        startTime,
        endTime,
      },
    });

    return NextResponse.json({ moment }, { status: 201 });
  } catch (error) {
    console.error('Error saving moment:', error);
    return NextResponse.json({ error: 'Failed to save moment' }, { status: 500 });
  }
}
