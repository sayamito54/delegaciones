'use client'

import { useSearchParams } from 'next/navigation'
import { GovcoLayout, GovcoCard, GovcoButton } from '@/components/ui'
import { GovcoH1, GovcoText2, GovcoAlert } from '@/components/ui/GovcoTypography'
import Link from 'next/link'

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case 'Configuration':
        return 'Hay un problema con la configuración del servidor.'
      case 'AccessDenied':
        return 'Acceso denegado. No tienes permisos para acceder a esta página.'
      case 'Verification':
        return 'El token ha expirado o ya ha sido usado.'
      case 'Default':
        return 'Ocurrió un error inesperado.'
      default:
        return 'Ocurrió un error durante la autenticación.'
    }
  }

  return (
    <GovcoLayout>
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <GovcoH1 className="text-govco-error">
              Error de Autenticación
            </GovcoH1>
            <GovcoText2 className="text-govco-dim-gray mt-2">
              No se pudo completar el proceso de inicio de sesión
            </GovcoText2>
          </div>
          
          <GovcoCard>
            <GovcoAlert type="error" title="Error">
              {getErrorMessage(error)}
            </GovcoAlert>
            
            <div className="mt-6 space-y-4">
              <GovcoButton asChild variant="fill" className="w-full">
                <Link href="/auth/signin">
                  Intentar de nuevo
                </Link>
              </GovcoButton>
              
              <GovcoButton asChild variant="outline" className="w-full">
                <Link href="/">
                  Volver al inicio
                </Link>
              </GovcoButton>
            </div>
          </GovcoCard>
        </div>
      </div>
    </GovcoLayout>
  )
}

