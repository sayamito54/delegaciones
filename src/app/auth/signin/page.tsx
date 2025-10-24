'use client'

import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { GovcoAuthLayout, GovcoCard, GovcoInput, GovcoButton } from '@/components/ui'
import { GovcoH1, GovcoH2, GovcoH4, GovcoText2, GovcoText3 } from '@/components/ui/GovcoTypography'

interface LoginForm {
  email: string
  password: string
}

export default function SignInPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>()

  useEffect(() => {
    // Verificar si ya está autenticado
    getSession().then((session) => {
      if (session) {
        router.push('/dashboard')
      }
    })
  }, [router])

  const onSubmit = async (data: LoginForm) => {
    setLoading(true)
    setError('')
    
    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      })

      if (result?.error) {
        setError('Credenciales inválidas')
      } else if (result?.ok) {
        // La redirección se manejará automáticamente por el middleware
        // basado en el rol del usuario
        window.location.href = '/dashboard'
      }
    } catch (error) {
      setError('Error al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <GovcoAuthLayout>
      <div className="space-y-8">
        <div className="text-center">
          <GovcoH1 className="text-govco-marine">
            DelegacionesApp
          </GovcoH1>
          <GovcoText2 className="text-govco-dim-gray mt-2">
            Sistema de gestión de delegaciones
          </GovcoText2>
        </div>
        
        <GovcoCard title="Iniciar Sesión" subtitle="Usa las credenciales demo para probar la aplicación">
          {error && (
            <div className="bg-govco-error/10 border border-govco-error text-govco-error px-4 py-3 rounded-lg text-sm font-govco-body mb-6">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <GovcoInput
              {...register('email', { 
                required: 'El email es requerido',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Email inválido'
                }
              })}
              label="Correo electrónico"
              type="email"
              placeholder="administrador@demo.com"
              required
              error={errors.email?.message}
            />

            <GovcoInput
              {...register('password', { required: 'La contraseña es requerida' })}
              label="Contraseña"
              type="password"
              placeholder="admin123"
              required
              error={errors.password?.message}
            />

            <GovcoButton
              type="submit"
              variant="fill"
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                'Iniciar Sesión'
              )}
            </GovcoButton>
          </form>
        </GovcoCard>
        
        <GovcoCard className="bg-govco-blue-light border-govco-marine">
          <GovcoH4 className="text-govco-marine mb-4">Usuarios Demo Disponibles:</GovcoH4>
          <div className="space-y-2">
            <GovcoText3><strong>Administrador:</strong> administrador@demo.com / admin123</GovcoText3>
            <GovcoText3><strong>Director:</strong> director@demo.com / director123</GovcoText3>
            <GovcoText3><strong>Solicitante:</strong> solicitante@demo.com / solicitante123</GovcoText3>
            <GovcoText3><strong>Secretaría:</strong> secretaria@demo.com / secretaria123</GovcoText3>
            <GovcoText3><strong>Delegatario:</strong> delegatario@demo.com / delegatario123</GovcoText3>
          </div>
        </GovcoCard>
        
        <div className="text-center">
          <GovcoText3 className="text-govco-dim-gray">
            Al iniciar sesión, aceptas los términos y condiciones de uso
          </GovcoText3>
        </div>
      </div>
    </GovcoAuthLayout>
  )
}
