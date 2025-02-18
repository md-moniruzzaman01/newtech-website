import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Use cookies.get() to access the cookie from the request
  // const token = req.cookies.get('token')?.value;
  // const isAuthenticated = !!token;

  // Check if the user is authenticated
  // if (!isAuthenticated && req.nextUrl.pathname !== '/login') {
  //   return NextResponse.redirect(new URL('/login', req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ['/portal/dashboard'], // Protect the dashboard route
};
