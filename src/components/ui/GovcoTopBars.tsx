'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { GovcoText2, GovcoText3 } from './GovcoTypography'

export interface GovcoTopBarProps {
  className?: string
}

export const GovcoTopBar: React.FC<GovcoTopBarProps> = ({ className }) => {
  return (
    <div className={cn(
      'bg-govco-blue-dark text-govco-white',
      'px-6 py-2 text-sm font-govco-body',
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="text-govco-white font-govco-body-bold">GOV.CO</span>
              <div className="w-px h-4 bg-govco-white/30"></div>
              <span className="text-govco-white font-govco-body">
                BDC Biblioteca Digital de Componentes de integración
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-govco-white/80 font-govco-body">
            Portal Único del Estado Colombiano
          </span>
        </div>
      </div>
    </div>
  )
}

export interface GovcoSecondaryBarProps {
  className?: string
}

export const GovcoSecondaryBar: React.FC<GovcoSecondaryBarProps> = ({ className }) => {
  return (
    <div className={cn(
      'bg-govco-marine text-govco-white',
      'px-6 py-3',
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-govco-white font-govco-body-bold">BDC_GOV.CO V.4</span>
            <svg className="w-4 h-4 text-govco-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por componente"
              className="w-80 px-4 py-2 pl-10 pr-4 text-govco-black bg-govco-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-govco-blue-light"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-govco-dim-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

