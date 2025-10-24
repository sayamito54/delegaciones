'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface GovcoIconProps {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const iconSizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8'
}

export const GovcoIcon: React.FC<GovcoIconProps> = ({
  name,
  size = 'md',
  className
}) => {
  return (
    <span
      className={cn(
        'govco-icons inline-block',
        iconSizes[size],
        className
      )}
      data-icon={name}
      aria-hidden="true"
    />
  )
}

// Iconos comunes del sistema
export const GovcoIcons = {
  // Navegación
  ArrowLeft: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="arrow-left" {...props} />,
  ArrowRight: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="arrow-right" {...props} />,
  ArrowUp: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="arrow-up" {...props} />,
  ArrowDown: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="arrow-down" {...props} />,
  
  // Acciones
  Edit: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="edit" {...props} />,
  Delete: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="delete" {...props} />,
  Save: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="save" {...props} />,
  Cancel: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="cancel" {...props} />,
  
  // Estado
  Success: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="success" {...props} />,
  Error: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="error" {...props} />,
  Warning: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="warning" {...props} />,
  Info: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="info" {...props} />,
  
  // Usuario
  User: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="user" {...props} />,
  Users: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="users" {...props} />,
  Login: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="login" {...props} />,
  Logout: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="logout" {...props} />,
  
  // Sistema
  Settings: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="settings" {...props} />,
  Search: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="search" {...props} />,
  Filter: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="filter" {...props} />,
  Download: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="download" {...props} />,
  Upload: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="upload" {...props} />,
  
  // Documentos
  Document: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="document" {...props} />,
  Folder: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="folder" {...props} />,
  File: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="file" {...props} />,
  
  // Comunicación
  Email: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="email" {...props} />,
  Phone: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="phone" {...props} />,
  Message: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="message" {...props} />,
  
  // Gobierno
  Shield: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="shield" {...props} />,
  Flag: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="flag" {...props} />,
  Building: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="building" {...props} />,
  
  // Utilidades
  Calendar: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="calendar" {...props} />,
  Clock: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="clock" {...props} />,
  Location: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="location" {...props} />,
  Home: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="home" {...props} />,
  Menu: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="menu" {...props} />,
  Close: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="close" {...props} />,
  Check: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="check" {...props} />,
  Plus: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="plus" {...props} />,
  Minus: (props: Omit<GovcoIconProps, 'name'>) => <GovcoIcon name="minus" {...props} />
}

