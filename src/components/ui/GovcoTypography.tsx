'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface GovcoTypographyProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

// Títulos
export const GovcoH1: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h1' 
}) => (
  <Component className={cn('text-govco-h1 font-govco-title text-govco-black', className)}>
    {children}
  </Component>
)

export const GovcoH2: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h2' 
}) => (
  <Component className={cn('text-govco-h2 font-govco-title text-govco-black', className)}>
    {children}
  </Component>
)

export const GovcoH3: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h3' 
}) => (
  <Component className={cn('text-govco-h3 font-govco-title text-govco-black', className)}>
    {children}
  </Component>
)

export const GovcoH4: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h4' 
}) => (
  <Component className={cn('text-govco-h4 font-govco-title text-govco-black', className)}>
    {children}
  </Component>
)

export const GovcoH5: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h5' 
}) => (
  <Component className={cn('text-govco-h5 font-govco-title text-govco-black', className)}>
    {children}
  </Component>
)

export const GovcoH6: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h6' 
}) => (
  <Component className={cn('text-govco-h6 font-govco-title text-govco-black', className)}>
    {children}
  </Component>
)

// Textos
export const GovcoText1: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'p' 
}) => (
  <Component className={cn('text-govco-text1 font-govco-subtitle text-govco-black', className)}>
    {children}
  </Component>
)

export const GovcoText2: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'p' 
}) => (
  <Component className={cn('text-govco-text2 font-govco-body text-govco-black', className)}>
    {children}
  </Component>
)

export const GovcoText3: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'p' 
}) => (
  <Component className={cn('text-govco-text3 font-govco-body text-govco-black', className)}>
    {children}
  </Component>
)

// Enlaces
export interface GovcoLinkProps extends GovcoTypographyProps {
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
}

export const GovcoLink: React.FC<GovcoLinkProps> = ({ 
  children, 
  className, 
  href,
  target,
  rel,
  onClick,
  as: Component = href ? 'a' : 'span'
}) => (
  <Component 
    className={cn(
      'text-govco-link font-govco-body-medium text-govco-marine',
      'hover:text-govco-blue-dark focus:text-govco-blue-dark',
      'focus:outline-none focus:ring-2 focus:ring-govco-marine focus:ring-offset-2',
      'transition-colors duration-200 ease-in-out',
      'cursor-pointer',
      className
    )}
    href={href}
    target={target}
    rel={rel}
    onClick={onClick}
  >
    {children}
  </Component>
)

// Texto en negrita
export const GovcoBold: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'strong' 
}) => (
  <Component className={cn('font-govco-body-bold', className)}>
    {children}
  </Component>
)

// Texto en cursiva
export const GovcoItalic: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'em' 
}) => (
  <Component className={cn('font-govco-subtitle italic', className)}>
    {children}
  </Component>
)

// Texto pequeño
export const GovcoSmall: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'small' 
}) => (
  <Component className={cn('text-govco-text3 font-govco-body text-govco-dim-gray', className)}>
    {children}
  </Component>
)

// Texto de código
export const GovcoCode: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'code' 
}) => (
  <Component className={cn(
    'bg-govco-concrete text-govco-black px-2 py-1 rounded',
    'font-mono text-sm',
    className
  )}>
    {children}
  </Component>
)

// Texto de preformato
export const GovcoPre: React.FC<GovcoTypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'pre' 
}) => (
  <Component className={cn(
    'bg-govco-concrete text-govco-black p-4 rounded-lg',
    'font-mono text-sm overflow-x-auto',
    className
  )}>
    {children}
  </Component>
)

