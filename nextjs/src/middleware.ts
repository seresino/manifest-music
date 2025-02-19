import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define allowed paths and asset prefixes
const ALLOWED_PATHS = ['/', '/api'] as const
const ALLOWED_ASSET_PREFIXES = [
  '/_next',
  '/static',
  '/images',
  '/videos',
  '/favicon',
] as const

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is explicitly allowed
  if (ALLOWED_PATHS.includes(pathname as typeof ALLOWED_PATHS[number])) {
    return NextResponse.next()
  }

  // Check if the path starts with any allowed asset prefix
  if (ALLOWED_ASSET_PREFIXES.some(prefix => pathname.startsWith(prefix))) {
    return NextResponse.next()
  }

  // Redirect all other routes to the home page
  return NextResponse.redirect(new URL('/', request.url))
}

// Configure which routes should be handled by the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /_next (Next.js internals)
     * 2. /api (API routes)
     * 3. /static (static files)
     * 4. /videos (video files)
     * 5. /favicon.ico, /favicon, /manifest.json (favicon and manifest files)
     */
    '/((?!_next|api|static|videos|favicon|manifest.json).*)',
  ],
}
