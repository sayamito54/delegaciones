import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Delegacion } from '@/types'
import SolicitanteDashboard from '@/components/solicitante/SolicitanteDashboard'

// Datos mock para demostración - en producción vendrían de la base de datos
const mockSolicitudes: Delegacion[] = [
  {
    id: 'req-004',
    titulo: 'Delegación CREG',
    descripcion: 'Delegación de funciones para Comisión de Regulación de Energía y Gas',
    fechaInicio: new Date('2025-03-29'),
    fechaFin: new Date('2025-06-29'),
    estado: 'RECHAZADA',
    delegatarioId: 'user-1',
    aprobadoPor: 'admin-1',
    fechaAprobacion: new Date('2025-03-30'),
    observaciones: 'Falta documentación requerida',
    documentos: [],
    createdAt: new Date('2025-03-29'),
    updatedAt: new Date('2025-03-30'),
    instancia: 'Comisión de Regulación de Energía y Gas (CREG)',
    solicitadoPor: 'Área Técnica D',
    urgencia: 'Normal',
    actoAdmin: undefined,
    solicitanteId: 'demo-2'
  },
  {
    id: 'req-003',
    titulo: 'Delegación Intersectorial',
    descripcion: 'Delegación para Comisión Intersectorial para la prevención del reclutamiento',
    fechaInicio: new Date('2025-03-27'),
    fechaFin: new Date('2025-06-27'),
    estado: 'SOLICITUD_RECIBIDA',
    delegatarioId: 'user-2',
    aprobadoPor: undefined,
    fechaAprobacion: undefined,
    observaciones: undefined,
    documentos: [],
    createdAt: new Date('2025-03-27'),
    updatedAt: new Date('2025-03-27'),
    instancia: 'Comisión Intersectorial para la prevención del reclutamiento, la utilización y la violencia sexual contra niños, niñas y adolescentes por grupos armados al margen de la ley y por grupos delictivos organizados',
    solicitadoPor: 'Área Técnica C',
    urgencia: 'Alta',
    actoAdmin: undefined,
    solicitanteId: 'demo-2'
  },
  {
    id: 'req-002',
    titulo: 'Delegación IGAC',
    descripcion: 'Delegación para Consejo Directivo del Instituto Geográfico Agustín Codazzi',
    fechaInicio: new Date('2025-03-19'),
    fechaFin: new Date('2025-06-19'),
    estado: 'PUBLICADO_Y_COMUNICADO',
    delegatarioId: 'user-3',
    aprobadoPor: 'admin-2',
    fechaAprobacion: new Date('2025-03-20'),
    observaciones: undefined,
    documentos: [],
    createdAt: new Date('2025-03-19'),
    updatedAt: new Date('2025-03-20'),
    instancia: 'Consejo Directivo del Instituto Geográfico Agustín Codazzi (IGAC)',
    solicitadoPor: 'Área Técnica B',
    urgencia: 'Normal',
    actoAdmin: 'RES-DNP-123-2025',
    solicitanteId: 'demo-2'
  },
  {
    id: 'req-001',
    titulo: 'Delegación Comercio Exterior',
    descripcion: 'Delegación para Consejo Superior de Comercio Exterior',
    fechaInicio: new Date('2025-03-14'),
    fechaFin: new Date('2025-06-14'),
    estado: 'PENDIENTE_FIRMA_SEC_GENERAL',
    delegatarioId: 'user-4',
    aprobadoPor: undefined,
    fechaAprobacion: undefined,
    observaciones: undefined,
    documentos: [],
    createdAt: new Date('2025-03-14'),
    updatedAt: new Date('2025-03-15'),
    instancia: 'Consejo Superior de Comercio Exterior',
    solicitadoPor: 'Área Técnica A (Albert Buitrago)',
    urgencia: 'Normal',
    actoAdmin: undefined,
    solicitanteId: 'demo-2'
  }
]

export default async function SolicitantePage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/auth/signin')
  }

  // Verificar que el usuario tenga rol SOLICITANTE
  if (session.user.role !== 'SOLICITANTE') {
    redirect('/dashboard')
  }

  // Filtrar solicitudes del usuario actual
  const userSolicitudes = mockSolicitudes.filter(
    solicitud => solicitud.solicitanteId === session.user.id
  )

  return (
    <SolicitanteDashboard
      solicitudes={userSolicitudes}
    />
  )
}
