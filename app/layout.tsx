import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { prisma } from '../src/lib/prisma';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CAW Clip · Video Clipping Tool',
  description: 'Clip any YouTube or video URL to a specific time range, fast and privately.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check maintenance mode
  const settings = await prisma.globalSettings.findUnique({
    where: { id: 'global' },
  });

  const headerList = await headers();
  const fullUrl = headerList.get('referer') || '';
  const pathname = headerList.get('x-url') || ''; // Note: needs middleware to populate if x-url is used, or just use next/navigation if it was client side.
  // Since we are in layout.tsx (server), and we want to avoid redirect loop for /maintenance

  // A better way to get pathname in server component layout in Next.js 15+ is via middleware or just checking the current request.
  // However, simple check: if settings?.maintenanceMode is true, we should be careful.

  // Let's use a simpler approach for now to avoid complexity with headers in layouts.
  // We can just check the URL in a separate client component if needed, or better, use a middleware.
  // But wait, I can't easily add a middleware if it doesn't exist.

  // For now, let's just use the prisma check and a simple logic.
  // If settings?.maintenanceMode is true, we will redirect.
  // To avoid loop, we can check if the children being rendered IS the maintenance page,
  // but that's hard in layout.

  // Actually, I'll create a small middleware.ts if it doesn't exist. It's the standard way.

  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
