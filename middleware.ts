import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Skip middleware for static files, API routes, and _next internals
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.') || pathname === '/favicon.ico') {
    return NextResponse.next();
  }

  // 2. Maintenance Mode Check (Edge Compatible - uses fetch)
  try {
    const baseUrl = request.nextUrl.origin;
    // Cache busting with timestamp
    const res = await fetch(`${baseUrl}/api/config?t=${Date.now()}`, {
      cache: 'no-store',
      headers: {
        Pragma: 'no-cache',
        'Cache-Control': 'no-cache',
      },
    });

    if (res.ok) {
      const settings = await res.json();
      const isMaintenanceActive = settings.maintenanceMode === true;
      const isMaintenancePage = pathname === '/maintenance';

      if (isMaintenanceActive && !isMaintenancePage) {
        console.log('Maintenance mode ACTIVE. Redirecting to /maintenance');
        return NextResponse.redirect(new URL('/maintenance', request.url));
      }

      if (!isMaintenanceActive && isMaintenancePage) {
        console.log('Maintenance mode INACTIVE. Redirecting away from /maintenance');
        return NextResponse.redirect(new URL('/', request.url));
      }
    }
  } catch (error) {
    console.error('Middleware maintenance check failed:', error);
  }

  // 3. Authentication / Session Check
  const session = request.cookies.get('user_session');

  // Public paths that don't require a valid session
  const publicPaths = ['/', '/login', '/register', '/maintenance'];

  // Check if current path is public
  const isPublicPath = publicPaths.includes(pathname);

  // If logged in and trying to access login/register, redirect to editor
  if (session && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/editor', request.url));
  }

  // If NOT logged in and trying to access a protected path, redirect to login
  if (!session && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/|_next/static|_next/image|favicon.ico).*)'],
};
