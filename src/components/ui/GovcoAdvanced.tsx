'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { GovcoButton } from './GovcoButton'
import { GovcoH3, GovcoText2, GovcoText3 } from './GovcoTypography'

// Modal institucional
export interface GovcoModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  actions?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export const GovcoModal: React.FC<GovcoModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  actions,
  size = 'md',
  className
}) => {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div 
          className="fixed inset-0 bg-govco-black/50 transition-opacity"
          onClick={onClose}
        />
        <div className={cn(
          'relative bg-govco-white rounded-lg shadow-xl',
          'w-full transform transition-all',
          sizeClasses[size],
          className
        )}>
          {title && (
            <div className="flex items-center justify-between p-6 border-b border-govco-silver">
              <GovcoH3 className="text-govco-black">{title}</GovcoH3>
              <button
                onClick={onClose}
                className="text-govco-dim-gray hover:text-govco-black transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          <div className="p-6">
            {children}
          </div>
          {actions && (
            <div className="flex items-center justify-end space-x-3 p-6 border-t border-govco-silver">
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Alertas institucionales
export interface GovcoAlertProps {
  type: 'success' | 'warning' | 'error' | 'info'
  title?: string
  children: React.ReactNode
  onClose?: () => void
  className?: string
}

export const GovcoAlert: React.FC<GovcoAlertProps> = ({
  type,
  title,
  children,
  onClose,
  className
}) => {
  const alertStyles = {
    success: {
      bg: 'bg-govco-success/10',
      border: 'border-govco-success',
      text: 'text-govco-success',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    warning: {
      bg: 'bg-govco-warning/10',
      border: 'border-govco-warning',
      text: 'text-govco-warning',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    error: {
      bg: 'bg-govco-error/10',
      border: 'border-govco-error',
      text: 'text-govco-error',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      )
    },
    info: {
      bg: 'bg-govco-info/10',
      border: 'border-govco-info',
      text: 'text-govco-info',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      )
    }
  }

  const style = alertStyles[type]

  return (
    <div className={cn(
      'flex items-start p-4 rounded-lg border-2',
      style.bg,
      style.border,
      className
    )}>
      <div className="flex-shrink-0 mr-3">
        <span className={style.text}>
          {style.icon}
        </span>
      </div>
      <div className="flex-1">
        {title && (
          <GovcoText2 className={cn('font-govco-body-bold mb-1', style.text)}>
            {title}
          </GovcoText2>
        )}
        <GovcoText3 className={style.text}>
          {children}
        </GovcoText3>
      </div>
      {onClose && (
        <div className="flex-shrink-0 ml-3">
          <button
            onClick={onClose}
            className={cn('hover:opacity-75 transition-opacity', style.text)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

// Tabla institucional
export interface GovcoTableColumn<T = any> {
  key: string
  label: string
  render?: (value: any, item: T) => React.ReactNode
  sortable?: boolean
  className?: string
}

export interface GovcoTableProps<T = any> {
  data: T[]
  columns: GovcoTableColumn<T>[]
  loading?: boolean
  emptyMessage?: string
  className?: string
}

export const GovcoTable = <T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  emptyMessage = 'No hay datos disponibles',
  className
}: GovcoTableProps<T>) => {
  if (loading) {
    return (
      <div className="bg-govco-white rounded-lg shadow-sm border border-govco-silver overflow-hidden">
        <div className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-govco-marine mx-auto"></div>
          <GovcoText2 className="text-govco-dim-gray mt-2">Cargando...</GovcoText2>
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="bg-govco-white rounded-lg shadow-sm border border-govco-silver overflow-hidden">
        <div className="p-8 text-center">
          <svg className="mx-auto h-12 w-12 text-govco-dim-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <GovcoText2 className="text-govco-dim-gray mt-2">{emptyMessage}</GovcoText2>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('bg-govco-white rounded-lg shadow-sm border border-govco-silver overflow-hidden', className)}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-govco-silver">
          <thead className="bg-govco-hawkes-blue">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    'px-6 py-3 text-left text-xs font-govco-body-medium text-govco-tundora uppercase tracking-wider',
                    column.className
                  )}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-govco-white divide-y divide-govco-silver">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-govco-hawkes-blue transition-colors">
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={cn(
                      'px-6 py-4 whitespace-nowrap text-sm font-govco-body text-govco-black',
                      column.className
                    )}
                  >
                    {column.render 
                      ? column.render(item[column.key], item)
                      : item[column.key]
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

