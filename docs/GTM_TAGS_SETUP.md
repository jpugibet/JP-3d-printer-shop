# 🏷️ Configuración de Etiquetas en Google Tag Manager

Esta guía te ayudará a configurar todas las etiquetas necesarias en Google Tag Manager para rastrear eventos de ecommerce y analítica en tu tienda de impresoras 3D.

---

## 📋 Índice de Etiquetas

1. [Configuración Básica](#configuración-básica)
2. [Google Analytics 4 (GA4)](#google-analytics-4-ga4)
3. [Eventos de Ecommerce](#eventos-de-ecommerce)
4. [Eventos Personalizados](#eventos-personalizados)
5. [Variables del DataLayer](#variables-del-datalayer)
6. [Triggers (Activadores)](#triggers-activadores)

---

## 🎯 Configuración Básica

### Paso 1: Acceder a GTM

1. Ve a https://tagmanager.google.com/
2. Selecciona tu contenedor: **GTM-PKDJHJH8**
3. Asegúrate de estar en modo "Workspace"

---

## 📊 Google Analytics 4 (GA4)

### 1️⃣ Etiqueta: GA4 Configuration

**Propósito**: Configuración base de Google Analytics 4

**Tipo**: Google Analytics: GA4 Configuration

**Configuración**:
```
Nombre: GA4 - Configuration
Tipo de etiqueta: Google Analytics: GA4 Configuration
Measurement ID: G-G8PPR7VQXD
```

**Campos de configuración**:
```
send_page_view: false (lo manejamos manualmente)
```

**Activación**:
- Trigger: `Initialization - All Pages`

**Pasos para crear**:
1. **Tags** → **New**
2. Click en "Tag Configuration"
3. Selecciona: **Google Analytics: GA4 Configuration**
4. Measurement ID: `G-G8PPR7VQXD`
5. Click en "Triggering"
6. Selecciona: **Initialization - All Pages**
7. Nombre: `GA4 - Configuration`
8. **Save**

---

### 2️⃣ Etiqueta: GA4 Page View

**Propósito**: Rastrear vistas de página

**Tipo**: Google Analytics: GA4 Event

**Configuración**:
```
Nombre: GA4 - Page View
Tipo de etiqueta: Google Analytics: GA4 Event
Configuration Tag: GA4 - Configuration
Event Name: page_view
```

**Parámetros del evento**:
| Parameter Name | Value (Variable) |
|---|---|
| page_path | `{{Page Path}}` |
| page_title | `{{Page Title}}` |
| page_location | `{{Page URL}}` |

**Activación**:
- Trigger: `Custom Event - page_view`

**Pasos para crear**:
1. **Tags** → **New**
2. Tipo: **Google Analytics: GA4 Event**
3. Configuration Tag: Selecciona `GA4 - Configuration`
4. Event Name: `page_view`
5. Agrega Event Parameters (ver tabla arriba)
6. Trigger: Crea o selecciona `Custom Event - page_view`
7. **Save**

---

## 🛒 Eventos de Ecommerce

### 3️⃣ Etiqueta: GA4 - View Item (Vista de Producto)

**Propósito**: Cuando un usuario ve el detalle de un producto

**Tipo**: Google Analytics: GA4 Event

**Configuración**:
```
Nombre: GA4 - Ecommerce - View Item
Configuration Tag: GA4 - Configuration
Event Name: view_item
```

**Parámetros del evento**:
```javascript
{
  "currency": "USD",
  "value": {{DL - Ecommerce Value}},
  "items": {{DL - Ecommerce Items}}
}
```

**Variables necesarias** (crear en Variables):

**Variable 1: DL - Ecommerce Items**
- Tipo: Data Layer Variable
- Data Layer Variable Name: `ecommerce.items`

**Variable 2: DL - Ecommerce Value**
- Tipo: Data Layer Variable
- Data Layer Variable Name: `ecommerce.value`

**Activación**:
- Trigger: `Custom Event = view_item`

**Pasos para crear**:
1. Primero crea las variables (ver sección Variables)
2. **Tags** → **New**
3. Tipo: **Google Analytics: GA4 Event**
4. Configuration Tag: `GA4 - Configuration`
5. Event Name: `view_item`
6. Event Parameters:
   - currency: `USD` (texto)
   - value: `{{DL - Ecommerce Value}}` (variable)
   - items: `{{DL - Ecommerce Items}}` (variable)
7. Trigger: `Custom Event - view_item`
8. **Save**

---

### 4️⃣ Etiqueta: GA4 - Add to Cart

**Propósito**: Cuando un usuario agrega un producto al carrito

**Configuración**:
```
Nombre: GA4 - Ecommerce - Add to Cart
Configuration Tag: GA4 - Configuration
Event Name: add_to_cart
```

**Parámetros del evento**:
```javascript
{
  "currency": "USD",
  "value": {{DL - Ecommerce Value}},
  "items": {{DL - Ecommerce Items}}
}
```

**Activación**:
- Trigger: `Custom Event = add_to_cart`

**Pasos para crear**:
1. **Tags** → **New**
2. Tipo: **Google Analytics: GA4 Event**
3. Configuration Tag: `GA4 - Configuration`
4. Event Name: `add_to_cart`
5. Event Parameters (igual que view_item):
   - currency: `USD`
   - value: `{{DL - Ecommerce Value}}`
   - items: `{{DL - Ecommerce Items}}`
6. Trigger: `Custom Event - add_to_cart`
7. **Save**

---

### 5️⃣ Etiqueta: GA4 - Begin Checkout

**Propósito**: Cuando un usuario inicia el proceso de compra

**Configuración**:
```
Nombre: GA4 - Ecommerce - Begin Checkout
Configuration Tag: GA4 - Configuration
Event Name: begin_checkout
```

**Parámetros del evento**:
```javascript
{
  "currency": "USD",
  "value": {{DL - Ecommerce Value}},
  "items": {{DL - Ecommerce Items}}
}
```

**Activación**:
- Trigger: `Custom Event = begin_checkout`

**Pasos para crear**: (Igual que los anteriores, pero con event name `begin_checkout`)

---

### 6️⃣ Etiqueta: GA4 - Purchase

**Propósito**: Cuando se completa una compra

**Configuración**:
```
Nombre: GA4 - Ecommerce - Purchase
Configuration Tag: GA4 - Configuration
Event Name: purchase
```

**Parámetros del evento**:
```javascript
{
  "transaction_id": {{DL - Transaction ID}},
  "currency": "USD",
  "value": {{DL - Ecommerce Value}},
  "items": {{DL - Ecommerce Items}}
}
```

**Variable adicional necesaria**:

**Variable: DL - Transaction ID**
- Tipo: Data Layer Variable
- Data Layer Variable Name: `ecommerce.transaction_id`

**Activación**:
- Trigger: `Custom Event = purchase`

---

## 🎨 Eventos Personalizados

### 7️⃣ Etiqueta: GA4 - Custom Event

**Propósito**: Eventos personalizados genéricos

**Configuración**:
```
Nombre: GA4 - Custom Event
Configuration Tag: GA4 - Configuration
Event Name: {{Event}}
```

**Parámetros dinámicos**: Se pasan automáticamente desde el dataLayer

**Activación**:
- Trigger: `Custom Event - Regex matches: .*` (todos los eventos personalizados)

---

## 🔧 Variables del DataLayer

### Crear Variables de DataLayer

Ve a **Variables** → **New** → **User-Defined Variables**

#### Variable 1: DL - Ecommerce Items
```
Nombre: DL - Ecommerce Items
Tipo: Data Layer Variable
Data Layer Variable Name: ecommerce.items
Data Layer Version: Version 2
```

#### Variable 2: DL - Ecommerce Value
```
Nombre: DL - Ecommerce Value
Tipo: Data Layer Variable
Data Layer Variable Name: ecommerce.value
Data Layer Version: Version 2
```

#### Variable 3: DL - Transaction ID
```
Nombre: DL - Transaction ID
Tipo: Data Layer Variable
Data Layer Variable Name: ecommerce.transaction_id
Data Layer Version: Version 2
```

#### Variable 4: Event (Built-in)
Esta variable ya está disponible como Built-in Variable. Actívala:
1. **Variables** → **Configure**
2. Marca la casilla: **Event**

---

## ⚡ Triggers (Activadores)

### Crear Triggers

Ve a **Triggers** → **New**

#### Trigger 1: Initialization - All Pages
```
Nombre: Initialization - All Pages
Tipo: Initialization
Se activa en: All Initialization Events
```

#### Trigger 2: Custom Event - page_view
```
Nombre: Custom Event - page_view
Tipo: Custom Event
Event name: page_view
Se activa en: All Custom Events
```

#### Trigger 3: Custom Event - view_item
```
Nombre: Custom Event - view_item
Tipo: Custom Event
Event name: view_item
Se activa en: All Custom Events
```

#### Trigger 4: Custom Event - add_to_cart
```
Nombre: Custom Event - add_to_cart
Tipo: Custom Event
Event name: add_to_cart
Se activa en: All Custom Events
```

#### Trigger 5: Custom Event - begin_checkout
```
Nombre: Custom Event - begin_checkout
Tipo: Custom Event
Event name: begin_checkout
Se activa en: All Custom Events
```

#### Trigger 6: Custom Event - purchase
```
Nombre: Custom Event - purchase
Tipo: Custom Event
Event name: purchase
Se activa en: All Custom Events
```

---

## 📦 Estructura del DataLayer

Tu aplicación ya envía datos al dataLayer en este formato:

### Page View
```javascript
dataLayer.push({
  event: 'page_view',
  page_path: '/catalog',
  page_title: 'Catalog'
});
```

### View Item
```javascript
dataLayer.push({
  event: 'view_item',
  ecommerce: {
    items: [{
      item_id: 'prod_001',
      item_name: 'Prusa i3 MK3S',
      item_category: 'FDM',
      price: 999.00
    }]
  }
});
```

### Add to Cart
```javascript
dataLayer.push({
  event: 'add_to_cart',
  ecommerce: {
    currency: 'USD',
    value: 999.00,
    items: [{
      item_id: 'prod_001',
      item_name: 'Prusa i3 MK3S',
      price: 999.00,
      quantity: 1
    }]
  }
});
```

### Begin Checkout
```javascript
dataLayer.push({
  event: 'begin_checkout',
  ecommerce: {
    currency: 'USD',
    value: 2497.00,
    items: [
      {
        item_id: 'prod_001',
        item_name: 'Prusa i3 MK3S',
        price: 999.00,
        quantity: 2
      },
      {
        item_id: 'prod_002',
        item_name: 'Filament PLA',
        price: 24.50,
        quantity: 20
      }
    ]
  }
});
```

### Purchase
```javascript
dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'ORDER_12345',
    currency: 'USD',
    value: 2497.00,
    items: [
      {
        item_id: 'prod_001',
        item_name: 'Prusa i3 MK3S',
        price: 999.00,
        quantity: 2
      }
    ]
  }
});
```

---

## 🧪 Testing - Modo Preview

### Activar Preview Mode

1. En GTM, click en **Preview** (arriba a la derecha)
2. Ingresa tu URL: `http://localhost:4200` o tu URL de producción
3. Se abrirá GTM Tag Assistant

### Qué verificar:

✅ **Al cargar la página**:
- Se dispara: `Initialization - All Pages`
- Se dispara: `GA4 - Configuration`
- Se dispara: `GA4 - Page View`

✅ **Al ver un producto** (ir a /catalog/product/[id]):
- Se dispara: `Custom Event - view_item`
- Se dispara: `GA4 - Ecommerce - View Item`
- dataLayer contiene: `ecommerce.items`

✅ **Al agregar al carrito**:
- Se dispara: `Custom Event - add_to_cart`
- Se dispara: `GA4 - Ecommerce - Add to Cart`
- dataLayer contiene: `ecommerce.value` y `ecommerce.items`

✅ **Al iniciar checkout**:
- Se dispara: `Custom Event - begin_checkout`
- Se dispara: `GA4 - Ecommerce - Begin Checkout`

✅ **Al completar compra**:
- Se dispara: `Custom Event - purchase`
- Se dispara: `GA4 - Ecommerce - Purchase`
- dataLayer contiene: `ecommerce.transaction_id`

### Verificar en el Tag Assistant:

Para cada etiqueta disparada, verifica:
1. **Tags Fired**: Muestra las etiquetas que se dispararon
2. **Variables**: Muestra los valores de las variables
3. **Data Layer**: Muestra el estado del dataLayer
4. **Errors**: No debe haber errores

---

## 📋 Checklist de Configuración

### Variables
- [ ] DL - Ecommerce Items
- [ ] DL - Ecommerce Value
- [ ] DL - Transaction ID
- [ ] Event (built-in)
- [ ] Page Path (built-in)
- [ ] Page Title (built-in)
- [ ] Page URL (built-in)

### Triggers
- [ ] Initialization - All Pages
- [ ] Custom Event - page_view
- [ ] Custom Event - view_item
- [ ] Custom Event - add_to_cart
- [ ] Custom Event - begin_checkout
- [ ] Custom Event - purchase

### Tags
- [ ] GA4 - Configuration
- [ ] GA4 - Page View
- [ ] GA4 - Ecommerce - View Item
- [ ] GA4 - Ecommerce - Add to Cart
- [ ] GA4 - Ecommerce - Begin Checkout
- [ ] GA4 - Ecommerce - Purchase

### Testing
- [ ] Preview mode activado
- [ ] Page views funcionando
- [ ] View item funcionando
- [ ] Add to cart funcionando
- [ ] Begin checkout funcionando
- [ ] Purchase funcionando
- [ ] No hay errores en Tag Assistant

### Publicación
- [ ] Todos los tests pasados
- [ ] Click en **Submit**
- [ ] Nombre de versión: "Ecommerce Tracking Setup"
- [ ] Descripción agregada
- [ ] Click en **Publish**

---

## 🚀 Publicar Cambios

Una vez que todo esté configurado y testeado:

1. Click en **Submit** (arriba a la derecha)
2. Agrega información de la versión:
   ```
   Version Name: Ecommerce Tracking v1.0
   Version Description: 
   - Configuración inicial de GA4
   - Eventos de ecommerce (view_item, add_to_cart, begin_checkout, purchase)
   - Variables del dataLayer
   - Triggers personalizados
   ```
3. Click en **Publish**

---

## 🎯 Etiquetas Adicionales Recomendadas

### Facebook Pixel (Opcional)

#### Tag: Facebook Pixel - Base Code
```
Nombre: Facebook Pixel - Base Code
Tipo: Custom HTML
HTML:
```
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
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
```
**Trigger**: All Pages

#### Tag: Facebook Pixel - Add to Cart
```
Nombre: Facebook Pixel - Add to Cart
Tipo: Custom HTML
HTML:
```
```html
<script>
fbq('track', 'AddToCart', {
  content_ids: ['{{DL - Item ID}}'],
  content_name: '{{DL - Item Name}}',
  value: {{DL - Ecommerce Value}},
  currency: 'USD'
});
</script>
```
**Trigger**: Custom Event - add_to_cart

#### Tag: Facebook Pixel - Purchase
```
Nombre: Facebook Pixel - Purchase
Tipo: Custom HTML
HTML:
```
```html
<script>
fbq('track', 'Purchase', {
  value: {{DL - Ecommerce Value}},
  currency: 'USD',
  transaction_id: '{{DL - Transaction ID}}'
});
</script>
```
**Trigger**: Custom Event - purchase

---

## 📊 Verificar en Google Analytics

Después de publicar:

1. Ve a Google Analytics 4
2. **Reports** → **Realtime**
3. Navega por tu sitio
4. En Realtime deberías ver:
   - Event count por evento
   - page_view, view_item, add_to_cart, etc.

### Reportes de Ecommerce

1. **Reports** → **Monetization**
2. **Ecommerce purchases**: Verás las compras
3. **Item views**: Verás productos vistos
4. **Add to carts**: Verás items agregados al carrito

---

## 🔍 Debug en Producción

### Verificar DataLayer en la Consola

Abre DevTools en tu sitio en producción:

```javascript
// Ver todo el dataLayer
console.log(dataLayer);

// Ver eventos específicos
dataLayer.filter(item => item.event);

// Ver último evento
dataLayer[dataLayer.length - 1];

// Ver eventos de ecommerce
dataLayer.filter(item => item.ecommerce);
```

### Chrome Extension: Tag Assistant Legacy

1. Instala: [Tag Assistant Legacy](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Habilita "Recording"
3. Navega por tu sitio
4. Verifica que GTM esté funcionando

---

## ❓ Solución de Problemas

### Problema 1: Las etiquetas no se disparan

**Solución**:
1. Verifica que GTM esté cargando: busca `gtm.js` en Network
2. Verifica el dataLayer: `console.log(dataLayer)`
3. Usa Preview mode para debugging
4. Asegúrate que los triggers coincidan con los nombres de eventos

### Problema 2: Variables undefined

**Solución**:
1. Verifica el nombre de la variable en el dataLayer
2. Asegúrate que la variable exista cuando se dispara el trigger
3. Usa Data Layer Version 2 para variables de ecommerce

### Problema 3: Eventos duplicados

**Solución**:
1. Verifica que no haya múltiples tags con el mismo trigger
2. Asegúrate de no tener GA4 cargado directamente Y vía GTM
3. Revisa que no haya múltiples `dataLayer.push` del mismo evento

---

## 📚 Recursos Adicionales

- [Documentación de GTM](https://support.google.com/tagmanager)
- [GA4 Ecommerce Events](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)
- [GTM DataLayer](https://developers.google.com/tag-platform/tag-manager/datalayer)
- [GTM Academy](https://www.analyticsmania.com/google-tag-manager/)

---

¿Necesitas ayuda? Revisa la [guía completa de GTM](./GOOGLE_TAG_MANAGER.md) para más información.
