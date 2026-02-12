# 📊 Google Analytics - Guía de Configuración

## 🎯 Configuración Rápida

### 1. Obtener tu Google Analytics Measurement ID

1. **Ve a [Google Analytics](https://analytics.google.com/)**
2. **Crea una cuenta** (si no tienes una)
3. Click en **"Admin"** (engranaje en la parte inferior izquierda)
4. En **"Property"** → Click en **"Data Streams"**
5. Click en tu Web Stream o **"Add stream" → "Web"**
6. Copia el **Measurement ID** (formato: `G-XXXXXXXXXX`)

### 2. Configurar en tu Proyecto

Edita los archivos de environment con tu Measurement ID real:

**`src/environments/environment.ts`** (Desarrollo):
```typescript
export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000',
    googleAnalyticsId: 'G-TU123456789' // ⚠️ Reemplaza con tu ID real
};
```

**`src/environments/environment.prod.ts`** (Producción):
```typescript
export const environment = {
    production: true,
    apiUrl: 'https://tu-app.railway.app',
    googleAnalyticsId: 'G-TU123456789' // ⚠️ Reemplaza con tu ID real
};
```

### 3. Verificar que Funciona

```bash
# Inicia tu app
npm start

# Abre Chrome DevTools (F12)
# Ve a la pestaña "Network"
# Filtra por "google-analytics" o "collect"
# Navega por tu app y deberías ver requests a GA
```

También verás en la consola:
```
✅ Google Analytics inicializado: G-XXXXXXXXXX
```

---

## 📈 Eventos Rastreados Automáticamente

### Navegación de Páginas
- ✅ **Automático**: Cada cambio de ruta se registra
- No requiere código adicional

### Vista de Productos
- ✅ **Automático**: Se registra cuando un usuario ve un producto
- Ubicación: `product-detail.component.ts`
- Datos: ID, nombre, categoría, precio

### Agregar al Carrito
- ✅ **Automático**: Se registra cuando un usuario agrega un producto
- Ubicación: `product-detail.component.ts`
- Datos: ID, nombre, precio, cantidad

---

## 🛠️ Cómo Agregar Tracking Personalizado

### Ejemplo 1: Tracking de Búsqueda

```typescript
import { AnalyticsService } from './core/services/analytics.service';

export class SearchComponent {
    private analytics = inject(AnalyticsService);

    onSearch(term: string) {
        // Tu lógica de búsqueda...
        
        // Track el evento
        this.analytics.trackSearch(term);
    }
}
```

### Ejemplo 2: Tracking de Checkout

```typescript
import { AnalyticsService } from './core/services/analytics.service';

export class CheckoutComponent {
    private analytics = inject(AnalyticsService);

    startCheckout() {
        const items = this.cart.items.map(item => ({
            item_id: item.id.toString(),
            item_name: item.name,
            price: item.price,
            quantity: item.quantity
        }));

        this.analytics.trackBeginCheckout(
            this.cart.total,
            items
        );
    }
}
```

### Ejemplo 3: Tracking de Compra Completada

```typescript
import { AnalyticsService } from './core/services/analytics.service';

export class OrderConfirmationComponent {
    private analytics = inject(AnalyticsService);

    onOrderComplete(order: Order) {
        const items = order.items.map(item => ({
            item_id: item.id.toString(),
            item_name: item.name,
            price: item.price,
            quantity: item.quantity
        }));

        this.analytics.trackPurchase(
            order.id,
            order.total,
            items
        );
    }
}
```

### Ejemplo 4: Evento Personalizado

```typescript
import { AnalyticsService } from './core/services/analytics.service';

export class MyComponent {
    private analytics = inject(AnalyticsService);

    customAction() {
        this.analytics.trackEvent('custom_event_name', {
            category: 'engagement',
            label: 'button_click',
            value: 1
        });
    }
}
```

---

## 📊 Ver los Datos en Google Analytics

### Tiempo Real
1. Ve a Google Analytics Dashboard
2. Click en **"Reports"** → **"Realtime"**
3. Navega por tu app y verás los eventos en tiempo real

### Eventos
1. **"Reports"** → **"Engagement"** → **"Events"**
2. Busca eventos como:
   - `page_view` - Páginas vistas
   - `view_item` - Productos vistos
   - `add_to_cart` - Productos agregados al carrito
   - `begin_checkout` - Inicios de checkout
   - `purchase` - Compras completadas

### E-commerce
1. **"Reports"** → **"Monetization"**
2. Aquí verás:
   - Ingresos totales
   - Productos más vendidos
   - Tasa de conversión
   - Valor promedio del carrito

---

## 🔧 Métodos Disponibles en AnalyticsService

| Método | Descripción | Parámetros |
|--------|-------------|------------|
| `trackPageView(url)` | Registra vista de página | URL de la página |
| `trackEvent(name, params)` | Evento personalizado | Nombre y parámetros |
| `trackProductView(...)` | Vista de producto | ID, nombre, categoría, precio |
| `trackAddToCart(...)` | Agregar al carrito | ID, nombre, precio, cantidad |
| `trackBeginCheckout(...)` | Inicio de checkout | Valor total, items |
| `trackPurchase(...)` | Compra completada | ID orden, valor, items |
| `trackSearch(term)` | Búsqueda | Término de búsqueda |

---

## 🔒 Privacidad y GDPR

El servicio incluye:
- ✅ **IP Anonymization**: Las IPs se anonimizan automáticamente
- ✅ **No cookies de terceros**: GA4 usa cookies first-party
- ⚠️ **Considera agregar**: Banner de cookies/consentimiento para GDPR

### Ejemplo de Banner de Consentimiento

```typescript
// Antes de inicializar Analytics
if (userConsent) {
    analyticsService.initialize(environment.googleAnalyticsId);
}
```

---

## 🐛 Troubleshooting

### No veo eventos en Google Analytics

1. **Verifica el Measurement ID**:
   ```typescript
   // Debe ser formato G-XXXXXXXXXX
   googleAnalyticsId: 'G-123456789'
   ```

2. **Revisa la consola del navegador**:
   - Debe mostrar: `✅ Google Analytics inicializado`
   - Si muestra: `⚠️ Google Analytics no configurado`, actualiza el ID

3. **Verifica Network requests**:
   - F12 → Network → Filtra por "google-analytics"
   - Deberías ver requests a `www.google-analytics.com`

4. **Espera unos minutos**:
   - GA puede tardar 5-10 minutos en mostrar datos
   - Usa "Realtime" para ver eventos inmediatos

### Error: "gtag is not defined"

- Esto es normal si no has configurado el ID
- El servicio maneja este error automáticamente
- Configura tu Measurement ID para resolverlo

---

## 🚀 Deploy a Producción

### Netlify
Las variables de environment se reemplazan automáticamente en build time.

```bash
# Build para producción
npm run build

# Deploy
git push origin main
```

Netlify usará automáticamente `environment.prod.ts` con tu Measurement ID real.

### Verificar en Producción
```bash
# Abre tu app en producción
# F12 → Console
# Deberías ver: ✅ Google Analytics inicializado: G-XXXXXXXXXX
```

---

## 📚 Recursos Adicionales

- [Documentación oficial de GA4](https://developers.google.com/analytics/devguides/collection/ga4)
- [E-commerce events en GA4](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)
- [Google Analytics Dashboard](https://analytics.google.com/)

---

## ✅ Checklist de Configuración

- [ ] Crear cuenta en Google Analytics
- [ ] Obtener Measurement ID (G-XXXXXXXXXX)
- [ ] Actualizar `environment.ts` con el ID
- [ ] Actualizar `environment.prod.ts`con el ID
- [ ] Iniciar la app y verificar en consola
- [ ] Ver eventos en tiempo real en GA Dashboard
- [ ] Deploy a producción y verificar

---

## 🎉 ¡Listo!

Tu aplicación ahora está rastreando:
- ✅ Navegación de páginas
- ✅ Vistas de productos
- ✅ Agregar al carrito
- ✅ Y cualquier evento personalizado que agregues

**Siguiente paso**: Agrega tracking de checkout y compras para análisis completo de e-commerce.
