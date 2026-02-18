# 🔄 Data Flow - Analytics Architecture

Diagrama y explicación del flujo de datos de analytics en JP 3D Printer Shop.

---

## 📊 Arquitectura General

```
┌─────────────────────────────────────────────────────────────────┐
│                    JP 3D Printer Shop                           │
│                  (Angular Application)                          │
│                                                                 │
│  User Actions → Angular Events → Analytics Service             │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      │ dataLayer.push(event)
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Google Tag Manager                             │
│                   (GTM-PKDJHJH8)                                │
│                                                                 │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐                │
│  │Variables │ →  │Triggers  │ →  │  Tags    │                │
│  └──────────┘    └──────────┘    └──────────┘                │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      │ Processes & Routes
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Google Analytics 4                             │
│                   (G-G8PPR7VQXD)                                │
│                                                                 │
│  ├─ Sessions Data                                              │
│  ├─ User Behavior                                              │
│  ├─ Ecommerce Events                                           │
│  └─ Conversion Tracking                                        │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      │ API Connection
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Looker Studio                                │
│              (lookerstudio.google.com)                          │
│                                                                 │
│  ├─ Dashboards                                                 │
│  ├─ Reports                                                    │
│  ├─ Visualizations                                             │
│  └─ Scheduled Emails                                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Eventos Rastreados

### 1. Navigation Events

```javascript
// Page View
User navigates → Analytics Service → GTM → GA4
Event: 'page_view'
Data: page_path, page_title
```

### 2. Product Events

```javascript
// View Item
User views product → trackViewItem() → GTM → GA4
Event: 'view_item'
Data: {
  ecommerce: {
    items: [{ item_id, item_name, price, category }]
  }
}

// Add to Cart
User clicks "Add to Cart" → trackAddToCart() → GTM → GA4
Event: 'add_to_cart'
Data: {
  ecommerce: {
    currency: 'USD',
    value: 999.00,
    items: [{ ... }]
  }
}
```

### 3. Checkout Events

```javascript
// Begin Checkout
User goes to checkout → trackBeginCheckout() → GTM → GA4
Event: 'begin_checkout'
Data: {
  ecommerce: {
    currency: 'USD',
    value: total,
    items: [cart items]
  }
}

// Purchase
Order completed → trackPurchase() → GTM → GA4
Event: 'purchase'
Data: {
  ecommerce: {
    transaction_id: 'ORDER_123',
    currency: 'USD',
    value: total,
    items: [purchased items]
  }
}
```

---

## 🔄 Data Processing Layers

### Layer 1: Application (Angular)

**Archivo**: `src/app/core/services/analytics.service.ts`

**Responsabilidad**:
- Detectar acciones del usuario
- Formatear datos según GA4 schema
- Enviar eventos al dataLayer

**Código**:
```typescript
trackViewItem(product: Product) {
  dataLayer.push({
    event: 'view_item',
    ecommerce: {
      items: [{
        item_id: product.id,
        item_name: product.name,
        price: product.price
      }]
    }
  });
}
```

### Layer 2: Google Tag Manager

**Container**: `GTM-PKDJHJH8`

**Responsabilidad**:
- Escuchar eventos del dataLayer
- Activar triggers correspondientes
- Ejecutar tags configurados
- Enriquecer datos si es necesario

**Componentes**:
- **Variables**: DL - Ecommerce Items, DL - Ecommerce Value, DL - Transaction ID
- **Triggers**: Custom Event (view_item, add_to_cart, begin_checkout, purchase)
- **Tags**: GA4 Configuration, GA4 Events

### Layer 3: Google Analytics 4

**Property**: `G-G8PPR7VQXD`

**Responsabilidad**:
- Recibir y almacenar eventos
- Procesar datos de usuarios y sesiones
- Calcular métricas automáticas
- Proveer API para consultas

**Datos Almacenados**:
- User demographics
- Session data
- Events timeline
- Ecommerce transactions
- Conversion funnels

### Layer 4: Looker Studio

**Responsabilidad**:
- Conectar con GA4 API
- Visualizar datos en dashboards
- Crear reportes personalizados
- Enviar reportes automáticos

**Capacidades**:
- Real-time data visualization
- Custom calculations
- Multiple data sources blending
- Interactive filters

---

## 📈 Métricas Calculadas

### En GA4 (Automático)

```javascript
// Sessions
Total unique sessions

// Users
Total unique users (by client_id)

// Engagement Rate
engaged_sessions / sessions

// Ecommerce Purchase Revenue
SUM(ecommerce.value) WHERE event = 'purchase'

// Conversion Rate
transactions / sessions
```

### En Looker Studio (Custom)

```javascript
// Cart Abandonment Rate
1 - (begin_checkout_count / add_to_cart_count)

// Revenue per Session
Ecommerce purchase revenue / Sessions

// Average Order Value (AOV)
Ecommerce purchase revenue / Transactions

