# Dashboard Solicitante - HU001

## Descripción
Este módulo implementa la Historia de Usuario HU001 para el rol Solicitante, permitiendo visualizar, filtrar y gestionar las solicitudes de delegación.

## Componentes Implementados

### 1. SolicitanteDashboard
- **Ubicación**: `src/components/solicitante/SolicitanteDashboard.tsx`
- **Función**: Componente principal que contiene el dashboard completo para el rol Solicitante
- **Características**:
  - Estadísticas rápidas (Total, Aprobadas, En Proceso, Rechazadas)
  - Botón "Nueva Solicitud" con navegación al formulario FT-H-50
  - Integración con la tabla de solicitudes

### 2. SolicitudesTable
- **Ubicación**: `src/components/solicitante/SolicitudesTable.tsx`
- **Función**: Tabla interactiva para mostrar las solicitudes de delegación
- **Características**:
  - Filtros por columnas (Instancia, Urgencia, Estado)
  - Búsqueda genérica en todos los campos visibles
  - Ordenamiento por cualquier columna
  - Acciones dinámicas según el estado de la solicitud
  - Indicadores visuales de estado con colores y iconos

### 3. Página Principal
- **Ubicación**: `src/app/solicitante/page.tsx`
- **Función**: Página principal del dashboard para usuarios con rol SOLICITANTE
- **Características**:
  - Redirección automática según el rol del usuario
  - Filtrado de solicitudes del usuario autenticado
  - Datos mock para demostración

## Funcionalidades Implementadas

### ✅ Escenario 1: Visualización de solicitudes propias
- El usuario SOLICITANTE solo ve sus propias solicitudes
- Las solicitudes se muestran en orden descendente por fecha de creación
- Excluye solicitudes con estado "COMPLETADA" (finalizadas)

### ✅ Escenario 2: Filtro por columnas
- Filtro por Instancia
- Filtro por Urgencia (Normal, Alta, Baja)
- Filtro por Estado
- Los filtros se pueden combinar

### ✅ Escenario 3: Búsqueda genérica
- Campo de búsqueda que busca en todos los campos visibles
- Búsqueda en tiempo real
- Funciona en conjunto con los filtros por columna

### ✅ Escenario 4: Acceso a acciones por solicitud
- **Seguimiento**: Disponible para todas las solicitudes
- **Editar**: Solo disponible para solicitudes en estado "BORRADOR"
- **Subsanar**: Solo disponible para solicitudes en estado "OBSERVADA"
- Navegación a páginas específicas según la acción

### ✅ Escenario 5: Crear nueva solicitud
- Botón "Nueva Solicitud" prominente en la parte superior
- Navegación al formulario FT-H-50
- Campos precargados según el usuario logueado

## Reglas de Negocio Implementadas

1. **Seguridad**: Solo usuarios con rol SOLICITANTE pueden acceder
2. **Filtrado**: Solo se muestran las solicitudes del usuario autenticado
3. **Ordenamiento**: Solicitudes ordenadas por fecha de creación descendente
4. **Estados**: Indicadores visuales claros para cada estado
5. **Acciones**: Botones de acción disponibles según el estado de la solicitud

## Estados de Solicitud Soportados

- **BORRADOR**: Solicitud en proceso de creación
- **SOLICITUD_RECIBIDA**: Solicitud recibida por el sistema
- **PENDIENTE_FIRMA_SEC_GENERAL**: Esperando firma de Secretaría General
- **PUBLICADO_Y_COMUNICADO**: Solicitud aprobada y comunicada
- **RECHAZADA**: Solicitud rechazada
- **OBSERVADA**: Solicitud con observaciones que requieren subsanación

## Navegación

- `/solicitante` - Dashboard principal
- `/solicitante/nueva-solicitud` - Formulario FT-H-50
- `/solicitante/seguimiento/[id]` - Seguimiento de solicitud
- `/solicitante/editar/[id]` - Edición de solicitud
- `/solicitante/subsanar/[id]` - Subsanación de solicitud

## Datos Mock

El sistema incluye datos de demostración que simulan:
- 4 solicitudes de delegación con diferentes estados
- Diferentes instancias (CREG, IGAC, etc.)
- Diferentes niveles de urgencia
- Fechas y actos administrativos variados

## Próximos Pasos

Para completar la implementación se requiere:
1. Implementar las páginas de seguimiento, edición y subsanación
2. Crear el formulario FT-H-50
3. Conectar con la base de datos real
4. Implementar las APIs necesarias
5. Añadir validaciones y manejo de errores

