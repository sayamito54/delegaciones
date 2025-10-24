'use client'

import { useState } from 'react'
import { UserFilters as UserFiltersType, UserRole } from '@/types'

interface UserFiltersProps {
  filters: UserFiltersType
  onFilterChange: (filters: UserFiltersType) => void
}

  const roleOptions: { value: UserRole; label: string }[] = [
    { value: 'ADMINISTRADOR', label: 'Administrador' },
    { value: 'DIRECTOR', label: 'Director' },
    { value: 'SOLICITANTE', label: 'Solicitante' },
    { value: 'SECRETARIA', label: 'Secretaría' },
    { value: 'DELEGATARIO', label: 'Delegatario' }
  ]

const departmentOptions = [
  'Administración General',
  'Dirección General',
  'Área de Solicitudes',
  'Secretaría General',
  'Delegaciones'
]

export default function UserFilters({ filters, onFilterChange }: UserFiltersProps) {
  const [localFilters, setLocalFilters] = useState<UserFiltersType>(filters)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleFilterChange = (key: keyof UserFiltersType, value: any) => {
    const newFilters = { ...localFilters, [key]: value }
    setLocalFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters: UserFiltersType = {}
    setLocalFilters(clearedFilters)
    onFilterChange(clearedFilters)
  }

  const hasActiveFilters = Object.values(filters).some(value => 
    value !== undefined && value !== '' && value !== null
  )

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">
          Filtros de Búsqueda
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-sm text-indigo-600 hover:text-indigo-900"
          >
            {showAdvanced ? 'Filtros básicos' : 'Filtros avanzados'}
          </button>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-red-600 hover:text-red-900"
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Búsqueda general */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700">
            Búsqueda general
          </label>
          <input
            type="text"
            id="search"
            value={localFilters.search || ''}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            placeholder="Buscar por nombre, email..."
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Filtro por email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            value={localFilters.email || ''}
            onChange={(e) => handleFilterChange('email', e.target.value)}
            placeholder="usuario@ejemplo.com"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Filtro por rol */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Rol
          </label>
          <select
            id="role"
            value={localFilters.role || ''}
            onChange={(e) => handleFilterChange('role', e.target.value || undefined)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Todos los roles</option>
            {roleOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por estado */}
        <div>
          <label htmlFor="isActive" className="block text-sm font-medium text-gray-700">
            Estado
          </label>
          <select
            id="isActive"
            value={localFilters.isActive === undefined ? '' : localFilters.isActive.toString()}
            onChange={(e) => {
              const value = e.target.value
              handleFilterChange('isActive', value === '' ? undefined : value === 'true')
            }}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Todos los estados</option>
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>
        </div>
      </div>

      {/* Filtros avanzados */}
      {showAdvanced && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Filtro por dependencia */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                Dependencia
              </label>
              <select
                id="department"
                value={localFilters.department || ''}
                onChange={(e) => handleFilterChange('department', e.target.value || undefined)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Todas las dependencias</option>
                {departmentOptions.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Integración con Microsoft Entra ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Integración Microsoft Entra ID
              </label>
              <div className="mt-1 flex items-center space-x-4">
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Buscar en Entra ID
                </button>
                <span className="text-xs text-gray-500">
                  Validar usuario institucional
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resumen de filtros activos */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700">Filtros activos:</span>
            {filters.search && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Búsqueda: {filters.search}
              </span>
            )}
            {filters.email && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Email: {filters.email}
              </span>
            )}
            {filters.role && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Rol: {roleOptions.find(r => r.value === filters.role)?.label}
              </span>
            )}
            {filters.department && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Dependencia: {filters.department}
              </span>
            )}
            {filters.isActive !== undefined && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Estado: {filters.isActive ? 'Activo' : 'Inactivo'}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