// Product Conversion Rate
Items purchased / Item views
```

---

## 🕐 Data Latency

### Real-time (< 60 seconds)
- GA4 Realtime Reports
- GTM Preview Mode

### Processing (24-48 hours)
- GA4 Standard Reports
- Looker Studio Dashboards
- Calculated Metrics

### Historical (Immediate access)
- All historical data in GA4
- Custom date ranges in Looker Studio

---

## 🔐 Data Privacy & Security

### GDPR Compliance
```javascript
// User consent check
if (userConsent.analytics) {
  analyticsService.initializeGTM();
}

// IP Anonymization
// Configured in GA4 settings
```

### Data Retention
- **GA4**: 14 months (configurable)
- **Looker Studio**: Depends on GA4 retention

### PII Protection
- No personal identifiable information in events
- Email addresses excluded from tracking
- User IDs anonymized

---

## 🧪 Testing Flow

### Development (localhost:4200)

```bash
1. Enable GTM Preview Mode
2. Navigate application
3. Check GTM Tag Assistant
4. Verify events in dataLayer
5. Check GA4 Realtime (debug mode)
```

### Staging/Production

```bash
1. Deploy to production
2. Wait 24-48 hours for data
3. Verify in GA4 Reports
4. Connect Looker Studio
5. Create dashboards
6. Share with team
```

---

## 📊 Dashboard Data Flow

### Step-by-Step

```
1. User Action
   ↓
2. Angular Event
   ↓
3. Analytics Service
   ↓
4. dataLayer.push()
   ↓
5. GTM Trigger fires
   ↓
6. GTM Tag sends to GA4
   ↓
7. GA4 processes & stores
   ↓
8. Looker Studio fetches via API
   ↓
9. Dashboard updates
   ↓
10. User views report
```

### Example: Purchase Flow

```
User clicks "Complete Order"
   ↓
trackPurchase(order) called
   ↓
dataLayer.push({
  event: 'purchase',
  ecommerce: { ... }
})
   ↓
GTM: Custom Event 'purchase' trigger fires
   ↓
GTM: Tag "GA4 - Ecommerce - Purchase" executes
   ↓
GA4: Receives purchase event with transaction_id
   ↓
GA4: Processes revenue, items, conversion
   ↓
Looker Studio: Queries GA4 for purchase data
   ↓
Dashboard: Shows updated revenue, orders, AOV
```

---

## 🎯 Key Integration Points

### 1. Application → GTM

**File**: `src/environments/environment.ts`
```typescript
export const environment = {
  gtmId: 'GTM-PKDJHJH8'
};
```

**File**: `src/app/core/services/analytics.service.ts`
```typescript
initializeGTM() {
  window.dataLayer = window.dataLayer || [];
  // GTM script injection
}
```

### 2. GTM → GA4

**GTM Configuration Tag**:
```
Tag Type: GA4 Configuration
Measurement ID: G-G8PPR7VQXD
Trigger: Initialization - All Pages
```

### 3. GA4 → Looker Studio

**Connection**:
```
Data Source: Google Analytics 4
Property: G-G8PPR7VQXD
Authorization: OAuth 2.0
Refresh: Every 8-24 hours
```

---

## 📋 Checklist de Verificación

### ✅ Application Layer
- [ ] AnalyticsService implementado
- [ ] GTM script cargando correctamente
- [ ] dataLayer disponible en window
- [ ] Eventos de ecommerce implementados

### ✅ GTM Layer
- [ ] Container publicado
- [ ] Variables configuradas
- [ ] Triggers creados
- [ ] Tags funcionando
- [ ] Preview mode testeado

### ✅ GA4 Layer
- [ ] Property ID configurado
- [ ] Eventos llegando a Realtime
- [ ] Ecommerce data visible
- [ ] No hay errores en debugger

### ✅ Looker Studio Layer
- [ ] Conectado con GA4
- [ ] Dashboards creados
- [ ] Datos mostrándose correctamente
- [ ] Reportes configurados

---

## 🔍 Monitoring & Debugging

### Check Points

**1. Application Console**
```javascript
// Verify dataLayer
console.log(window.dataLayer);

// Last event
console.log(window.dataLayer[window.dataLayer.length - 1]);
```

**2. GTM Preview Mode**
- Events tab: Shows all events
- Variables tab: Shows variable values
- Errors tab: Shows any errors

**3. GA4 Realtime**
- Events in last 30 minutes
- Users currently active
- Active pages

**4. Looker Studio**
- Data source connection status
- Last refresh time
- Error messages if any

---

## 📚 Referencias

- [AnalyticsService Code](../src/app/core/services/analytics.service.ts)
- [GTM Setup Guide](./GTM_TAGS_SETUP.md)
- [Looker Studio Guide](./LOOKER_STUDIO.md)
- [Environment Config](../src/environments/environment.ts)

---

**Última actualización**: Febrero 18, 2026  
**Autor**: JP 3D Printer Shop Team
