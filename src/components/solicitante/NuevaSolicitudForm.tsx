'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { GovcoButton, GovcoMainLayout } from '@/components/ui'
import { GovcoH1, GovcoText2 } from '@/components/ui/GovcoTypography'
import { cn } from '@/lib/utils'
import DelegadoSearchField from './DelegadoSearchField'

// Esquema de validación
const solicitudSchema = z.object({
  instancia: z.string().min(1, 'La instancia es obligatoria'),
  delegadoPropuesto: z.string().min(1, 'El delegado propuesto es obligatorio'),
  fechaDesignacion: z.string().min(1, 'La fecha de designación es obligatoria'),
  fechaVencimiento: z.string().optional(),
  urgencia: z.enum(['Normal', 'Alta', 'Baja'], {
    required_error: 'La urgencia es obligatoria'
  }),
  justificacion: z.string().min(10, 'La justificación debe tener al menos 10 caracteres'),
  documentos: z.array(z.instanceof(File)).optional()
})

type SolicitudFormData = z.infer<typeof solicitudSchema>

interface User {
  id: string
  name: string
  email: string
  department: string
}

interface NuevaSolicitudFormProps {
  user: User
}

// Lista de instancias delegables (mock - en producción vendría de la base de datos)
const instanciasDelegables = [
  'Comisión de Regulación de Energía y Gas (CREG)',
  'Consejo Superior de Comercio Exterior',
  'Consejo Directivo del Instituto Geográfico Agustín Codazzi (IGAC)',
  'Comisión Intersectorial para la prevención del reclutamiento, la utilización y la violencia sexual contra niños, niñas y adolescentes por grupos armados al margen de la ley y por grupos delictivos organizados',
  'Consejo Nacional de Política Económica y Social (CONPES)',
  'Consejo Nacional de Planeación (CNP)',
  'Consejo Nacional de Política Social (CNPS)',
  'Consejo Nacional de Política Ambiental (CNPA)',
  'Consejo Nacional de Política de Seguridad y Defensa (CNPSD)',
  'Consejo Nacional de Política de Ciencia, Tecnología e Innovación (CNPCTI)'
]

