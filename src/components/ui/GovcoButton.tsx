'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface GovcoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'fill' | 'outline' | 'secondary' | 'text'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  children: React.ReactNode
}

const buttonVariants = {
  fill: 'bg-govco-marine hover:bg-govco-blue-dark text-white border-govco-marine',
  outline: 'bg-white hover:bg-govco-blue-dark text-govco-marine border-govco-marine hover:text-white',
  secondary: 'bg-govco-blue-light hover:bg-govco-marine text-govco-marine border-govco-blue-light hover:text-white',
  text: 'bg-transparent hover:bg-govco-blue-light text-govco-marine border-transparent hover:border-govco-blue-light'
}

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}

export const GovcoButton: React.FC<GovcoButtonProps> = ({
  variant = 'fill',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center font-govco-body-medium',
        'border-2 border-solid rounded-govco',
        'transition-all duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-govco-blue-dark focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        'disabled:bg-govco-dim-gray disabled:border-govco-dim-gray disabled:text-white',
        
        // Variant styles
        buttonVariants[variant],
        
        // Size styles
        buttonSizes[size],
        
        // Icon spacing
        icon && iconPosition === 'left' && 'gap-2',
        icon && iconPosition === 'right' && 'gap-2',
        
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </button>
  )
}

// Botón simbólico (solo icono)
export interface GovcoIconButtonProps extends Omit<GovcoButtonProps, 'children'> {
  icon: React.ReactNode
  'aria-label': string
}

export const GovcoIconButton: React.FC<GovcoIconButtonProps> = ({
  icon,
  variant = 'fill',
  size = 'md',
  className,
  ...props
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center font-govco-body-medium',
        'border-2 border-solid rounded-govco',
        'transition-all duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-govco-blue-dark focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        'disabled:bg-govco-dim-gray disabled:border-govco-dim-gray disabled:text-white',
        
        // Variant styles
        buttonVariants[variant],
        
        // Size styles
        iconSizes[size],
        
        className
      )}
      {...props}
    >
      <span className="flex-shrink-0">{icon}</span>
    </button>
  )
}

// Botón mixto (texto + icono)
export interface GovcoMixedButtonProps extends GovcoButtonProps {
  icon: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const GovcoMixedButton: React.FC<GovcoMixedButtonProps> = ({
  icon,
  iconPosition = 'right',
  variant = 'fill',
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <GovcoButton
      variant={variant}
      size={size}
      icon={icon}
      iconPosition={iconPosition}
      className={className}
      {...props}
    >
      {children}
    </GovcoButton>
  )
}

// Botón textual (sin fondo)
export const GovcoTextButton: React.FC<Omit<GovcoButtonProps, 'variant'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <GovcoButton
      variant="text"
      className={cn('font-govco-body-medium text-govco-marine hover:text-govco-blue-dark', className)}
      {...props}
    >
      {children}
    </GovcoButton>
  )
}

