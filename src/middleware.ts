import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith('/auth')

    // Si está en página de auth y ya está autenticado, redirigir según rol
    if (isAuthPage && isAuth) {
      const role = token?.role as string
      
      switch (role) {
        case 'ADMINISTRADOR':
          return NextResponse.redirect(new URL('/admin/usuarios', req.url))
        case 'DIRECTOR':
          return NextResponse.redirect(new URL('/dashboard', req.url))
        case 'TECNICA':
          return NextResponse.redirect(new URL('/dashboard', req.url))
        case 'SECRETARIA':
          return NextResponse.redirect(new URL('/dashboard', req.url))
        case 'DELEGATARIO':
          return NextResponse.redirect(new URL('/dashboard', req.url))
        default:
          return NextResponse.redirect(new URL('/dashboard', req.url))
      }
    }

    // Si no está autenticado y no está en página de auth, redirigir a signin
    if (!isAuth && !isAuthPage) {
      return NextResponse.redirect(new URL('/auth/signin', req.url))
    }

    // Verificar acceso a rutas protegidas por rol
    if (isAuth) {
      const role = token?.role as string
      const pathname = req.nextUrl.pathname

      // Solo administradores pueden acceder a /admin/*
      if (pathname.startsWith('/admin') && role !== 'ADMINISTRADOR') {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const isAuthPage = req.nextUrl.pathname.startsWith('/auth')
        
        // Permitir acceso a páginas de auth sin token
        if (isAuthPage) return true
        
        // Requerir token para todas las demás páginas
        return !!token
      },
    },
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/auth/signin',
    '/'
  ]
}

