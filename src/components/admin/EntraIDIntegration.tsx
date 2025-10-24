'use client'

import { useState } from 'react'

interface EntraIDUser {
  id: string
  displayName: string
  mail: string
  jobTitle?: string
  department?: string
  userPrincipalName: string
  accountEnabled: boolean
}

interface EntraIDIntegrationProps {
  onUserFound: (user: EntraIDUser) => void
}

export default function EntraIDIntegration({ onUserFound }: EntraIDIntegrationProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [foundUser, setFoundUser] = useState<EntraIDUser | null>(null)

  const searchUser = async () => {
    if (!email.trim()) {
      setError('Por favor ingrese un correo electrónico')
      return
    }

    setLoading(true)
    setError('')
    setFoundUser(null)

    try {
      // Simular búsqueda en Microsoft Entra ID
      // En una implementación real, harías una llamada a la API de Microsoft Graph
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Datos simulados para demostración
      const mockUser: EntraIDUser = {
        id: 'entra-id-123',
        displayName: 'Usuario Entra ID Demo',
        mail: email,
        jobTitle: 'Analista de Sistemas',
        department: 'Tecnología',
        userPrincipalName: email,
        accountEnabled: true
      }

      setFoundUser(mockUser)
      onUserFound(mockUser)
    } catch (err) {
      setError('Error al buscar el usuario en Microsoft Entra ID')
      console.error('Error searching user:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchUser()
    }
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-gray-900">
            Integración Microsoft Entra ID
          </h3>
          <p className="text-sm text-gray-500">
            Buscar y validar usuarios en el directorio institucional
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="entra-email" className="block text-sm font-medium text-gray-700">
            Correo electrónico institucional
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="email"
              id="entra-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="usuario@institucion.gov.co"
              className="flex-1 min-w-0 block w-full px-3 py-2 border border-gray-300 rounded-none rounded-l-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              onClick={searchUser}
              disabled={loading}
              className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600"></div>
              ) : (
                <>
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Buscar
                </>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        {foundUser && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Usuario encontrado en Microsoft Entra ID
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <span className="font-medium">Nombre:</span> {foundUser.displayName}
                    </div>
                    <div>
                      <span className="font-medium">Email:</span> {foundUser.mail}
                    </div>
                    <div>
                      <span className="font-medium">Cargo:</span> {foundUser.jobTitle || 'No especificado'}
                    </div>
                    <div>
                      <span className="font-medium">Departamento:</span> {foundUser.department || 'No especificado'}
                    </div>
                    <div>
                      <span className="font-medium">Estado:</span> 
                      <span className={`ml-1 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        foundUser.accountEnabled 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {foundUser.accountEnabled ? 'Activo' : 'Inactivo'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    onClick={() => {
                      // Aquí se sincronizaría el usuario con el sistema local
                      console.log('Sincronizar usuario:', foundUser)
                    }}
                    className="text-sm font-medium text-green-800 hover:text-green-900"
                  >
                    Sincronizar con el sistema →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Información sobre la integración
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  Esta funcionalidad permite validar la existencia de usuarios en el directorio 
                  institucional de Microsoft Entra ID antes de crear o editar usuarios en el sistema.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
