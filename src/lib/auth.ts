import { NextAuthOptions } from 'next-auth'
// import { PrismaAdapter } from '@next-auth/prisma-adapter'
import AzureADProvider from 'next-auth/providers/azure-ad'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { prisma } from './prisma'
// import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma), // Comentado temporalmente para evitar problemas de DB
  providers: [
    // Proveedor de credenciales para usuarios demo
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Usuarios demo predefinidos
        const demoUsers = [
          {
            id: 'demo-0',
            email: 'administrador@demo.com',
            password: 'admin123',
            name: 'Administrador Demo',
            role: 'ADMINISTRADOR',
            department: 'Administración General'
          },
          {
            id: 'demo-1',
            email: 'director@demo.com',
            password: 'director123',
            name: 'Director Demo',
            role: 'DIRECTOR',
            department: 'Dirección General'
          },
                 {
                   id: 'demo-2',
                   email: 'solicitante@demo.com',
                   password: 'solicitante123',
                   name: 'Solicitante Demo',
                   role: 'SOLICITANTE',
                   department: 'Área de Solicitudes'
                 },
          {
            id: 'demo-3',
            email: 'secretaria@demo.com',
            password: 'secretaria123',
            name: 'Secretaría Demo',
            role: 'SECRETARIA',
            department: 'Secretaría General'
          },
          {
            id: 'demo-4',
            email: 'delegatario@demo.com',
            password: 'delegatario123',
            name: 'Delegatario Demo',
            role: 'DELEGATARIO',
            department: 'Delegaciones'
          }
        ]

        const user = demoUsers.find(u => u.email === credentials.email)
        
        if (user && user.password === credentials.password) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            department: user.department
          }
        }

        return null
      }
    }),
    // Proveedor de Azure AD (comentado temporalmente)
    // AzureADProvider({
    //   clientId: process.env.AZURE_CLIENT_ID!,
    //   clientSecret: process.env.AZURE_CLIENT_SECRET!,
    //   tenantId: process.env.AZURE_TENANT_ID!,
    // }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        token.role = user.role
        token.department = user.department
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
        session.user.department = token.department as string
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      // Si la URL es relativa, hacerla absoluta
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Si la URL es del mismo origen, permitirla
      else if (new URL(url).origin === baseUrl) return url
      // Por defecto, redirigir al dashboard
      return `${baseUrl}/dashboard`
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
