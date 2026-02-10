# Prompt Completo - App Web Venta de Impresoras 3D

## Descripción General
Desarrollar una aplicación web completa para la venta de impresoras 3D, con frontend en Angular generado con Google Antigravity y backend robusto.

## Stack Tecnológico

### Frontend
- **Framework**: Angular (última versión estable)
- **Generación**: Google Antigravity
- **Estilos**: Tailwind CSS o Angular Material
- **Estado**: NgRx o Signals (Angular 16+)
- **Formularios**: Reactive Forms

### Backend (Sugerido)
- **Opción 1**: Node.js + Express + TypeScript
- **Opción 2**: NestJS (framework full TypeScript)
- **Base de datos**: PostgreSQL o MongoDB
- **Autenticación**: JWT + OAuth2
- **API**: RESTful o GraphQL

## Funcionalidades Requeridas

### 1. Módulo de Catálogo
- Listado de impresoras 3D con filtros avanzados:
  - Por precio
  - Por marca
  - Por tipo de tecnología (FDM, SLA, SLS)
  - Por volumen de impresión
  - Por resolución
- Vista de detalle de producto con:
  - Galería de imágenes
  - Especificaciones técnicas
  - Videos demostrativos
  - Reseñas y valoraciones
- Comparador de productos (hasta 3 impresoras)

### 2. Módulo de Carrito y Checkout
- Carrito de compras persistente
- Cálculo de envío en tiempo real
- Múltiples métodos de pago:
  - Tarjeta de crédito/débito
  - PayPal
  - Transferencia bancaria
- Sistema de cupones y descuentos
- Resumen de pedido antes de confirmar

### 3. Módulo de Usuario
- Registro y login (email + social login)
- Perfil de usuario editable
- Historial de pedidos
- Lista de deseos
- Direcciones de envío guardadas
- Sistema de notificaciones

### 4. Panel de Administración
- Dashboard con estadísticas de ventas
- Gestión de productos (CRUD completo)
- Gestión de inventario
- Gestión de pedidos y estados
- Gestión de usuarios y roles
- Sistema de reportes

### 5. Funcionalidades Adicionales
- Búsqueda inteligente con autocompletado
- Sección de blog/tutoriales sobre impresión 3D
- Chat de soporte en vivo (integración con Zendesk/Intercom)
- Sistema de reviews y ratings
- Newsletter subscription
- Sitio multiidioma (i18n)
- Responsive design (mobile-first)

## Estructura del Proyecto Angular

```
src/
├── app/
│   ├── core/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── services/
│   │   └── models/
│   ├── shared/
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── validators/
│   ├── features/
│   │   ├── catalog/
│   │   ├── product-detail/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── user/
│   │   └── admin/
│   ├── layout/
│   │   ├── header/
│   │   ├── footer/
│   │   └── sidebar/
│   └── app.routes.ts
├── assets/
├── environments/
└── styles/
```

## Requisitos de UX/UI

### Diseño
- Diseño moderno y profesional
- Paleta de colores relacionada con tecnología (azules, grises, blancos)
- Tipografía clara y legible
- Animaciones sutiles y transiciones suaves
- Imágenes de alta calidad de productos

### Experiencia de Usuario
- Navegación intuitiva
- Máximo 3 clics para llegar a cualquier producto
- Proceso de checkout simplificado (máximo 3 pasos)
- Feedback visual en todas las acciones
- Mensajes de error claros y constructivos
- Carga lazy de imágenes
- Skeleton loaders durante cargas

## Consideraciones Técnicas

### Performance
- Lazy loading de módulos
- Optimización de imágenes (WebP)
- Server-Side Rendering (SSR) con Angular Universal
- Caché estratégica
- CDN para assets estáticos

### Seguridad
- Validación en frontend y backend
- Protección contra XSS y CSRF
- Encriptación de datos sensibles
- Rate limiting en API
- Sanitización de inputs

### SEO
- Meta tags dinámicos
- Sitemap.xml
- Robots.txt
- Schema markup para productos
- URLs amigables

### Testing
- Unit tests (Jasmine/Jest)
- Integration tests
- E2E tests (Cypress/Playwright)
- Cobertura mínima del 80%

## Integraciones Necesarias

1. **Pasarela de pago**: Stripe/PayPal
2. **Servicio de email**: SendGrid/Mailgun
3. **Analytics**: Google Analytics 4
4. **Seguimiento de envíos**: Integración con courier (FedEx, UPS, etc.)
5. **Almacenamiento**: AWS S3 o Cloudinary para imágenes
6. **Monitoreo**: Sentry para error tracking

## Entregables

1. Código fuente completo en repositorio Git
2. Documentación técnica
3. Manual de usuario (admin)
4. Scripts de deployment
5. Archivo README con instrucciones de instalación
6. Variables de entorno documentadas
7. Diagramas de arquitectura

## Cronograma Sugerido

- **Semana 1-2**: Setup inicial, arquitectura, diseño UI/UX
- **Semana 3-4**: Módulo de catálogo y productos
- **Semana 5-6**: Módulo de usuario y autenticación
- **Semana 7-8**: Carrito y checkout
- **Semana 9-10**: Panel de administración
- **Semana 11-12**: Integraciones y testing
- **Semana 13-14**: Optimización, deployment y documentación

## Notas para Google Antigravity

Al generar el proyecto con Google Antigravity, asegúrate de especificar:
- Estructura modular con lazy loading
- Uso de standalone components (si aplica Angular 14+)
- Configuración de rutas con guards
- Servicios core para API y autenticación
- Interceptors para manejo de tokens y errores
- Configuración de environments para desarrollo y producción
