'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { GovcoTopBar, GovcoSecondaryBar } from './GovcoTopBars'
import { GovcoSidebar, getRoleNavigation } from './GovcoSidebar'
import { GovcoText2, GovcoText3 } from './GovcoTypography'
import { GovcoButton } from './GovcoButton'
import { signOut } from 'next-auth/react'

export interface GovcoMainLayoutProps {
  children: React.ReactNode
  className?: string
}

export const GovcoMainLayout: React.FC<GovcoMainLayoutProps> = ({ 
  children, 
  className 
}) => {
  const { data: session } = useSession()
  const role = session?.user?.role as string || 'GUEST'
  const navigationItems = getRoleNavigation(role)

  const handleSignOut = () => {
    signOut({ callbackUrl: '/auth/signin' })
  }

  return (
    <div className={cn('min-h-screen bg-govco-hawkes-blue', className)}>
      {/* Barra superior institucional */}
      <GovcoTopBar />
      
      {/* Barra secundaria con búsqueda */}
      <GovcoSecondaryBar />
      
      <div className="flex h-[calc(100vh-120px)]">
        {/* Sidebar de navegación */}
        <GovcoSidebar items={navigationItems} />
        
        {/* Contenido principal */}
        <div className="flex-1 flex flex-col">
          {/* Header del contenido */}
          <div className="bg-govco-white border-b border-govco-silver px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <GovcoText2 className="font-govco-body-bold text-govco-black">
                  Bienvenido, {session?.user?.name || 'Usuario'}
                </GovcoText2>
                <GovcoText3 className="text-govco-dim-gray">
                  {session?.user?.department || 'Sistema de Delegaciones'}
                </GovcoText3>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <GovcoText3 className="text-govco-dim-gray">
                    Rol: {role}
                  </GovcoText3>
                </div>
                
                <GovcoButton
                  variant="outline"
                  size="sm"
                  onClick={handleSignOut}
                  className="text-govco-error border-govco-error hover:bg-govco-error hover:text-govco-white"
                >
                  Cerrar Sesión
                </GovcoButton>
              </div>
            </div>
          </div>
          
          {/* Área de contenido */}
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

// Layout específico para páginas de autenticación (sin sidebar)
export interface GovcoAuthLayoutProps {
  children: React.ReactNode
  className?: string
}

export const GovcoAuthLayout: React.FC<GovcoAuthLayoutProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn('min-h-screen bg-govco-hawkes-blue', className)}>
      {/* Barra superior institucional */}
      <GovcoTopBar />
      
      {/* Barra secundaria con búsqueda */}
      <GovcoSecondaryBar />
      
      {/* Contenido de autenticación centrado */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] py-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  )
}

