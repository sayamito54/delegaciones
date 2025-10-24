'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import UserTable from '@/components/admin/UserTable'
import UserFilters from '@/components/admin/UserFilters'
import EntraIDIntegration from '@/components/admin/EntraIDIntegration'
import { User, UserFilters as UserFiltersType, UserRole } from '@/types'
import { GovcoMainLayout } from '@/components/ui'
import { GovcoH1, GovcoText2 } from '@/components/ui/GovcoTypography'

// Datos demo de usuarios
const demoUsers: User[] = [
  {
    id: 'demo-0',
    email: 'administrador@demo.com',
    name: 'Administrador Demo',
    role: 'ADMINISTRADOR',
    department: 'Administración General',
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'demo-1',
    email: 'director@demo.com',
    name: 'Director Demo',
    role: 'DIRECTOR',
    department: 'Dirección General',
    isActive: true,
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02')
  },
  {
    id: 'demo-2',
    email: 'solicitante@demo.com',
    name: 'Solicitante Demo',
    role: 'SOLICITANTE',
    department: 'Área de Solicitudes',
    isActive: true,
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  },
  {
    id: 'demo-3',
    email: 'secretaria@demo.com',
    name: 'Secretaría Demo',
    role: 'SECRETARIA',
    department: 'Secretaría General',
    isActive: true,
    createdAt: new Date('2024-01-04'),
    updatedAt: new Date('2024-01-04')
  },
  {
    id: 'demo-4',
    email: 'delegatario@demo.com',
    name: 'Delegatario Demo',
    role: 'DELEGATARIO',
    department: 'Delegaciones',
    isActive: true,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: 'demo-5',
    email: 'usuario.inactivo@demo.com',
    name: 'Usuario Inactivo Demo',
    role: 'DELEGATARIO',
    department: 'Delegaciones',
    isActive: false,
    createdAt: new Date('2024-01-06'),
    updatedAt: new Date('2024-01-06')
  }
]

export default function AdminUsuariosPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [users, setUsers] = useState<User[]>(demoUsers)
  const [filteredUsers, setFilteredUsers] = useState<User[]>(demoUsers)
  const [filters, setFilters] = useState<UserFiltersType>({})
  const [loading, setLoading] = useState(false)

  // Verificar autenticación y rol
  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/auth/signin')
      return
    }

    if (session.user?.role !== 'ADMINISTRADOR') {
      router.push('/dashboard')
      return
    }
  }, [session, status, router])

  // Aplicar filtros
  useEffect(() => {
    let filtered = [...users]

    if (filters.email) {
      filtered = filtered.filter(user => 
        user.email.toLowerCase().includes(filters.email!.toLowerCase())
      )
    }

    if (filters.role) {
      filtered = filtered.filter(user => user.role === filters.role)
    }

    if (filters.department) {
      filtered = filtered.filter(user => 
        user.department?.toLowerCase().includes(filters.department!.toLowerCase())
      )
    }

    if (filters.isActive !== undefined) {
      filtered = filtered.filter(user => user.isActive === filters.isActive)
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      filtered = filtered.filter(user => 
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.department?.toLowerCase().includes(searchTerm)
      )
    }

    setFilteredUsers(filtered)
  }, [users, filters])

  const handleFilterChange = (newFilters: UserFiltersType) => {
    setFilters(newFilters)
  }

  const handleUserAction = async (userId: string, action: string) => {
    setLoading(true)
    
    try {
      // Simular acción en el usuario
      if (action === 'toggle-status') {
        setUsers(prevUsers => 
          prevUsers.map(user => 
            user.id === userId 
              ? { ...user, isActive: !user.isActive, updatedAt: new Date() }
              : user
          )
        )
      }
      
      // Aquí se registraría la acción en el sistema de trazabilidad
      console.log(`Acción ${action} realizada en usuario ${userId}`)
      
    } catch (error) {
      console.error('Error al realizar la acción:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleEntraIDUserFound = (entraUser: any) => {
    console.log('Usuario encontrado en Entra ID:', entraUser)
    // Aquí se procesaría la sincronización del usuario
  }

  if (status === 'loading') {
    return (
      <GovcoMainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-govco-marine"></div>
        </div>
      </GovcoMainLayout>
    )
  }

  if (!session || session.user?.role !== 'ADMINISTRADOR') {
    return null
  }

  return (
    <GovcoMainLayout>
      <div className="space-y-8">
        <div>
          <GovcoH1 className="text-govco-marine mb-2">
            Administración de Usuarios
          </GovcoH1>
          <GovcoText2 className="text-govco-dim-gray">
            Gestiona los usuarios registrados en el sistema
          </GovcoText2>
        </div>

        <UserFilters 
          filters={filters}
          onFilterChange={handleFilterChange}
        />

        <EntraIDIntegration 
          onUserFound={handleEntraIDUserFound}
        />

        <UserTable 
          users={filteredUsers}
          onUserAction={handleUserAction}
          loading={loading}
        />
      </div>
    </GovcoMainLayout>
  )
}
