'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { GovcoH1, GovcoH2, GovcoH3, GovcoH4, GovcoH5, GovcoText2, GovcoText3 } from './GovcoTypography'

// Header institucional
export interface GovcoHeaderProps {
  title: string
  subtitle?: string
  logo?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}

export const GovcoHeader: React.FC<GovcoHeaderProps> = ({
  title,
  subtitle,
  logo,
  actions,
  className
}) => {
  return (
    <header className={cn(
      'bg-govco-white border-b-2 border-govco-marine',
      'px-6 py-4 shadow-sm',
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {logo && (
            <div className="flex-shrink-0">
              {logo}
            </div>
          )}
          <div>
            <GovcoH2 className="text-govco-marine">{title}</GovcoH2>
            {subtitle && (
              <GovcoText2 className="text-govco-dim-gray mt-1">{subtitle}</GovcoText2>
            )}
          </div>
        </div>
        {actions && (
          <div className="flex items-center space-x-3">
            {actions}
          </div>
        )}
      </div>
    </header>
  )
}

// Barra superior institucional
export interface GovcoTopBarProps {
  children?: React.ReactNode
  className?: string
}

export const GovcoTopBar: React.FC<GovcoTopBarProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn(
      'bg-govco-blue-dark text-govco-white',
      'px-6 py-2 text-sm font-govco-body',
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span>Portal Único del Estado Colombiano</span>
        </div>
        {children}
      </div>
    </div>
  )
}

// Navegación principal
export interface GovcoNavigationProps {
  items: Array<{
    label: string
    href: string
    active?: boolean
    icon?: React.ReactNode
  }>
  className?: string
}

export const GovcoNavigation: React.FC<GovcoNavigationProps> = ({
  items,
  className
}) => {
  return (
    <nav className={cn(
      'bg-govco-white border-b border-govco-silver',
      'px-6 py-3',
      className
    )}>
      <div className="flex items-center space-x-8">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={cn(
              'flex items-center space-x-2 px-3 py-2 rounded-lg',
              'font-govco-body-medium text-sm transition-colors duration-200',
              item.active
                ? 'bg-govco-marine text-white'
                : 'text-govco-tundora hover:bg-govco-blue-light hover:text-govco-marine'
            )}
          >
            {item.icon && <span>{item.icon}</span>}
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}

// Footer institucional
export interface GovcoFooterProps {
  className?: string
}

export const GovcoFooter: React.FC<GovcoFooterProps> = ({ className }) => {
  return (
    <footer className={cn(
      'bg-govco-blue-dark text-govco-white',
      'px-6 py-8 mt-auto',
      className
    )}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <GovcoH4 className="text-govco-white mb-4">Portal Único del Estado</GovcoH4>
            <GovcoText2 className="text-govco-blue-light">
              Gobierno de Colombia
            </GovcoText2>
          </div>
          <div>
            <GovcoH5 className="text-govco-white mb-4">Enlaces de Interés</GovcoH5>
            <div className="space-y-2">
              <a href="#" className="block text-govco-blue-light hover:text-govco-white transition-colors">
                Presidencia de la República
              </a>
              <a href="#" className="block text-govco-blue-light hover:text-govco-white transition-colors">
                MinTIC
              </a>
              <a href="#" className="block text-govco-blue-light hover:text-govco-white transition-colors">
                Portal Único de Contratación
              </a>
            </div>
          </div>
          <div>
            <GovcoH5 className="text-govco-white mb-4">Contacto</GovcoH5>
            <GovcoText2 className="text-govco-blue-light">
              Línea de atención: (601) 344 34 60
            </GovcoText2>
            <GovcoText2 className="text-govco-blue-light">
              Bogotá D.C., Colombia
            </GovcoText2>
          </div>
        </div>
        <div className="border-t border-govco-marine mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <GovcoText3 className="text-govco-blue-light">
              © 2024 Gobierno de Colombia. Todos los derechos reservados.
            </GovcoText3>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-govco-blue-light hover:text-govco-white transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-govco-blue-light hover:text-govco-white transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Layout principal
export interface GovcoLayoutProps {
  children: React.ReactNode
  header?: React.ReactNode
  navigation?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export const GovcoLayout: React.FC<GovcoLayoutProps> = ({
  children,
  header,
  navigation,
  footer,
  className
}) => {
  return (
    <div className={cn('min-h-screen flex flex-col bg-govco-hawkes-blue', className)}>
      {header}
      {navigation}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      {footer}
    </div>
  )
}

// Contenedor de contenido
export interface GovcoContainerProps {
  children: React.ReactNode
  className?: string
}

export const GovcoContainer: React.FC<GovcoContainerProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn('max-w-7xl mx-auto px-6', className)}>
      {children}
    </div>
  )
}

// Card institucional
export interface GovcoCardProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  actions?: React.ReactNode
  className?: string
}

export const GovcoCard: React.FC<GovcoCardProps> = ({
  children,
  title,
  subtitle,
  actions,
  className
}) => {
  return (
    <div className={cn(
      'bg-govco-white rounded-lg shadow-sm border border-govco-silver',
      'p-6',
      className
    )}>
      {(title || subtitle || actions) && (
        <div className="flex items-center justify-between mb-6">
          <div>
            {title && <GovcoH3 className="text-govco-black">{title}</GovcoH3>}
            {subtitle && <GovcoText2 className="text-govco-dim-gray mt-1">{subtitle}</GovcoText2>}
          </div>
          {actions && (
            <div className="flex items-center space-x-2">
              {actions}
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  )
}
