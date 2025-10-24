'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { UserRole } from '@/types'

interface Stats {
  totalDelegaciones: number
  delegacionesPendientes: number
  delegacionesAprobadas: number
  delegacionesRechazadas: number
}

export default function DashboardStats() {
  const { data: session } = useSession()
  const [stats, setStats] = useState<Stats>({
    totalDelegaciones: 0,
    delegacionesPendientes: 0,
    delegacionesAprobadas: 0,
    delegacionesRechazadas: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carga de estadísticas
    // En una implementación real, harías una llamada a la API
    setTimeout(() => {
      setStats({
        totalDelegaciones: 12,
        delegacionesPendientes: 3,
        delegacionesAprobadas: 8,
        delegacionesRechazadas: 1
      })
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white overflow-hidden shadow rounded-lg animate-pulse">
            <div className="p-5">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-8 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const statsCards = [
    {
      name: 'Total Delegaciones',
      value: stats.totalDelegaciones,
      color: 'text-gray-900',
      bgColor: 'bg-gray-50'
    },
    {
      name: 'Pendientes',
      value: stats.delegacionesPendientes,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'Aprobadas',
      value: stats.delegacionesAprobadas,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Rechazadas',
      value: stats.delegacionesRechazadas,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ]

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {statsCards.map((stat) => (
        <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className={`w-8 h-8 ${stat.bgColor} rounded-md flex items-center justify-center`}>
                  <div className={`w-4 h-4 ${stat.color} rounded-full`}></div>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </dt>
                  <dd className={`text-lg font-medium ${stat.color}`}>
                    {stat.value}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

