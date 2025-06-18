import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const isPublic = pathname.startsWith('/login') || pathname.startsWith('/register')

  const usrID = request.cookies.has('usrID')

  if (pathname === '/' ){
    if (!usrID) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    if (usrID) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }
  if (usrID && isPublic) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }

  return NextResponse.next()
}
