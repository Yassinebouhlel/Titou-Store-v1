import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

const STORE_COOKIE = 'selectedStore';
const VALID_STORES = [
  'ca',
  'sa',
  'tn',
  'us',
  'fr',
  'ma',
  'CA',
  'SA',
  'TN',
  'US',
  'FR',
  'MA'
];
const PROTECTED_PATHS = [
  'api',
  '_next',
  'favicon.ico',
  'public',
  'images',
  'fonts',
  'videos',
  'svg'
];

export function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;
  const pathParts = pathname.split('/').filter(Boolean);
  const firstPart = pathParts[0];

  // Allow access to protected paths without modification
  if (PROTECTED_PATHS.some((path) => pathname.startsWith(`/${path}`))) {
    return NextResponse.next();
  }

  // If we're at the root, handle store selection
  if (pathname === '/') {
    const selectedStore = request.cookies.get(STORE_COOKIE)?.value;
    if (selectedStore && VALID_STORES.includes(selectedStore)) {
      return NextResponse.redirect(new URL(`/${selectedStore}`, request.url));
    }
    return NextResponse.next();
  }

  // If the first part of the path is a valid store
  if (VALID_STORES.includes(firstPart)) {
    const response = NextResponse.next();
    response.cookies.set(STORE_COOKIE, firstPart);
    return response;
  }

  // If we have a selected store but it's not in the URL, redirect to include it
  const selectedStore = request.cookies.get(STORE_COOKIE)?.value;
  if (selectedStore && VALID_STORES.includes(selectedStore)) {
    return NextResponse.redirect(
      new URL(`/${selectedStore}${pathname}`, request.url)
    );
  }

  // If no store is selected or an invalid store is in the URL, redirect to the store selector
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|public|images|fonts|videos|svg).*)']
};
