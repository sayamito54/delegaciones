'use client'

import { useState, useEffect } from 'react'
import { Delegacion } from '@/types'
import Link from 'next/link'

export default function RecentDelegaciones() {
  const [delegaciones, setDelegaciones] = useState<Delegacion[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carga de delegaciones recientes
    setTimeout(() => {
      setDelegaciones([
        {
          id: '1',
          titulo: 'Delegación a Bogotá',
          descripcion: 'Reunión con entidades del sector',
          fechaInicio: new Date('2024-01-15'),
          fechaFin: new Date('2024-01-17'),
          estado: 'aprobada',
          delegatarioId: 'user1',
          createdAt: new Date('2024-01-10'),
          updatedAt: new Date('2024-01-10'),
          documentos: []
        },
        {
          id: '2',
          titulo: 'Delegación a Medellín',
          descripcion: 'Capacitación técnica',
          fechaInicio: new Date('2024-01-20'),
          fechaFin: new Date('2024-01-22'),
          estado: 'pendiente_aprobacion',
          delegatarioId: 'user2',
          createdAt: new Date('2024-01-12'),
          updatedAt: new Date('2024-01-12'),
          documentos: []
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'aprobada':
        return 'bg-green-100 text-green-800'
      case 'pendiente_aprobacion':
        return 'bg-yellow-100 text-yellow-800'
      case 'rechazada':
        return 'bg-red-100 text-red-800'
      case 'en_progreso':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getEstadoText = (estado: string) => {
    switch (estado) {
      case 'aprobada':
        return 'Aprobada'
      case 'pendiente_aprobacion':
        return 'Pendiente'
      case 'rechazada':
        return 'Rechazada'
      case 'en_progreso':
        return 'En Progreso'
      default:
        return estado
    }
  }

  if (loading) {
    return (
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Delegaciones Recientes
          </h3>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Delegaciones Recientes
          </h3>
          <Link
            href="/delegaciones"
            className="text-sm font-medium text-primary-600 hover:text-primary-500"
          >
            Ver todas
          </Link>
        </div>
        
        <div className="space-y-4">
          {delegaciones.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              No hay delegaciones recientes
            </p>
          ) : (
            delegaciones.map((delegacion) => (
              <div key={delegacion.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      {delegacion.titulo}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {delegacion.descripcion}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(delegacion.fechaInicio).toLocaleDateString('es-ES')} - {new Date(delegacion.fechaFin).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getEstadoColor(delegacion.estado)}`}>
                    {getEstadoText(delegacion.estado)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

