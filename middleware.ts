import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { UserType } from './lib/types/data.types';

export default function middleware(request: NextRequest) {
  const token = cookies().get('token');

  if (!token) {
    const url = new URL('/login', request.nextUrl.origin);
    return NextResponse.redirect(url);
  }

  const user: UserType = jwtDecode(token.value);

  if (!user?.phone) {
    const url = new URL('/login', request.nextUrl.origin);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin',
    '/admin/customers',
    '/admin/customers/:phone',
    '/admin/orders',
    '/admin/orders/:orderId',
  ],
};
