import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { DelegacionFormData } from '@/types'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const estado = searchParams.get('estado')
    const search = searchParams.get('search')

    const where: any = {}
    
    // Filtrar por estado si se proporciona
    if (estado) {
      where.estado = estado.toUpperCase()
    }
    
    // Filtrar por búsqueda si se proporciona
    if (search) {
      where.OR = [
        { titulo: { contains: search, mode: 'insensitive' } },
        { descripcion: { contains: search, mode: 'insensitive' } }
      ]
    }

    // Si es delegatario, solo mostrar sus delegaciones
    if (session.user.role === 'delegatario') {
      where.delegatarioId = session.user.id
    }

    const delegaciones = await prisma.delegacion.findMany({
      where,
      include: {
        delegatario: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        documentos: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      skip: (page - 1) * limit,
      take: limit
    })

    const total = await prisma.delegacion.count({ where })

    return NextResponse.json({
      success: true,
      data: {
        delegaciones,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    })
  } catch (error) {
    console.error('Error obteniendo delegaciones:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const body: DelegacionFormData = await request.json()
    
    // Validar datos requeridos
    if (!body.titulo || !body.descripcion || !body.fechaInicio || !body.fechaFin) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    const delegacion = await prisma.delegacion.create({
      data: {
        titulo: body.titulo,
        descripcion: body.descripcion,
        fechaInicio: new Date(body.fechaInicio),
        fechaFin: new Date(body.fechaFin),
        delegatarioId: body.delegatarioId || session.user.id,
        observaciones: body.observaciones,
        estado: 'BORRADOR'
      },
      include: {
        delegatario: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: delegacion
    })
  } catch (error) {
    console.error('Error creando delegación:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

