import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    let settings = await prisma.globalSettings.findUnique({
      where: { id: 'global' },
    });

    if (!settings) {
      settings = await prisma.globalSettings.create({
        data: {
          id: 'global',
          minClipDuration: 5.0,
          maxClipDuration: 600.0,
          maxClipsPerVideo: 5,
          maintenanceMode: false,
        },
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Config GET error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
