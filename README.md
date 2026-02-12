# JP 3D Printer Shop 🖨️

Aplicación web completa para la venta de impresoras 3D desarrollada con Angular.

## 🚀 Stack Tecnológico

### Frontend
- **Framework**: Angular 17+ (Standalone Components)
- **Estilos**: Angular Material + Tailwind CSS
- **Estado**: Angular Signals
- **Formularios**: Reactive Forms
- **Routing**: Lazy Loading

### Backend (Futuro)
- Node.js + Express o NestJS
- PostgreSQL / MongoDB
- JWT Authentication
- RESTful API

## 📋 Funcionalidades Principales

### Para Clientes
- ✅ Catálogo de impresoras 3D con filtros avanzados
- ✅ Comparador de productos
- ✅ Carrito de compras
- ✅ Sistema de checkout multi-paso
- ✅ Gestión de perfil y pedidos
- ✅ Sistema de reseñas y valoraciones

### Para Administradores
- ✅ Dashboard de ventas
- ✅ Gestión de productos (CRUD)
- ✅ Gestión de inventario
- ✅ Gestión de pedidos
- ✅ Sistema de reportes

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/              # Servicios, guards, interceptors
│   ├── shared/            # Componentes, pipes, directivas compartidas
│   ├── features/          # Módulos de funcionalidades
│   │   ├── catalog/       # Catálogo de productos
│   │   ├── product-detail/# Detalle de producto
│   │   ├── cart/          # Carrito de compras
│   │   ├── checkout/      # Proceso de compra
│   │   ├── user/          # Perfil y autenticación
│   │   └── admin/         # Panel de administración
│   └── layout/            # Componentes de layout (header, footer)
```

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jpugibet/JP-3d-printer-shop.git

# Instalar dependencias
cd JP-3d-printer-shop
npm install

# Iniciar servidor de desarrollo
npm start
```

## 📝 Scripts Disponibles

```bash
npm start          # Inicia el servidor de desarrollo en http://localhost:4200
npm run build      # Compila la aplicación para producción
npm test           # Ejecuta las pruebas unitarias
npm run lint       # Analiza el código con ESLint
```

## 🌟 Características Técnicas

- **Lazy Loading**: Carga diferida de módulos para mejor rendimiento
- **SSR Ready**: Preparado para Server-Side Rendering con Angular Universal
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags dinámicos y sitemap
- **PWA Ready**: Preparado para Progressive Web App
- **Accessibility**: Cumple con estándares WCAG 2.1
- **Google Analytics**: Tracking de eventos y e-commerce integrado ([Ver guía](./docs/GOOGLE_ANALYTICS.md))

## 🔐 Seguridad

- Validación en frontend y backend
- Protección contra XSS y CSRF
- Encriptación de datos sensibles
- Rate limiting en API
- JWT para autenticación

## 📊 Testing

- Unit Tests: Jasmine/Jest
- Integration Tests
- E2E Tests: Cypress/Playwright
- Objetivo: 80% de cobertura

## 🚀 Deployment

- **Frontend**: Vercel / Netlify
- **Backend**: AWS / Heroku / Railway
- **Database**: AWS RDS / MongoDB Atlas
- **CDN**: Cloudflare / AWS CloudFront

## 📖 Documentación

- [Documentación completa del proyecto](./docs/prompt-proyecto.md)
- [Guía de Google Analytics](./docs/GOOGLE_ANALYTICS.md)
- [Guía de Despliegue](./DEPLOYMENT.md)
- [Guía Rápida de Desarrollo](./QUICK_START.md)

## 👥 Autor

- **jpugibet** - [GitHub](https://github.com/jpugibet)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🗓️ Roadmap

- [x] Fase 1: Estructura inicial del proyecto
- [ ] Fase 2: Implementación del catálogo
- [ ] Fase 3: Sistema de autenticación
- [ ] Fase 4: Carrito y checkout
- [ ] Fase 5: Panel de administración
- [ ] Fase 6: Integraciones de pago
- [ ] Fase 7: Testing completo
- [ ] Fase 8: Deployment y optimización
