'use client'

import React, { useState, useMemo } from 'react'
import { Delegacion, SolicitudDelegacionFilters } from '@/types'
import { GovcoButton } from '@/components/ui'
import { cn } from '@/lib/utils'

interface SolicitudesTableProps {
  solicitudes: Delegacion[]
  onSeguimiento: (solicitud: Delegacion) => void
  onEditar: (solicitud: Delegacion) => void
  onSubsanar: (solicitud: Delegacion) => void
}

const SolicitudesTable: React.FC<SolicitudesTableProps> = ({
  solicitudes,
  onSeguimiento,
  onEditar,
  onSubsanar
}) => {
  const [filters, setFilters] = useState<SolicitudDelegacionFilters>({})
  const [sortField, setSortField] = useState<keyof Delegacion>('createdAt')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')

  // Función para obtener el color del estado
  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'RECHAZADA':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'SOLICITUD_RECIBIDA':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'PUBLICADO_Y_COMUNICADO':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'PENDIENTE_FIRMA_SEC_GENERAL':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'OBSERVADA':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'BORRADOR':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  // Función para obtener el icono del estado
  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'RECHAZADA':
        return '⚠️'
      case 'SOLICITUD_RECIBIDA':
        return '✈️'
      case 'PUBLICADO_Y_COMUNICADO':
        return '👤'
      case 'PENDIENTE_FIRMA_SEC_GENERAL':
        return '📄'
      case 'OBSERVADA':
        return '👁️'
      default:
        return '📋'
    }
  }

  // Función para obtener el texto del estado
  const getEstadoText = (estado: string) => {
    switch (estado) {
      case 'RECHAZADA':
        return 'Rechazado'
      case 'SOLICITUD_RECIBIDA':
        return 'Solicitud Recibida'
      case 'PUBLICADO_Y_COMUNICADO':
        return 'Publicado y Comunicado'
      case 'PENDIENTE_FIRMA_SEC_GENERAL':
        return 'Pendiente Firma Sec. General'
      case 'OBSERVADA':
        return 'Observada'
      case 'BORRADOR':
        return 'Borrador'
      default:
        return estado
    }
  }

  // Función para obtener las acciones disponibles según el estado
  const getAccionesDisponibles = (solicitud: Delegacion) => {
    const acciones = []
    
    // Siempre disponible: Seguimiento
    acciones.push({
      id: 'seguimiento',
      label: 'Seguimiento',
      variant: 'primary' as const,
      icon: '👁️',
      action: () => onSeguimiento(solicitud)
    })

    // Editar solo si está en borrador
    if (solicitud.estado === 'BORRADOR') {
      acciones.push({
        id: 'editar',
        label: 'Editar',
        variant: 'secondary' as const,
        icon: '✏️',
        action: () => onEditar(solicitud)
      })
    }

    // Subsanar si fue observada
    if (solicitud.estado === 'OBSERVADA') {
      acciones.push({
        id: 'subsanar',
        label: 'Subsanar',
        variant: 'secondary' as const,
        icon: '🔧',
        action: () => onSubsanar(solicitud)
      })
    }

    return acciones
  }

  // Filtrar y ordenar solicitudes
  const filteredAndSortedSolicitudes = useMemo(() => {
    let filtered = solicitudes.filter(solicitud => {
      // Filtrar por búsqueda genérica
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        const searchFields = [
          solicitud.id,
          solicitud.instancia,
          solicitud.solicitadoPor,
          solicitud.urgencia,
          solicitud.estado,
          solicitud.actoAdmin
        ]
        
        if (!searchFields.some(field => 
          field && field.toString().toLowerCase().includes(searchTerm)
        )) {
          return false
        }
      }

      // Filtrar por instancia
      if (filters.instancia && solicitud.instancia !== filters.instancia) {
        return false
      }

      // Filtrar por urgencia
      if (filters.urgencia && solicitud.urgencia !== filters.urgencia) {
        return false
      }

      // Filtrar por estado
      if (filters.estado && solicitud.estado !== filters.estado) {
        return false
      }

      return true
    })

    // Ordenar
    filtered.sort((a, b) => {
      const aValue = a[sortField]
      const bValue = b[sortField]
      
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

    return filtered
  }, [solicitudes, filters, sortField, sortDirection])

  // Función para manejar el cambio de ordenamiento
  const handleSort = (field: keyof Delegacion) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('desc')
    }
  }

  // Función para formatear fecha
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-CO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(new Date(date))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header con título y contador */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-govco-heading-bold text-govco-marine">
              Solicitudes de Delegación ({filteredAndSortedSolicitudes.length})
            </h2>
            <p className="text-sm text-govco-dim-gray mt-1">
              Gestiona y sigue el estado de las solicitudes de delegación
            </p>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Búsqueda genérica */}
          <div>
            <label className="block text-sm font-govco-body-medium text-govco-marine mb-2">
              Búsqueda
            </label>
            <input
              type="text"
              placeholder="Buscar en todas las columnas..."
              value={filters.search || ''}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-govco-blue-dark focus:border-transparent"
            />
          </div>

          {/* Filtro por instancia */}
          <div>
            <label className="block text-sm font-govco-body-medium text-govco-marine mb-2">
              Instancia
            </label>
            <select
              value={filters.instancia || ''}
              onChange={(e) => setFilters(prev => ({ ...prev, instancia: e.target.value || undefined }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-govco-blue-dark focus:border-transparent"
            >
              <option value="">Todas las instancias</option>
              {Array.from(new Set(solicitudes.map(s => s.instancia))).map(instancia => (
                <option key={instancia} value={instancia}>{instancia}</option>
              ))}
            </select>
          </div>

          {/* Filtro por urgencia */}
          <div>
            <label className="block text-sm font-govco-body-medium text-govco-marine mb-2">
              Urgencia
            </label>
            <select
              value={filters.urgencia || ''}
              onChange={(e) => setFilters(prev => ({ ...prev, urgencia: e.target.value as any || undefined }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-govco-blue-dark focus:border-transparent"
            >
              <option value="">Todas las urgencias</option>
              <option value="Normal">Normal</option>
              <option value="Alta">Alta</option>
              <option value="Baja">Baja</option>
            </select>
          </div>

          {/* Filtro por estado */}
          <div>
            <label className="block text-sm font-govco-body-medium text-govco-marine mb-2">
              Estado
            </label>
            <select
              value={filters.estado || ''}
              onChange={(e) => setFilters(prev => ({ ...prev, estado: e.target.value as any || undefined }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-govco-blue-dark focus:border-transparent"
            >
              <option value="">Todos los estados</option>
              {Array.from(new Set(solicitudes.map(s => s.estado))).map(estado => (
                <option key={estado} value={estado}>{getEstadoText(estado)}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th 
                className="px-6 py-3 text-left text-xs font-govco-body-bold text-govco-marine uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('id')}
              >
                ID {sortField === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-govco-body-bold text-govco-marine uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('instancia')}
              >
                INSTANCIA {sortField === 'instancia' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-govco-body-bold text-govco-marine uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('solicitadoPor')}
              >
                SOLICITADO POR {sortField === 'solicitadoPor' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-govco-body-bold text-govco-marine uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('createdAt')}
              >
                FECHA SOL. {sortField === 'createdAt' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-govco-body-bold text-govco-marine uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('urgencia')}
              >
                URGENCIA {sortField === 'urgencia' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-govco-body-bold text-govco-marine uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('actoAdmin')}
              >
                ACTO ADM. {sortField === 'actoAdmin' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-govco-body-bold text-govco-marine uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('estado')}
              >
                ESTADO ACTUAL {sortField === 'estado' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-govco-body-bold text-govco-marine uppercase tracking-wider">
                ACCIONES
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAndSortedSolicitudes.map((solicitud) => {
              const acciones = getAccionesDisponibles(solicitud)
              
              return (
                <tr key={solicitud.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-govco-body-medium text-govco-marine">
                    {solicitud.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-govco-marine">
                    <div className="max-w-xs truncate" title={solicitud.instancia}>
                      {solicitud.instancia}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-govco-marine">
                    {solicitud.solicitadoPor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-govco-marine">
                    {formatDate(solicitud.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-govco-marine">
                    <span className={cn(
                      'px-2 py-1 rounded-full text-xs font-govco-body-medium',
                      solicitud.urgencia === 'Alta' ? 'text-red-600 bg-red-100' : 'text-govco-marine'
                    )}>
                      {solicitud.urgencia}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-govco-marine">
                    {solicitud.actoAdmin || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={cn(
                      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-govco-body-medium border',
                      getEstadoColor(solicitud.estado)
                    )}>
                      <span className="mr-1">{getEstadoIcon(solicitud.estado)}</span>
                      {getEstadoText(solicitud.estado)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-govco-body-medium">
                    <div className="flex space-x-2">
                      {acciones.map((accion) => (
                        <GovcoButton
                          key={accion.id}
                          variant={accion.variant === 'primary' ? 'fill' : 'outline'}
                          size="sm"
                          onClick={accion.action}
                          className="text-xs"
                        >
                          <span className="mr-1">{accion.icon}</span>
                          {accion.label}
                        </GovcoButton>
                      ))}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mensaje cuando no hay resultados */}
      {filteredAndSortedSolicitudes.length === 0 && (
        <div className="px-6 py-12 text-center">
          <div className="text-gray-500">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-govco-body-medium text-gray-900">No se encontraron solicitudes</h3>
            <p className="mt-1 text-sm text-gray-500">
              {filters.search || filters.instancia || filters.urgencia || filters.estado
                ? 'Intenta ajustar los filtros de búsqueda.'
                : 'No tienes solicitudes de delegación registradas.'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SolicitudesTable
