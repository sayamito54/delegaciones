'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  DocumentTextIcon, 
  UserGroupIcon, 
  BellIcon,
  CogIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import { UserRole } from '@/types'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, roles: ['tecnica', 'director', 'secretaria', 'delegatario'] },
  { name: 'Mis Delegaciones', href: '/delegaciones', icon: DocumentTextIcon, roles: ['delegatario'] },
  { name: 'Todas las Delegaciones', href: '/delegaciones/todas', icon: DocumentTextIcon, roles: ['tecnica', 'director', 'secretaria'] },
  { name: 'Usuarios', href: '/usuarios', icon: UserGroupIcon, roles: ['director', 'secretaria'] },
  { name: 'Notificaciones', href: '/notificaciones', icon: BellIcon, roles: ['tecnica', 'director', 'secretaria', 'delegatario'] },
  { name: 'Reportes', href: '/reportes', icon: ChartBarIcon, roles: ['director', 'secretaria'] },
  { name: 'Configuración', href: '/configuracion', icon: CogIcon, roles: ['director', 'secretaria'] },
]

export default function Sidebar() {
  const { data: session } = useSession()
  const pathname = usePathname()

  if (!session?.user) return null

  const userRole = session.user.role as UserRole
  const filteredNavigation = navigation.filter(item => 
    item.roles.includes(userRole)
  )

  return (
    <div className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto border-r border-gray-200">
        <div className="flex flex-col flex-grow">
          <nav className="flex-1 px-2 space-y-1">
            {filteredNavigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    isActive
                      ? 'bg-primary-100 text-primary-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                >
                  <item.icon
                    className={`${
                      isActive ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
                    } mr-3 flex-shrink-0 h-5 w-5`}
                  />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}

