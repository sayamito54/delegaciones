import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/auth/signin')
  }

  // Redirigir según el rol del usuario
  switch (session.user.role) {
    case 'SOLICITANTE':
      redirect('/solicitante')
    case 'ADMINISTRADOR':
      redirect('/admin')
    case 'DIRECTOR':
      redirect('/director')
    case 'SECRETARIA':
      redirect('/secretaria')
    case 'DELEGATARIO':
      redirect('/delegatario')
    default:
      redirect('/auth/signin')
  }
}

