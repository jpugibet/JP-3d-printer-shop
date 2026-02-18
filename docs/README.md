# 📚 Documentación de JP 3D Printer Shop

Esta carpeta contiene toda la documentación necesaria para configurar y gestionar las herramientas de marketing y analytics del proyecto.

---

## 📊 Guías de Configuración

### 🔍 SEO y Visibilidad

#### [Google Search Console](./GOOGLE_SEARCH_CONSOLE.md)
Configuración completa de Google Search Console para mejorar la visibilidad en búsquedas.

**Contenido**:
- ✅ Verificación del sitio
- ✅ Envío de sitemap
- ✅ Robots.txt
- ✅ Meta tags SEO
- ✅ Monitoreo de rendimiento
- ✅ Core Web Vitals
- ✅ Solución de problemas

**¿Cuándo usar esta guía?**
- Para verificar tu sitio en Google
- Para mejorar el ranking en búsquedas
- Para monitorear el tráfico orgánico

---

### 📈 Analytics y Tracking

#### [Google Analytics 4](./GOOGLE_ANALYTICS.md)
Guía de configuración de Google Analytics 4 para rastrear el comportamiento de usuarios.

**Contenido**:
- ✅ Obtener Measurement ID
- ✅ Configuración en el proyecto
- ✅ Eventos rastreados automáticamente
- ✅ Tracking personalizado
- ✅ Verificación de funcionamiento

**¿Cuándo usar esta guía?**
- Para implementar GA4 directamente (sin GTM)
- Para entender qué eventos se rastrean
- Para agregar tracking personalizado

---

#### [Google Tag Manager](./GOOGLE_TAG_MANAGER.md)
Guía general de Google Tag Manager y su integración con la aplicación.

**Contenido**:
- ✅ ¿Qué es GTM y sus ventajas?
- ✅ Crear cuenta y contenedor
- ✅ Configuración en el proyecto
- ✅ Verificación de funcionamiento
- ✅ Eventos automáticos disponibles
- ✅ Testing y debugging
- ✅ Mejores prácticas

**¿Cuándo usar esta guía?**
- Para entender GTM y sus beneficios
- Para configurar GTM por primera vez
- Para gestionar múltiples herramientas de marketing

---

#### [Configuración de Etiquetas en GTM](./GTM_TAGS_SETUP.md) ⭐
Guía detallada paso a paso para configurar todas las etiquetas en Google Tag Manager.

**Contenido**:
- ✅ Variables del DataLayer
- ✅ Triggers (Activadores)
- ✅ Etiqueta de GA4 Configuration
- ✅ Eventos de Ecommerce:
  - View Item (Vista de producto)
  - Add to Cart (Agregar al carrito)
  - Begin Checkout (Iniciar compra)
  - Purchase (Compra completada)
- ✅ Facebook Pixel (opcional)
- ✅ Testing en Preview Mode
- ✅ Publicación de cambios
- ✅ Verificación en GA4
- ✅ Solución de problemas

**¿Cuándo usar esta guía?**
- **DESPUÉS** de configurar GTM en tu proyecto
- Para crear todas las etiquetas necesarias
- Para configurar tracking de ecommerce
- Para agregar Facebook Pixel u otras integraciones

---

## 🗺️ Flujo de Configuración Recomendado

### Paso 1: Fundamentos
1. Lee [GOOGLE_ANALYTICS.md](./GOOGLE_ANALYTICS.md) para entender el tracking básico
2. Lee [GOOGLE_TAG_MANAGER.md](./GOOGLE_TAG_MANAGER.md) para entender GTM

### Paso 2: Configuración del Proyecto
1. Configura tu Container ID de GTM en `environment.ts` y `environment.prod.ts`
2. Verifica que GTM se inicialice correctamente

### Paso 3: Configuración de Etiquetas
1. Sigue la guía [GTM_TAGS_SETUP.md](./GTM_TAGS_SETUP.md) paso a paso
2. Configura todas las variables necesarias
3. Crea los triggers (activadores)
4. Configura las etiquetas de GA4
5. Prueba en Preview Mode
6. Publica los cambios

