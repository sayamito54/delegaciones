import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"DelegacionesApp" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      text,
    })
    
    console.log('Email enviado:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error enviando email:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Error desconocido' }
  }
}

// Templates de email
export const emailTemplates = {
  delegacionAprobada: (delegacion: any, usuario: any) => ({
    subject: `Delegación aprobada: ${delegacion.titulo}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Delegación Aprobada</h2>
        <p>Hola ${usuario.name},</p>
        <p>Tu delegación <strong>"${delegacion.titulo}"</strong> ha sido aprobada.</p>
        <p><strong>Fecha de inicio:</strong> ${new Date(delegacion.fechaInicio).toLocaleDateString('es-ES')}</p>
        <p><strong>Fecha de fin:</strong> ${new Date(delegacion.fechaFin).toLocaleDateString('es-ES')}</p>
        <p>Puedes acceder a más detalles en la aplicación.</p>
        <br>
        <p>Saludos,<br>Equipo DelegacionesApp</p>
      </div>
    `
  }),
  
  delegacionRechazada: (delegacion: any, usuario: any, motivo?: string) => ({
    subject: `Delegación rechazada: ${delegacion.titulo}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc2626;">Delegación Rechazada</h2>
        <p>Hola ${usuario.name},</p>
        <p>Tu delegación <strong>"${delegacion.titulo}"</strong> ha sido rechazada.</p>
        ${motivo ? `<p><strong>Motivo:</strong> ${motivo}</p>` : ''}
        <p>Puedes revisar los detalles y hacer las correcciones necesarias en la aplicación.</p>
        <br>
        <p>Saludos,<br>Equipo DelegacionesApp</p>
      </div>
    `
  }),
  
  nuevaDelegacion: (delegacion: any, usuario: any) => ({
    subject: `Nueva delegación pendiente de aprobación: ${delegacion.titulo}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f59e0b;">Nueva Delegación Pendiente</h2>
        <p>Hola,</p>
        <p>Se ha creado una nueva delegación que requiere tu aprobación:</p>
        <p><strong>Título:</strong> ${delegacion.titulo}</p>
        <p><strong>Delegatario:</strong> ${usuario.name}</p>
        <p><strong>Fecha de inicio:</strong> ${new Date(delegacion.fechaInicio).toLocaleDateString('es-ES')}</p>
        <p><strong>Fecha de fin:</strong> ${new Date(delegacion.fechaFin).toLocaleDateString('es-ES')}</p>
        <p>Por favor, revisa y aprueba o rechaza esta delegación en la aplicación.</p>
        <br>
        <p>Saludos,<br>Equipo DelegacionesApp</p>
      </div>
    `
  })
}

