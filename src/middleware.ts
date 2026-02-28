import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Skip middleware for static files, API routes, etc.
  if (pathname.includes('.') || pathname.startsWith('/api') || pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  try {
    // We'll fetch from our own config API with cache busting
    const baseUrl = request.nextUrl.origin;
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

      // If maintenance is ON, all paths (except maintenance page) redirect to /maintenance
      if (isMaintenanceActive && !isMaintenancePage) {
        console.log('Maintenance mode ACTIVE. Redirecting to /maintenance');
        return NextResponse.redirect(new URL('/maintenance', request.url));
      }

      // If maintenance is OFF, and user is on /maintenance, redirect to home
      if (!isMaintenanceActive && isMaintenancePage) {
        console.log('Maintenance mode INACTIVE. Redirecting away from /maintenance');
        return NextResponse.redirect(new URL('/', request.url));
      }
    }
  } catch (error) {
    console.error('Middleware maintenance check error:', error);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
