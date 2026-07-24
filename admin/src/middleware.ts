import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@xtower.fr';
  // In production, check session header or Supabase auth cookie for ADMIN_EMAIL match
  const userEmailHeader = request.headers.get('x-user-email');

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (userEmailHeader && userEmailHeader !== adminEmail) {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