### Paso 4: SEO y Búsquedas
1. Sigue la guía [GOOGLE_SEARCH_CONSOLE.md](./GOOGLE_SEARCH_CONSOLE.md)
2. Verifica tu sitio en Google Search Console
3. Envía el sitemap
4. Monitorea el rendimiento

### Paso 5: Monitoreo
1. Verifica eventos en GA4
2. Monitorea Search Console semanalmente
3. Optimiza según los datos obtenidos

---

## 🎯 Casos de Uso

### "Quiero rastrear compras en mi tienda"
1. Configura GTM siguiendo [GOOGLE_TAG_MANAGER.md](./GOOGLE_TAG_MANAGER.md)
2. Configura las etiquetas siguiendo [GTM_TAGS_SETUP.md](./GTM_TAGS_SETUP.md)
3. Verifica en GA4 que los eventos se registren

### "Quiero mejorar mi posición en Google"
1. Sigue [GOOGLE_SEARCH_CONSOLE.md](./GOOGLE_SEARCH_CONSOLE.md)
2. Implementa las mejores prácticas de SEO
3. Monitorea las métricas de rendimiento

### "Quiero agregar Facebook Pixel"
1. Asegúrate de tener GTM configurado
2. Ve a [GTM_TAGS_SETUP.md](./GTM_TAGS_SETUP.md) → Sección "Etiquetas Adicionales Recomendadas"
3. Sigue las instrucciones para Facebook Pixel

### "Necesito hacer debugging de mis eventos"
1. Ve a [GTM_TAGS_SETUP.md](./GTM_TAGS_SETUP.md) → Sección "Testing - Modo Preview"
2. Ve a [GTM_TAGS_SETUP.md](./GTM_TAGS_SETUP.md) → Sección "Debug en Producción"
3. Usa las herramientas de Chrome DevTools

---

## 📋 Checklist General

### Configuración Inicial
- [ ] Google Analytics 4 configurado
- [ ] Google Tag Manager configurado
- [ ] Google Search Console verificado
- [ ] Sitemap enviado

### Etiquetas de GTM
- [ ] GA4 - Configuration
- [ ] GA4 - Page View
- [ ] GA4 - View Item
- [ ] GA4 - Add to Cart
- [ ] GA4 - Begin Checkout
- [ ] GA4 - Purchase

### Testing
- [ ] Preview Mode ejecutado
- [ ] Eventos verificados en Tag Assistant
- [ ] Datos visibles en GA4 Realtime
- [ ] No hay errores en consola

### Producción
- [ ] Cambios publicados en GTM
- [ ] Sitio desplegado
- [ ] Eventos funcionando en producción
- [ ] Search Console monitoreando

---

## 🆘 Soporte

### Recursos Oficiales
- [Google Analytics Help](https://support.google.com/analytics)
- [Google Tag Manager Help](https://support.google.com/tagmanager)
- [Google Search Console Help](https://support.google.com/webmasters)

### Comunidad
- [Google Analytics Community](https://support.google.com/analytics/community)
- [Analytics Mania](https://www.analyticsmania.com/)
- [Simo Ahava's Blog](https://www.simoahava.com/)

---

## 📝 Mantenimiento

### Semanal
- [ ] Revisar Performance en Search Console
- [ ] Verificar eventos en GA4 Realtime
- [ ] Comprobar que no haya errores

### Mensual
- [ ] Analizar reportes de GA4
- [ ] Revisar Coverage en Search Console
- [ ] Optimizar contenido según queries
- [ ] Actualizar sitemap si hay nuevas páginas

### Trimestral
- [ ] Auditoría completa de SEO
- [ ] Revisar y actualizar meta descriptions
- [ ] Optimizar velocidad de carga
- [ ] Agregar nuevas integraciones si es necesario

---

## 🔄 Actualizaciones

Este documento se actualiza cuando:
- Se agrega una nueva integración
- Se cambia la estructura de tracking
- Se detectan mejores prácticas

**Última actualización**: Febrero 18, 2026

---

¿Tienes preguntas? Revisa primero las guías específicas arriba. Si necesitas más ayuda, consulta los recursos oficiales o la comunidad.
