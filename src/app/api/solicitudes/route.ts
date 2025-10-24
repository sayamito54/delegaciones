import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      )
    }

    if (session.user.role !== 'SOLICITANTE') {
      return NextResponse.json(
        { error: 'Solo usuarios con rol SOLICITANTE pueden crear solicitudes' },
        { status: 403 }
      )
    }

    const body = await request.json()
    
    // Validar campos obligatorios
    const requiredFields = ['instancia', 'delegadoPropuesto', 'fechaDesignacion', 'urgencia', 'justificacion']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Campos obligatorios faltantes: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Generar consecutivo único
    const consecutivo = generarConsecutivo()
    
    // Crear objeto de solicitud
    const nuevaSolicitud = {
      id: consecutivo,
      titulo: `Delegación ${body.instancia}`,
      descripcion: body.justificacion,
      fechaInicio: new Date(body.fechaDesignacion),
      fechaFin: body.fechaVencimiento ? new Date(body.fechaVencimiento) : null,
      estado: 'PENDIENTE_APROBACION',
      delegatarioId: 'user-pendiente', // Se asignará posteriormente
      observaciones: null,
      instancia: body.instancia,
      solicitadoPor: session.user.name || 'Usuario',
      urgencia: body.urgencia,
      actoAdmin: null,
      solicitanteId: session.user.id,
      delegadoPropuesto: body.delegadoPropuesto,
      documentos: body.documentos || [],
      createdAt: new Date(),
      updatedAt: new Date()
    }

    // Aquí se implementaría el guardado en la base de datos
    // const solicitudCreada = await prisma.delegacion.create({ data: nuevaSolicitud })
    
    console.log('Nueva solicitud creada:', nuevaSolicitud)
    
    return NextResponse.json({
      success: true,
      data: nuevaSolicitud,
      message: 'Solicitud creada exitosamente'
    })

  } catch (error) {
    console.error('Error al crear solicitud:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// Función para generar consecutivo único
function generarConsecutivo(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substr(2, 5)
  return `SOL-${timestamp}-${random}`.toUpperCase()
}
