import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function proxy(request: NextRequest) {
  const session = request.cookies.get('user_session');
  const { pathname } = request.nextUrl;

  // Paths that don't require authentication
  const publicPaths = ['/', '/login', '/register', '/api/login', '/api/register', '/api/auth/session'];

  // Check if current path is in publicPaths
  // Special case for root '/' to avoid matching everything
  const isPublicPath = pathname === '/' || publicPaths.filter((p) => p !== '/').some((path) => pathname.startsWith(path));

  if (isPublicPath) {
    // If logged in and trying to access login/register, redirect to home (or editor)
    if (session && (pathname === '/login' || pathname === '/register')) {
      return NextResponse.redirect(new URL('/editor', request.url));
    }
    return NextResponse.next();
  }

  // If no session, redirect to login
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Real-time status check: ensure user is still APPROVED
    const user = await prisma.appUser.findUnique({
      where: { id: session.value },
      select: { status: true },
    });

    if (!user || user.status !== 'APPROVED') {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('user_session');
      return response;
    }
  } catch (error) {
    console.error('Middleware status check failed:', error);
    // In case of DB error, we might want to allow or block.
    // Blocking is safer for a secure app.
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/ (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api/|_next/static|_next/image|favicon.ico).*)',
  ],
};
