import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get('user_session')?.value;
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Await params since it's a promise in newer Next.js versions
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: 'Moment ID is required' }, { status: 400 });
    }

    // First check if the moment belongs to the user
    const moment = await prisma.savedMoment.findUnique({
      where: { id },
    });

    if (!moment) {
      return NextResponse.json({ error: 'Moment not found' }, { status: 404 });
    }

    if (moment.userId !== userId) {
      return NextResponse.json({ error: 'Unauthorized to delete this moment' }, { status: 403 });
    }

    await prisma.savedMoment.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: 'Moment deleted successfully' });
  } catch (error) {
    console.error('Error deleting moment:', error);
    return NextResponse.json({ error: 'Failed to delete moment' }, { status: 500 });
  }
}
