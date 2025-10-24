'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { GovcoText2, GovcoText3 } from './GovcoTypography'

export interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
  children?: NavItem[]
}

export interface GovcoSidebarProps {
  items: NavItem[]
  className?: string
}

export const GovcoSidebar: React.FC<GovcoSidebarProps> = ({ items, className }) => {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.includes(item.label)
    const isItemActive = isActive(item.href)

    return (
      <div key={item.label}>
        <div
          className={cn(
            'flex items-center justify-between px-4 py-3 cursor-pointer transition-colors duration-200',
            level > 0 && 'pl-8',
            isItemActive 
              ? 'bg-govco-blue-light text-govco-marine border-r-2 border-govco-marine' 
              : 'text-govco-tundora hover:bg-govco-hawkes-blue hover:text-govco-marine'
          )}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.label)
            }
          }}
        >
          <Link 
            href={item.href} 
            className="flex items-center space-x-3 flex-1"
            onClick={(e) => {
              if (hasChildren) {
                e.preventDefault()
                toggleExpanded(item.label)
              }
            }}
          >
            {item.icon && (
              <span className="text-lg">{item.icon}</span>
            )}
            <GovcoText2 className={cn(
              'font-govco-body-medium',
              isItemActive ? 'text-govco-marine' : 'text-govco-tundora'
            )}>
              {item.label}
            </GovcoText2>
          </Link>
          
          {hasChildren && (
            <svg 
              className={cn(
                'w-4 h-4 transition-transform duration-200',
                isExpanded ? 'rotate-180' : 'rotate-0'
              )} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="bg-govco-white">
            {item.children!.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={cn(
      'w-64 bg-govco-white border-r border-govco-silver h-full overflow-y-auto',
      className
    )}>
      <div className="p-4 border-b border-govco-silver">
        <GovcoText2 className="font-govco-body-bold text-govco-black">
          DelegacionesApp
        </GovcoText2>
        <GovcoText3 className="text-govco-dim-gray">
          Sistema de Gestión
        </GovcoText3>
      </div>
      
      <nav className="py-2">
        {items.map((item) => renderNavItem(item))}
      </nav>
    </div>
  )
}

// Componente de menú específico para cada rol
export const getRoleNavigation = (role: string): NavItem[] => {
  const baseItems: NavItem[] = [
    {
      label: 'Inicio',
      href: '/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ]

  switch (role) {
    case 'ADMINISTRADOR':
      return [
        ...baseItems,
        {
          label: 'Componentes transversales',
          href: '#',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          ),
          children: [
            { label: 'Administración de Usuarios', href: '/admin/usuarios' },
            { label: 'Gestión de Roles', href: '/admin/roles' },
            { label: 'Configuración del Sistema', href: '/admin/config' },
            { label: 'Logs de Actividad', href: '/admin/logs' }
          ]
        },
        {
          label: 'Componentes generales',
          href: '#',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
          children: [
            { label: 'Dashboard General', href: '/dashboard' },
            { label: 'Reportes', href: '/reports' },
            { label: 'Estadísticas', href: '/statistics' }
          ]
        },
        {
          label: 'Componentes de formulario',
          href: '#',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          children: [
            { label: 'Gestión de Delegaciones', href: '/delegaciones' },
            { label: 'Formularios', href: '/forms' },
            { label: 'Validaciones', href: '/validations' }
          ]
        }
      ]

    case 'DIRECTOR':
      return [
        ...baseItems,
        {
          label: 'Gestión de Delegaciones',
          href: '/delegaciones',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        },
        {
          label: 'Aprobaciones',
          href: '/aprobaciones',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          label: 'Reportes',
          href: '/reportes',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        }
      ]

    case 'SOLICITANTE':
      return [
        ...baseItems,
        {
          label: 'Mis Solicitudes',
          href: '/mis-solicitudes',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        },
        {
          label: 'Nueva Solicitud',
          href: '/nueva-solicitud',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )
        },
        {
          label: 'Seguimiento',
          href: '/seguimiento-solicitudes',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )
        }
      ]

    case 'SECRETARIA':
      return [
        ...baseItems,
        {
          label: 'Gestión Documental',
          href: '/documentos',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        },
        {
          label: 'Seguimiento',
          href: '/seguimiento',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )
        }
      ]

    case 'DELEGATARIO':
      return [
        ...baseItems,
        {
          label: 'Mis Delegaciones',
          href: '/mis-delegaciones',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )
        },
        {
          label: 'Nueva Delegación',
          href: '/nueva-delegacion',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )
        }
      ]

    default:
      return baseItems
  }
}
