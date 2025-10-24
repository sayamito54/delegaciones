'use client'

import React, { useState } from 'react'
import { GovcoButton } from '@/components/ui'
import { MagnifyingGlassIcon, XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import { UserRole } from '@/types'

interface Delegado {
  id: string
  name: string
  email: string
  department: string
  role: UserRole
}

interface DelegadoSearchFieldProps {
  value: string
  onChange: (value: string) => void
  onSelectDelegado: (delegado: Delegado) => void
  error?: string
  placeholder?: string
}

const DelegadoSearchField: React.FC<DelegadoSearchFieldProps> = ({
  value,
  onChange,
  onSelectDelegado,
  error,
  placeholder = "Ingrese el correo del delegado propuesto"
}) => {
  const [selectedDelegado, setSelectedDelegado] = useState<Delegado | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [searchMessage, setSearchMessage] = useState('')

  // Datos mock de delegados disponibles
  const mockDelegados: Delegado[] = [
    {
      id: 'user-1',
      name: 'Sandra Yaneth Moreno Cruz',
      email: 'sandmoreno@dnp.gov.co',
      department: 'Dirección General',
      role: 'DIRECTOR'
    },
    {
      id: 'user-2',
      name: 'Carlos Eduardo López',
      email: 'carlos.lopez@dnp.gov.co',
      department: 'Subdirección Técnica',
      role: 'DIRECTOR'
    },
    {
      id: 'user-3',
      name: 'María Fernanda García',
      email: 'maria.garcia@dnp.gov.co',
      department: 'Dirección de Planeación',
      role: 'DIRECTOR'
    }
  ]

  const handleSearch = async () => {
    if (!value.trim()) {
      setSearchMessage('Por favor, ingrese un correo electrónico')
      return
    }

    setIsSearching(true)
    setSearchMessage('')

    try {
      // Simular búsqueda en base de datos
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Demo: Siempre seleccionar Sandra para cualquier búsqueda
      const sandraDelegado = mockDelegados.find(delegado => delegado.email === 'sandmoreno@dnp.gov.co')
      if (sandraDelegado) {
        setSelectedDelegado(sandraDelegado)
        onChange(sandraDelegado.name)
        onSelectDelegado(sandraDelegado)
        setSearchMessage('')
      } else {
        setSearchMessage('El correo no se encuentra en el directorio del DNP')
      }
    } catch (error) {
      setSearchMessage('Error al buscar delegados. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSearching(false)
    }
  }

  const handleClear = () => {
    setSelectedDelegado(null)
    onChange('')
    setSearchMessage('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange(newValue)
    
    // Si el usuario empieza a escribir, limpiar la selección anterior
    if (selectedDelegado) {
      setSelectedDelegado(null)
      setSearchMessage('')
    }
  }

  return (
    <div className="space-y-2">
      <div className="relative">
        <div className="flex space-x-2">
          <input
            type="email"
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={cn(
              'flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-govco-blue-dark focus:border-transparent',
              error ? 'border-red-500' : 'border-gray-300',
              selectedDelegado ? 'bg-gray-100 text-gray-600 cursor-not-allowed' : ''
            )}
            readOnly={!!selectedDelegado}
            disabled={!!selectedDelegado}
          />
          <GovcoButton
            type="button"
            variant="outline"
            onClick={handleSearch}
            disabled={isSearching || !!selectedDelegado}
            className="px-3"
            title="Buscar delegado por correo electrónico"
          >
            {isSearching ? (
              <span className="mr-2">⏳</span>
            ) : (
              <span className="mr-2">🔍</span>
            )}
            {isSearching ? 'Buscando...' : 'Buscar'}
          </GovcoButton>

          {selectedDelegado && (
            <GovcoButton
              type="button"
              variant="outline"
              onClick={handleClear}
              className="px-3 text-red-600 border-red-300 hover:bg-red-50"
              title="Limpiar selección"
            >
              <XMarkIcon className="h-5 w-5" />
            </GovcoButton>
          )}
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      {/* Mensaje de búsqueda */}
      {searchMessage && (
        <div className={cn(
          'p-3 rounded-md text-sm',
          searchMessage.includes('no se encuentra') 
            ? 'bg-red-50 border border-red-200 text-red-600'
            : 'bg-yellow-50 border border-yellow-200 text-yellow-600'
        )}>
          {searchMessage}
        </div>
      )}

      {/* Delegado seleccionado */}
      {selectedDelegado && (
        <div className="bg-green-50 border border-green-200 rounded-md p-3">
          <div className="flex items-start space-x-2">
            <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-green-600 text-sm font-medium">
                Delegado seleccionado:
              </p>
              <p className="text-green-600 text-sm font-semibold">
                {selectedDelegado.name}
              </p>
              <p className="text-green-600 text-sm">
                {selectedDelegado.email} • {selectedDelegado.department}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DelegadoSearchField