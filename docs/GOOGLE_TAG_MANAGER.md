# 🏷️ Google Tag Manager - Guía de Configuración

> **🎯 CONFIGURACIÓN COMPLETA DE ETIQUETAS**: Para instrucciones detalladas paso a paso sobre cómo configurar todas las etiquetas en GTM (GA4, Ecommerce, Facebook Pixel, etc.), consulta la [Guía Completa de Configuración de Etiquetas →](./GTM_TAGS_SETUP.md)

## 🎯 ¿Qué es Google Tag Manager?

Google Tag Manager (GTM) es un sistema de gestión de etiquetas que te permite administrar y desplegar tags de marketing (píxeles de seguimiento, códigos de análisis, etc.) en tu sitio web sin tener que modificar el código directamente.

### Ventajas de usar GTM:
- ✅ Gestión centralizada de todas tus etiquetas (GA, Facebook Pixel, LinkedIn, etc.)
- ✅ No requiere cambios en el código para agregar nuevas etiquetas
- ✅ Testing y debugging de etiquetas antes de publicarlas
- ✅ Control de versiones de tus configuraciones
- ✅ Mayor rendimiento del sitio mediante carga asíncrona

---

## 🚀 Configuración Rápida

### 1. Crear una cuenta de Google Tag Manager

1. **Ve a [Google Tag Manager](https://tagmanager.google.com/)**
2. **Crea una cuenta**:
   - Click en "Create Account"
   - Nombre de cuenta: Tu nombre o empresa
   - País: Selecciona tu país
3. **Configura el contenedor**:
   - Nombre del contenedor: "JP 3D Printer Shop" (o el nombre de tu app)
   - Plataforma: **Web**
   - Click en "Create"
4. **Acepta los términos** de servicio
5. **Copia tu Container ID** (formato: `GTM-XXXXXXX`)

### 2. Configurar en tu Proyecto

Edita los archivos de environment con tu Container ID real:

**`src/environments/environment.ts`** (Desarrollo):
```typescript
export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000',
    googleAnalyticsId: 'G-TU123456789', // Tu ID de GA4
    googleTagManagerId: 'GTM-XXXXXXX' // ⚠️ Reemplaza con tu Container ID real
};
```

**`src/environments/environment.prod.ts`** (Producción):
```typescript
export const environment = {
    production: true,
    apiUrl: 'https://tu-app.railway.app',
    googleAnalyticsId: 'G-TU123456789', // Tu ID de GA4
    googleTagManagerId: 'GTM-XXXXXXX' // ⚠️ Reemplaza con tu Container ID real
};
```

### 3. Verificar que Funciona

```bash
# Inicia tu app
npm start

# Abre Chrome DevTools (F12)
# Ve a la pestaña "Console"
# Deberías ver:
✅ Google Tag Manager inicializado: GTM-XXXXXXX
```

También puedes verificar en la pestaña "Network":
- Busca requests a `googletagmanager.com`
- Deberías ver el archivo `gtm.js` cargado

---

## 🏷️ Configurar Etiquetas en GTM

### 📋 Guía Completa de Configuración

Tu aplicación ya está preparada para enviar eventos a GTM. Ahora necesitas configurar las etiquetas en la interfaz de Google Tag Manager.

**👉 Consulta la [Guía Completa de Configuración de Etiquetas](./GTM_TAGS_SETUP.md)** que incluye:

- ✅ **Google Analytics 4**: Configuración base y eventos
- ✅ **Eventos de Ecommerce**: view_item, add_to_cart, begin_checkout, purchase
- ✅ **Variables del DataLayer**: Configuración y uso
- ✅ **Triggers (Activadores)**: Para cada tipo de evento
- ✅ **Facebook Pixel**: Configuración opcional
- ✅ **Testing en Preview Mode**: Cómo verificar que todo funciona
- ✅ **Solución de problemas**: Errores comunes y soluciones

### Resumen Rápido

Las etiquetas principales que necesitas configurar:

1. **GA4 - Configuration**: Configuración base de Google Analytics
2. **GA4 - Page View**: Seguimiento de páginas vistas
3. **GA4 - View Item**: Cuando se ve un producto
4. **GA4 - Add to Cart**: Cuando se agrega al carrito
5. **GA4 - Begin Checkout**: Inicio del proceso de compra
6. **GA4 - Purchase**: Compra completada

**[→ Ver instrucciones detalladas paso a paso](./GTM_TAGS_SETUP.md)**

---

## 📊 Eventos Rastreados Automáticamente

El servicio de Analytics ya está configurado para enviar eventos tanto a GA4 directamente como a GTM:

### Eventos Automáticos:
- ✅ **Page Views**: Cada cambio de página
- ✅ **Product Views**: Cuando un usuario ve un producto
- ✅ **Add to Cart**: Cuando se agrega un producto al carrito
- ✅ **Begin Checkout**: Cuando se inicia el proceso de compra
- ✅ **Purchase**: Cuando se completa una compra

### Métodos Disponibles:

```typescript
// Para GA4 directo (legacy)
analyticsService.trackProductView(id, name, category, price);
analyticsService.trackAddToCart(id, name, price, quantity);

// Para GTM (recomendado)
analyticsService.trackProductViewGTM(id, name, category, price);
analyticsService.trackAddToCartGTM(id, name, price, quantity);
analyticsService.trackBeginCheckoutGTM(value, items);
analyticsService.trackPurchaseGTM(transactionId, value, items);

// Evento personalizado a GTM
analyticsService.trackEventGTM('custom_event', {
    category: 'engagement',
    label: 'button_click',
    value: 1
});

// Enviar datos directamente a dataLayer
analyticsService.pushToDataLayer({
    event: 'custom_event',
    customParam: 'valor'
});
```

---

## 🛠️ Configurar Etiquetas Adicionales en GTM

### Ejemplo: Facebook Pixel

1. En GTM, ve a **Tags** → **New**
2. Configuración:
   - Tipo: **Custom HTML**
   - HTML:
   ```html
   <script>
   !function(f,b,e,v,n,t,s)
   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
   n.queue=[];t=b.createElement(e);t.async=!0;
   t.src=v;s=b.getElementsByTagName(e)[0];
   s.parentNode.insertBefore(t,s)}(window, document,'script',
   'https://connect.facebook.net/en_US/fbevents.js');
   fbq('init', 'TU_PIXEL_ID');
   fbq('track', 'PageView');
   </script>
   ```
3. Trigger: **Initialization - All Pages**
4. Guarda: "Facebook Pixel"
5. Publica los cambios

### Ejemplo: LinkedIn Insight Tag

1. **Tags** → **New**
2. Tipo: **Custom HTML**
3. Agrega el código de LinkedIn
4. Trigger: **Initialization - All Pages**
5. Publica

---

## 🧪 Testing y Debugging

### Modo de Preview en GTM

1. En GTM, click en **Preview** (arriba a la derecha)
2. Ingresa tu URL: `http://localhost:4200`
3. Se abrirá una nueva ventana con el "Tag Assistant"
4. Navega por tu app y verás:
   - Qué etiquetas se disparan
   - Qué datos se envían
   - Si hay errores

### Verificar dataLayer en la Consola

```javascript
// Abre DevTools en tu app
console.log(dataLayer);

// Ver todos los eventos capturados
dataLayer.forEach((item, index) => {
    console.log(`${index}:`, item);
});
```

---

## 📈 Variables Personalizadas en GTM

Para capturar datos específicos de tu app:

### Ejemplo: Crear Variable de User ID

1. En GTM, ve a **Variables** → **New**
2. Configuración:
   - Tipo: **Data Layer Variable**
   - Data Layer Variable Name: `userId`
3. Guarda: "User ID"

### Usar la Variable desde tu App

```typescript
// En tu servicio de autenticación
analyticsService.pushToDataLayer({
    userId: user.id,
    userEmail: user.email,
    userType: user.role
});
```

---

## 🎓 Mejores Prácticas

### 1. Nomenclatura Consistente
- Etiquetas: `[Platform] - [Action]` (ej: "GA4 - PageView")
- Triggers: `[Event] - [Condition]` (ej: "Click - Add to Cart")
- Variables: `[Source] - [Name]` (ej: "DL - User ID")

### 2. Documentación
- Agrega descripciones a cada etiqueta
- Documenta versiones al publicar
- Mantén un changelog de cambios

### 3. Testing
- Siempre usa Preview antes de publicar
- Prueba en diferentes navegadores
- Verifica que no haya errores en la consola

### 4. Performance
- Usa triggers específicos en lugar de "All Pages" cuando sea posible
- Evita etiquetas bloqueantes
- Minimiza el uso de Custom HTML

---

## 🔗 Integración con Google Analytics 4

Si estás usando GTM, puedes **elegir una de dos opciones**:

### Opción 1: Solo GTM (Recomendado)
- Comenta el código directo de GA4 en `analytics.service.ts`
- Gestiona todo desde GTM
- Mayor flexibilidad y control

### Opción 2: Dual (GA4 + GTM)
- Mantén ambas implementaciones
- GA4 directo para eventos críticos
- GTM para tags adicionales (Ads, Facebook, etc.)

La implementación actual soporta ambas opciones automáticamente.

---

## 📚 Recursos Adicionales

- [Guía oficial de GTM](https://support.google.com/tagmanager)
- [GTM Academy](https://www.analyticsmania.com/google-tag-manager/)
- [Ecommerce con GTM](https://developers.google.com/tag-platform/tag-manager/ecommerce-ga4)
- [dataLayer explicado](https://developers.google.com/tag-platform/tag-manager/datalayer)

---

## ✅ Checklist de Implementación

- [ ] Cuenta de GTM creada
- [ ] Container ID configurado en `environment.ts` y `environment.prod.ts`
- [ ] GTM inicializado correctamente (verificar en consola)
- [ ] GA4 configurado en GTM (opcional)
- [ ] Eventos de ecommerce funcionando
- [ ] Preview mode tested
- [ ] Publicada primera versión
- [ ] Verificado en producción

---

## 🆘 Troubleshooting

### No veo el mensaje de inicialización

**Problema**: No aparece "✅ Google Tag Manager inicializado"

**Solución**:
- Verifica que `googleTagManagerId` esté en `environment.ts`
- Asegúrate que no sea `GTM-XXXXXXX`
- Revisa la consola para errores

### dataLayer no está definido

**Problema**: `ReferenceError: dataLayer is not defined`

**Solución**:
- El script de GTM no se cargó correctamente
- Verifica tu conexión a internet
- Revisa Content Security Policy si aplica

### Los eventos no aparecen en GA4

**Problema**: Envías eventos pero no aparecen en GA4

**Solución**:
- Verifica que GA4 esté configurado en GTM
- Usa el modo Preview de GTM para debugging
- Espera unos minutos (hay un delay normal)
- Verifica que las etiquetas estén publicadas

---

¿Necesitas ayuda? Revisa la [documentación oficial de Google Tag Manager](https://support.google.com/tagmanager).
