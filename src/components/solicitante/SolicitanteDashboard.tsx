'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Delegacion } from '@/types'
import { GovcoButton, GovcoMainLayout } from '@/components/ui'
import { GovcoH1, GovcoText2 } from '@/components/ui/GovcoTypography'
import SolicitudesTable from './SolicitudesTable'

interface SolicitanteDashboardProps {
  solicitudes: Delegacion[]
}

const SolicitanteDashboard: React.FC<SolicitanteDashboardProps> = ({
  solicitudes
}) => {
  const [selectedSolicitud, setSelectedSolicitud] = useState<Delegacion | null>(null)
  const router = useRouter()

  // Filtrar solicitudes que no estén "Finalizadas" (COMPLETADA)
  const solicitudesActivas = solicitudes.filter(
    solicitud => solicitud.estado !== 'COMPLETADA'
  )

  // Manejar acciones de la tabla
  const handleSeguimiento = (solicitud: Delegacion) => {
    console.log('Ver seguimiento de:', solicitud.id)
    // Navegar al detalle/seguimiento de la solicitud
    router.push(`/solicitante/seguimiento/${solicitud.id}`)
  }

  const handleEditar = (solicitud: Delegacion) => {
    console.log('Editar solicitud:', solicitud.id)
    // Navegar al formulario de edición
    router.push(`/solicitante/editar/${solicitud.id}`)
  }

  const handleSubsanar = (solicitud: Delegacion) => {
    console.log('Subsanar solicitud:', solicitud.id)
    // Navegar al formulario de subsanación
    router.push(`/solicitante/subsanar/${solicitud.id}`)
  }

  const handleNuevaSolicitud = () => {
    // Navegar al formulario FT-H-50
    router.push('/solicitante/nueva-solicitud')
  }

  return (
    <GovcoMainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <GovcoH1 className="text-govco-marine mb-2">
              Solicitudes de Delegación ({solicitudesActivas.length})
            </GovcoH1>
            <GovcoText2 className="text-govco-dim-gray">
              Gestiona y sigue el estado de las solicitudes de delegación
            </GovcoText2>
          </div>
          
          {/* Botón Nueva Solicitud */}
          <GovcoButton
            variant="fill"
            size="md"
            onClick={handleNuevaSolicitud}
            className="bg-orange-500 hover:bg-orange-600 border-orange-500 text-white"
          >
            <span className="mr-2">✈️</span>
            Nueva Solicitud
          </GovcoButton>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">📋</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-govco-body-medium text-govco-dim-gray">Total Solicitudes</p>
                <p className="text-2xl font-govco-heading-bold text-govco-marine">
                  {solicitudesActivas.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✅</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-govco-body-medium text-govco-dim-gray">Aprobadas</p>
                <p className="text-2xl font-govco-heading-bold text-govco-marine">
                  {solicitudesActivas.filter(s => s.estado === 'APROBADA').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-sm">⏳</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-govco-body-medium text-govco-dim-gray">En Proceso</p>
                <p className="text-2xl font-govco-heading-bold text-govco-marine">
                  {solicitudesActivas.filter(s => 
                    ['PENDIENTE_APROBACION', 'EN_PROGRESO', 'SOLICITUD_RECIBIDA', 'PENDIENTE_FIRMA_SEC_GENERAL'].includes(s.estado)
                  ).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm">⚠️</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-govco-body-medium text-govco-dim-gray">Rechazadas</p>
                <p className="text-2xl font-govco-heading-bold text-govco-marine">
                  {solicitudesActivas.filter(s => s.estado === 'RECHAZADA').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de solicitudes */}
        <SolicitudesTable
          solicitudes={solicitudesActivas}
          onSeguimiento={handleSeguimiento}
          onEditar={handleEditar}
          onSubsanar={handleSubsanar}
        />
      </div>
    </GovcoMainLayout>
  )
}

export default SolicitanteDashboard
