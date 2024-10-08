import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === 'signup' || path === '/verifyemail';
    const token = request.cookies.get('token')?.value || '';
    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/home', request.nextUrl));
    }
    if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
}

export const config ={
    matcher: ['/home', '/profile', '/login', '/signup', '/verifyemail']
};