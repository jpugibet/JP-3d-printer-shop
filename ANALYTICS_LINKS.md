# 🔗 Analytics & Marketing Links

Enlaces rápidos a todas las herramientas de analytics y marketing configuradas.

---

## 📊 Dashboards y Análisis

### Looker Studio (Data Studio)
**URL**: https://lookerstudio.google.com/  
**Propósito**: Dashboards visuales y reportes personalizados  
**Guía**: [docs/LOOKER_STUDIO.md](./docs/LOOKER_STUDIO.md)  
**Quick Start**: [docs/LOOKER_STUDIO_QUICK_START.md](./docs/LOOKER_STUDIO_QUICK_START.md)

### Google Analytics 4
**URL**: https://analytics.google.com/  
**Property ID**: `G-G8PPR7VQXD`  
**Propósito**: Tracking de usuarios y eventos  
**Guía**: [docs/GOOGLE_ANALYTICS.md](./docs/GOOGLE_ANALYTICS.md)

### Google Tag Manager
**URL**: https://tagmanager.google.com/  
**Container ID**: `GTM-PKDJHJH8`  
**Propósito**: Gestión centralizada de etiquetas  
**Guía**: [docs/GOOGLE_TAG_MANAGER.md](./docs/GOOGLE_TAG_MANAGER.md)  
**Setup Completo**: [docs/GTM_TAGS_SETUP.md](./docs/GTM_TAGS_SETUP.md)

---

## 🔍 SEO y Visibilidad

### Google Search Console
**URL**: https://search.google.com/search-console  
**Propósito**: SEO, indexación, rendimiento en búsquedas  
**Guía**: [docs/GOOGLE_SEARCH_CONSOLE.md](./docs/GOOGLE_SEARCH_CONSOLE.md)

---

## 📚 Documentación

### Índice General
**Archivo**: [docs/README.md](./docs/README.md)  
**Contenido**: Flujo de configuración, casos de uso, checklist

### Guías Disponibles
1. [Google Analytics 4](./docs/GOOGLE_ANALYTICS.md) - Tracking básico
2. [Google Tag Manager](./docs/GOOGLE_TAG_MANAGER.md) - Introducción a GTM
3. [Configuración GTM](./docs/GTM_TAGS_SETUP.md) - Setup completo paso a paso
4. [Looker Studio](./docs/LOOKER_STUDIO.md) - Dashboards y reportes
5. [Looker Studio Quick Start](./docs/LOOKER_STUDIO_QUICK_START.md) - Guía rápida
6. [Google Search Console](./docs/GOOGLE_SEARCH_CONSOLE.md) - SEO

---

## 🎯 Quick Actions

### Ver Datos en Tiempo Real
```
1. GA4 Realtime: https://analytics.google.com/ → Realtime
2. GTM Preview: https://tagmanager.google.com/ → Preview
```

### Crear Nuevo Dashboard
```
1. Ve a: https://lookerstudio.google.com/
2. Sigue: docs/LOOKER_STUDIO_QUICK_START.md
3. Tiempo: 15 minutos
```

### Verificar Eventos de Ecommerce
```
1. GTM: https://tagmanager.google.com/ → Preview Mode
2. GA4: https://analytics.google.com/ → Realtime → Events
3. Check: view_item, add_to_cart, begin_checkout, purchase
```

### Monitorear SEO
```
1. Search Console: https://search.google.com/search-console
2. Check: Performance, Coverage, Enhancements
3. Frecuencia: Semanal
```

---

## 🔐 Credenciales y Acceso

### Cuentas Necesarias
- Google Account (same for all services)
- Acceso a: GA4, GTM, Search Console, Looker Studio

### IDs de Configuración
```javascript
// Google Analytics 4
MEASUREMENT_ID = 'G-G8PPR7VQXD'

// Google Tag Manager
CONTAINER_ID = 'GTM-PKDJHJH8'

// Search Console
VERIFICATION_FILE = 'googled8137d08e5a24013.html'
```

---

## 📞 Soporte

### Recursos Oficiales
- [Google Analytics Help](https://support.google.com/analytics)
- [Google Tag Manager Help](https://support.google.com/tagmanager)
- [Looker Studio Help](https://support.google.com/looker-studio)
- [Search Console Help](https://support.google.com/webmasters)

### Comunidad
- [Analytics Mania](https://www.analyticsmania.com/)
- [Simo Ahava's Blog](https://www.simoahava.com/)
- [Looker Studio Gallery](https://lookerstudio.google.com/gallery)

---

## ✅ Quick Checklist

### Configuración Completa
- [x] GA4 configurado (`G-G8PPR7VQXD`)
- [x] GTM configurado (`GTM-PKDJHJH8`)
- [x] Eventos de ecommerce implementados
- [x] Search Console verificado
- [x] Documentación completa de Looker Studio
- [ ] Looker Studio conectado (pendiente: requiere datos)
- [ ] Dashboards creados
- [ ] Reportes automáticos configurados

### Próximos Pasos
1. Esperar 24-48 horas para acumular datos en GA4
2. Conectar Looker Studio con GA4
3. Crear primer dashboard siguiendo [Quick Start](./docs/LOOKER_STUDIO_QUICK_START.md)
4. Configurar reportes automáticos por email
5. Compartir dashboards con equipo

---

**Última actualización**: Febrero 18, 2026  
**Mantenido por**: JP 3D Printer Shop Team
