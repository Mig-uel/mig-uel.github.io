import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = (request: NextRequest) => {
  // add a new header x-current-path, which passes the path to the downstream components
  const headers = new Headers(request.headers)
  headers.set('x-current-path', request.nextUrl.pathname)

  return NextResponse.next({ headers })
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
