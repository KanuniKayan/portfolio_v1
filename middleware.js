import { NextResponse } from 'next/server';

export function middleware(request) {
    const isProduction = process.env.NODE_ENV === 'production';
    const proto = request.headers.get('x-forwarded-proto');
    const host = request.headers.get('host');

    // upgrade url to https if not already
    if (isProduction && proto && proto !== 'https') {
        return NextResponse.redirect(`https://${host}${request.nextUrl.pathname}${request.nextUrl.search}`, 301);
    }

    return NextResponse.next();
}

// Filter with config to run only on header urls
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - images in public folder (e.g. /public/images)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
}