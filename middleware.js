import { NextResponse } from 'next/server'

export async function middleware(request) {
  const headers = new Headers(request.headers)
  headers.set('x-from-middleware', 'hello-from-middleware')

  return NextResponse.next({
    request: {
      headers,
    },
  })
}
