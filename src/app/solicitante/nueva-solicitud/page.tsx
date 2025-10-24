import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import NuevaSolicitudForm from '@/components/solicitante/NuevaSolicitudForm'

export default async function NuevaSolicitudPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/auth/signin')
  }

  // Verificar que el usuario tenga rol SOLICITANTE
  if (session.user.role !== 'SOLICITANTE') {
    redirect('/dashboard')
  }

  return (
    <NuevaSolicitudForm 
      user={{
        id: session.user.id,
        name: session.user.name || '',
        email: session.user.email || '',
        department: session.user.department || ''
      }}
    />
  )
}