const NuevaSolicitudForm: React.FC<NuevaSolicitudFormProps> = ({ user }) => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [selectedDelegado, setSelectedDelegado] = useState<any>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<SolicitudFormData>({
    resolver: zodResolver(solicitudSchema),
    defaultValues: {
      urgencia: 'Normal'
    }
  })
  
  // Verificar el valor del campo
  const delegadoValue = watch('delegadoPropuesto')

  // Función para generar consecutivo único
  const generarConsecutivo = () => {
    const timestamp = Date.now()
    const random = Math.random().toString(36).substr(2, 5)
    return `SOL-${timestamp}-${random}`.toUpperCase()
  }

  // Función para manejar la carga de archivos
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/plain',
      'image/jpeg',
      'image/png',
      'image/gif'
    ]

    const validFiles = files.filter(file => allowedTypes.includes(file.type))
    
    if (validFiles.length !== files.length) {
      alert('Algunos archivos no tienen un formato válido. Formatos permitidos: PDF, DOCX, XLSX, TXT, JPG, PNG, GIF')
    }

    setUploadedFiles(prev => [...prev, ...validFiles])
    setValue('documentos', [...uploadedFiles, ...validFiles])
  }

  // Función para eliminar archivo
  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index)
    setUploadedFiles(newFiles)
    setValue('documentos', newFiles)
  }

  // Función para formatear tamaño de archivo
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Función para enviar el formulario
  const onSubmit = async (data: SolicitudFormData) => {
    setIsSubmitting(true)
    
    try {
      // Crear objeto de solicitud
      const solicitudData = {
        instancia: data.instancia,
        delegadoPropuesto: data.delegadoPropuesto,
        delegadoId: selectedDelegado?.id,
        delegadoEmail: selectedDelegado?.email,
        fechaDesignacion: data.fechaDesignacion,
        fechaVencimiento: data.fechaVencimiento,
        urgencia: data.urgencia,
        justificacion: data.justificacion,
        documentos: uploadedFiles.map(file => ({
          nombre: file.name,
          tipo: file.type,
          tamano: file.size
        }))
      }

      // Llamar a la API para crear la solicitud
      const response = await fetch('/api/solicitudes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(solicitudData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Error al crear la solicitud')
      }

      // Mostrar mensaje de éxito y redirigir
      alert('Solicitud creada exitosamente con consecutivo: ' + result.data.id)
      router.push('/solicitante')
      
    } catch (error) {
      console.error('Error al crear solicitud:', error)
      alert('Error al crear la solicitud. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <GovcoMainLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <GovcoH1 className="text-govco-marine mb-2">
            Nueva Solicitud de Delegación
          </GovcoH1>
          <GovcoText2 className="text-govco-dim-gray">
            Formulario FT-H-50 para crear una nueva solicitud de delegación institucional
          </GovcoText2>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

          {/* Información de la Delegación */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-govco-heading-bold text-govco-marine mb-4">
              Información de la Delegación
            </h3>
            <div className="space-y-6">
              {/* Instancia */}
              <div>
                <label className="block text-sm font-govco-body-medium text-govco-marine mb-2">
                  Instancia (solo delegables) <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('instancia')}
                  className={cn(
                    'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-govco-blue-dark focus:border-transparent',
                    errors.instancia ? 'border-red-500' : 'border-gray-300'
                  )}
                >
                  <option value="">Seleccione una instancia</option>
                  {instanciasDelegables.map((instancia, index) => (
                    <option key={index} value={instancia}>
                      {instancia}
                    </option>
                  ))}
                </select>
                {errors.instancia && (
                  <p className="text-red-500 text-sm mt-1">{errors.instancia.message}</p>
                )}
              </div>

                      {/* Correo del Delegado Propuesto */}
                      <div>
                        <label className="block text-sm font-govco-body-medium text-govco-marine mb-2">
                          Correo del Delegado Propuesto <span className="text-red-500">*</span>
                        </label>
                        <DelegadoSearchField
                          value={watch('delegadoPropuesto') || ''}
                          onChange={(value) => {
                            setValue('delegadoPropuesto', value)
                          }}
                          onSelectDelegado={(delegado) => {
                            setSelectedDelegado(delegado)
                          }}
                          error={errors.delegadoPropuesto?.message}
                          placeholder="Ingrese el correo del delegado propuesto"
                        />
                      </div>

              {/* Fechas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-govco-body-medium text-govco-marine mb-2">
                    Fecha de Designación <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register('fechaDesignacion')}
                    className={cn(
                      'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-govco-blue-dark focus:border-transparent',
                      errors.fechaDesignacion ? 'border-red-500' : 'border-gray-300'
                    )}
                  />
                  {errors.fechaDesignacion && (
                    <p className="text-red-500 text-sm mt-1">{errors.fechaDesignacion.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-govco-body-medium text-govco-marine mb-2">
                    Fecha de Vencimiento (Opcional)
                  </label>
                  <input
                    type="date"
                    {...register('fechaVencimiento')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-govco-blue-dark focus:border-transparent"
                  />
                </div>
              </div>

              {/* Urgencia */}
              <div>
                <label className="block text-sm font-govco-body-medium text-govco-marine mb-2">
                  Urgencia <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('urgencia')}
                  className={cn(
                    'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-govco-blue-dark focus:border-transparent',
                    errors.urgencia ? 'border-red-500' : 'border-gray-300'
                  )}
                >
                  <option value="Normal">Normal</option>
                  <option value="Alta">Alta</option>
                  <option value="Baja">Baja</option>
                </select>
                {errors.urgencia && (
                  <p className="text-red-500 text-sm mt-1">{errors.urgencia.message}</p>
                )}
              </div>

              {/* Justificación */}
              <div>
                <label className="block text-sm font-govco-body-medium text-govco-marine mb-2">
                  Justificación <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register('justificacion')}
                  rows={4}
                  className={cn(
                    'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-govco-blue-dark focus:border-transparent',
                    errors.justificacion ? 'border-red-500' : 'border-gray-300'
                  )}
                  placeholder="Describa la justificación para la delegación de funciones..."
                />
                {errors.justificacion && (
                  <p className="text-red-500 text-sm mt-1">{errors.justificacion.message}</p>
                )}
                <p className="text-sm text-gray-500 mt-1">
                  Mínimo 10 caracteres. Explique claramente el motivo y alcance de la delegación.
                </p>
              </div>
            </div>
          </div>

          {/* Adjuntar Documentos */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-govco-heading-bold text-govco-marine mb-4">
              Adjuntar Documentos
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-govco-body-medium text-govco-marine mb-2">
                  Seleccionar Archivos
                </label>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.docx,.xlsx,.txt,.jpg,.jpeg,.png,.gif"
                  onChange={handleFileUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-govco-blue-dark focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Formatos permitidos: PDF, DOCX, XLSX, TXT, JPG, PNG, GIF (Máximo 10MB por archivo)
                </p>
              </div>

              {/* Lista de archivos cargados */}
              {uploadedFiles.length > 0 && (
                <div>
                  <h4 className="text-sm font-govco-body-medium text-govco-marine mb-2">
                    Archivos Seleccionados ({uploadedFiles.length})
                  </h4>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600">
                            {file.name} ({formatFileSize(file.size)})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Eliminar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex justify-end space-x-4">
            <GovcoButton
              type="button"
              variant="outline"
              onClick={() => router.push('/solicitante')}
              disabled={isSubmitting}
            >
              Cancelar
            </GovcoButton>
            <GovcoButton
              type="submit"
              variant="fill"
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 border-orange-500 text-white"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
            </GovcoButton>
          </div>
        </form>
      </div>
    </GovcoMainLayout>
  )
}

export default NuevaSolicitudForm
