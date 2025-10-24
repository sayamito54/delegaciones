// Tipos de usuario según la arquitectura
export type UserRole = 'ADMINISTRADOR' | 'SOLICITANTE' | 'DIRECTOR' | 'SECRETARIA' | 'DELEGATARIO'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  department?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

// Tipos para administración de usuarios
export interface UserFilters {
  email?: string
  role?: UserRole
  department?: string
  isActive?: boolean
  search?: string
}

export interface UserAction {
  id: string
  userId: string
  action: 'view' | 'edit' | 'deactivate' | 'activate'
  performedBy: string
  performedAt: Date
  details?: string
}

export interface UserWithActions extends User {
  actions: UserAction[]
}

// Tipos para delegaciones
export interface Delegacion {
  id: string
  titulo: string
  descripcion: string
  fechaInicio: Date
  fechaFin: Date
  estado: DelegacionEstado
  delegatarioId: string
  delegatario?: User
  aprobadoPor?: string
  fechaAprobacion?: Date
  observaciones?: string
  documentos: Documento[]
  createdAt: Date
  updatedAt: Date
  // Campos específicos para solicitudes de delegación
  instancia: string
  solicitadoPor: string
  urgencia: 'Normal' | 'Alta' | 'Baja'
  actoAdmin?: string
  solicitanteId: string
  solicitante?: User
}

export type DelegacionEstado = 
  | 'BORRADOR'
  | 'PENDIENTE_APROBACION'
  | 'APROBADA'
  | 'RECHAZADA'
  | 'EN_PROGRESO'
  | 'COMPLETADA'
  | 'CANCELADA'
  | 'SOLICITUD_RECIBIDA'
  | 'PENDIENTE_FIRMA_SEC_GENERAL'
  | 'PUBLICADO_Y_COMUNICADO'
  | 'OBSERVADA'

export interface Documento {
  id: string
  nombre: string
  url: string
  tipo: string
  tamano: number
  delegacionId: string
  uploadedAt: Date
}

// Tipos para notificaciones
export interface Notificacion {
  id: string
  titulo: string
  mensaje: string
  tipo: 'info' | 'warning' | 'error' | 'success'
  leida: boolean
  userId: string
  delegacionId?: string
  createdAt: Date
}

// Tipos para la API
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Tipos para formularios
export interface DelegacionFormData {
  titulo: string
  descripcion: string
  fechaInicio: string
  fechaFin: string
  delegatarioId: string
  observaciones?: string
}

// Tipos para filtros y búsqueda
export interface DelegacionFilters {
  estado?: DelegacionEstado
  delegatarioId?: string
  fechaInicio?: Date
  fechaFin?: Date
  search?: string
  instancia?: string
  urgencia?: 'Normal' | 'Alta' | 'Baja'
  solicitanteId?: string
}

// Tipos específicos para el dashboard de Solicitante
export interface SolicitudDelegacionFilters {
  instancia?: string
  urgencia?: 'Normal' | 'Alta' | 'Baja'
  estado?: DelegacionEstado
  search?: string
}

export interface SolicitudDelegacionAction {
  id: string
  label: string
  variant: 'primary' | 'secondary' | 'danger'
  icon: string
  action: () => void
  disabled?: boolean
}

export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}
