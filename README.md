# DelegacionesApp

Sistema de gestión de delegaciones para la DNP (Departamento Nacional de Planeación) desarrollado con Next.js, TypeScript y Microsoft Entra ID.

## 🏗️ Arquitectura

La aplicación está construida siguiendo la arquitectura propuesta con los siguientes componentes:

- **Frontend**: Next.js 14 con App Router
- **Backend**: API Routes de Next.js
- **Base de datos**: PostgreSQL (compatible con SQL Server)
- **Autenticación**: Microsoft Entra ID (Azure AD)
- **Email**: Servicio SMTP integrado
- **UI**: Tailwind CSS con Headless UI

## 👥 Roles de Usuario

- **A. Técnica**: Gestión técnica de delegaciones
- **Director G.**: Aprobación y supervisión general
- **Secretaría G.**: Administración y coordinación
- **Delegatario**: Solicitud y gestión de sus delegaciones

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd DelegacionesApp
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp env.example .env.local
   ```
   
   Editar `.env.local` con tus credenciales:
   - `DATABASE_URL`: URL de conexión a PostgreSQL
   - `AZURE_CLIENT_ID`: ID de aplicación en Azure AD
   - `AZURE_CLIENT_SECRET`: Secreto de aplicación
   - `AZURE_TENANT_ID`: ID del tenant de Azure
   - `SMTP_*`: Configuración del servidor SMTP

4. **Configurar la base de datos**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Ejecutar la aplicación**
   ```bash
   npm run dev
   ```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   ├── auth/              # Páginas de autenticación
│   ├── dashboard/         # Dashboard principal
│   └── layout.tsx         # Layout raíz
├── components/            # Componentes React
│   ├── dashboard/         # Componentes del dashboard
│   └── layout/            # Componentes de layout
├── context/               # Contextos de React
├── lib/                   # Utilidades y configuración
│   ├── auth.ts           # Configuración de NextAuth
│   ├── prisma.ts         # Cliente de Prisma
│   └── email.ts          # Servicio de email
└── types/                 # Definiciones de TypeScript
```

## 🔧 Scripts Disponibles

- `npm run dev`: Ejecutar en modo desarrollo
- `npm run build`: Construir para producción
- `npm run start`: Ejecutar en modo producción
- `npm run lint`: Ejecutar linter
- `npm run type-check`: Verificar tipos de TypeScript

## 🗄️ Base de Datos

El esquema de la base de datos incluye:

- **Users**: Usuarios del sistema con roles
- **Delegaciones**: Solicitudes de delegación
- **Documentos**: Archivos adjuntos a delegaciones
- **Notificaciones**: Sistema de notificaciones
- **Sesiones**: Gestión de sesiones de NextAuth

## 🔐 Autenticación

La aplicación utiliza Microsoft Entra ID para la autenticación:

1. Configura una aplicación en Azure AD
2. Obtén el Client ID, Client Secret y Tenant ID
3. Configura las variables de entorno correspondientes
4. Los usuarios podrán iniciar sesión con sus cuentas corporativas

## 📧 Notificaciones por Email

El sistema incluye notificaciones automáticas para:

- Aprobación de delegaciones
- Rechazo de delegaciones
- Nuevas delegaciones pendientes de aprobación

## 🎨 UI/UX

- Diseño responsivo con Tailwind CSS
- Componentes accesibles con Headless UI
- Iconos de Heroicons
- Tema consistente con colores corporativos

## 📱 Características Principales

- ✅ Autenticación con Microsoft Entra ID
- ✅ Gestión de roles de usuario
- ✅ Dashboard personalizado por rol
- ✅ CRUD completo de delegaciones
- ✅ Sistema de notificaciones
- ✅ Envío de emails automáticos
- ✅ Interfaz responsiva y moderna
- ✅ Validación de formularios
- ✅ Manejo de estados de carga

## 🔄 Próximos Pasos

1. Implementar subida de documentos
2. Agregar reportes avanzados
3. Integrar con sistemas externos
4. Implementar auditoría de cambios
5. Agregar notificaciones push

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

