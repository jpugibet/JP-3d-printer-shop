# 📊 Looker Studio - Dashboards y Reportes

Guía completa para configurar **Looker Studio** (anteriormente Google Data Studio) y crear dashboards personalizados para analizar el rendimiento de tu tienda de impresoras 3D.

---

## 📋 Índice

1. [¿Qué es Looker Studio?](#qué-es-looker-studio)
2. [Conectar con Google Analytics 4](#conectar-con-google-analytics-4)
3. [Dashboards Recomendados](#dashboards-recomendados)
4. [Métricas Clave de Ecommerce](#métricas-clave-de-ecommerce)
5. [Plantillas de Reportes](#plantillas-de-reportes)
6. [Guía Paso a Paso](#guía-paso-a-paso)
7. [Mejores Prácticas](#mejores-prácticas)

---

## 🎯 ¿Qué es Looker Studio?

**Looker Studio** es una herramienta gratuita de Google para crear dashboards interactivos y reportes personalizados. Permite:

✅ **Visualización de datos**: Gráficos, tablas, scorecards  
✅ **Múltiples fuentes**: GA4, Google Ads, Search Console, BigQuery  
✅ **Interactividad**: Filtros, segmentos, date ranges  
✅ **Compartir**: Exportar y compartir reportes con tu equipo  
✅ **Tiempo Real**: Actualización automática de datos  

**URL**: https://lookerstudio.google.com/

---

## 🔌 Conectar con Google Analytics 4

### Paso 1: Acceder a Looker Studio

1. Ve a https://lookerstudio.google.com/
2. Inicia sesión con tu cuenta de Google (misma cuenta que GA4)
3. Click en **Create** → **Report**

### Paso 2: Conectar Fuente de Datos

1. En "Add data to report", busca: **Google Analytics**
2. Selecciona: **Google Analytics 4**
3. Click en **AUTHORIZE** para dar permisos
4. Selecciona tu cuenta: **JP 3D Printer Shop**
5. Selecciona tu propiedad: **JP 3D Printer Shop** (Property ID: G-G8PPR7VQXD)
6. Click en **ADD**
7. Click en **ADD TO REPORT**

### Paso 3: Verificar Conexión

Deberías ver un reporte en blanco con la conexión lista. En la parte derecha verás:
- **Data source**: Google Analytics 4 - JP 3D Printer Shop
- **Available fields**: Métricas y dimensiones disponibles

---

## 📊 Dashboards Recomendados

### 🎯 Dashboard 1: Overview General

**Propósito**: Vista general del rendimiento de la tienda

**Componentes**:

#### KPIs Principales (Scorecards)
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│   Sessions  │    Users    │  Page Views │  Avg Time   │
│   12,543    │    8,432    │   45,123    │   3:24 min  │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

**Métricas**:
- Sessions (Sesiones)
- Total Users (Usuarios totales)
- Views (Vistas de página)
- Average engagement time (Tiempo promedio)

#### Gráfico de Línea: Tráfico en el Tiempo
- **Dimensión**: Date (Fecha)
- **Métrica**: Sessions
- **Break Down**: Session source/medium

#### Tabla: Top 10 Páginas
- **Dimensión**: Page path
- **Métricas**: Page views, Avg session duration

---

### 🛒 Dashboard 2: Ecommerce Performance

**Propósito**: Análisis de ventas y conversión

#### Revenue Scorecards
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│   Revenue   │   Orders    │     AOV     │  Conv Rate  │
│  $45,890    │     123     │   $373      │    2.8%     │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

**Métricas**:
- **Ecommerce purchase revenue**: Ingresos totales
- **Transactions**: Número de compras
- **Average purchase revenue**: Valor promedio del pedido
- **Ecommerce purchase rate**: Tasa de conversión

#### Funnel de Conversión
```
┌───────────────────────────────────┐
│   Product Views     │    1,500    │ ████████████ 100%
│   Add to Cart       │      450    │ ████░░░░░░░░  30%
│   Begin Checkout    │      180    │ ██░░░░░░░░░░  12%
│   Purchase          │       42    │ █░░░░░░░░░░░   2.8%
└───────────────────────────────────┘
```

**Eventos a usar**:
- `view_item` (800-1000 events)
- `add_to_cart` (300-400 events)
- `begin_checkout` (100-150 events)
- `purchase` (20-30 events)

**Métricas calculadas**:
- Cart Abandonment Rate = 1 - (begin_checkout / add_to_cart)
- Checkout Abandonment = 1 - (purchase / begin_checkout)

#### Top Products por Revenue
**Tabla**:
- **Dimensión**: Item name
- **Métricas**: 
  - Item revenue
  - Items purchased quantity
  - Item views
  - Item view rate

---

### 📈 Dashboard 3: Marketing & Acquisition

**Propósito**: Análisis de fuentes de tráfico y campañas

#### Tráfico por Canal
**Gráfico de Pie**:
- **Dimensión**: Session default channel grouping
- **Métrica**: Sessions
- **Colores**: Organic Search (verde), Direct (azul), Social (morado), Paid (rojo)

#### Performance por Canal
**Tabla**:
| Channel | Sessions | Users | Revenue | Conv Rate |
|---------|----------|-------|---------|-----------|
| Organic Search | 5,234 | 3,456 | $18,900 | 3.2% |
| Direct | 3,890 | 2,123 | $12,450 | 2.5% |
| Social | 2,100 | 1,890 | $8,200 | 1.8% |
| Paid Search | 890 | 780 | $6,340 | 4.1% |

**Dimensiones y Métricas**:
- **Dimensión**: Session default channel grouping
- **Métricas**: 
  - Sessions
  - Total users
  - Ecommerce purchase revenue
  - Ecommerce purchase rate

---

### 🔍 Dashboard 4: Behavior & Product Analytics

**Propósito**: Análisis de comportamiento de usuarios y productos

#### Category Performance
**Gráfico de Barras**:
- **Dimensión**: Item category (FDM, SLA, Resin, Filament)
- **Métrica**: Item revenue
- **Ordenar por**: Item revenue descendente

#### Product Details Table
**Tabla detallada**:
| Product | Views | Add to Cart | Purchases | Revenue | Conversion |
|---------|-------|-------------|-----------|---------|------------|
| Prusa i3 MK3S+ | 450 | 89 | 12 | $11,988 | 2.7% |
| Creality Ender 3 V2 | 380 | 76 | 8 | $1,920 | 2.1% |
| Anycubic Photon Mono X | 290 | 45 | 6 | $3,594 | 2.1% |

**Configuración**:
- **Dimensión**: Item name
- **Métricas**: 
  - Event count (where Event name = view_item)
  - Event count (where Event name = add_to_cart)
  - Items purchased quantity
  - Item revenue
  - Add-to-cart rate (calculada)

---

### 👥 Dashboard 5: User Journey & Engagement

**Propósito**: Entender el recorrido del usuario

#### User Engagement
**Time Series (Gráfico de Área)**:
- **Dimensión**: Date
- **Métricas**:
  - Average engagement time
  - Engaged sessions
  - Engagement rate

#### Page Flow
**Tabla de flujo**:
| Landing Page | Sessions | Bounce Rate | Avg Pages/Session |
|--------------|----------|-------------|-------------------|
| /catalog | 5,890 | 32% | 4.2 |
| / (home) | 4,123 | 28% | 3.8 |
| /contact | 890 | 45% | 1.8 |

**Configuración**:
- **Dimensión**: Landing page
- **Métricas**:
  - Sessions
  - Bounce rate
  - Pages per session

---

## 📊 Métricas Clave de Ecommerce

### Revenue Metrics

| Métrica | Nombre en GA4 | Descripción |
|---------|--------------|-------------|
| **Ingresos Totales** | `Ecommerce purchase revenue` | Total de ventas |
| **Transacciones** | `Transactions` | Número de compras |
| **AOV** | `Average purchase revenue` | Valor promedio del pedido |
| **Revenue por Usuario** | `Average purchase revenue per user` | Ingresos/Usuario |

### Conversion Metrics

| Métrica | Nombre en GA4 | Descripción |
|---------|--------------|-------------|
| **Tasa de Conversión** | `Ecommerce purchase rate` | % de sesiones con compra |
| **Views to Purchase** | `Item purchase-to-view rate` | % productos vistos que se compran |
| **Add to Cart Rate** | Calculada | add_to_cart / view_item |
| **Checkout Rate** | Calculada | begin_checkout / add_to_cart |

### Product Metrics

| Métrica | Nombre en GA4 | Descripción |
|---------|--------------|-------------|
| **Item Views** | `Item views` | Veces que se vio el producto |
| **Items Added to Cart** | `Items added to cart` | Productos agregados |
| **Items Purchased** | `Items purchased` | Productos comprados |
| **Item Revenue** | `Item revenue` | Ingresos por producto |

### Traffic Metrics

| Métrica | Nombre en GA4 | Descripción |
|---------|--------------|-------------|
| **Sesiones** | `Sessions` | Total de sesiones |
| **Usuarios** | `Total users` | Usuarios únicos |
| **New Users** | `New users` | Usuarios nuevos |
| **Engagement Time** | `Average engagement time` | Tiempo promedio en sitio |

---

## 🎨 Guía Paso a Paso: Crear tu Primer Dashboard

### Dashboard: "Ecommerce Overview"

#### Paso 1: Crear Reporte

1. Ve a https://lookerstudio.google.com/
2. Click **Create** → **Report**
3. Conecta con GA4 (ya explicado arriba)
4. Nombre del reporte: "JP 3D Printer Shop - Ecommerce Overview"

#### Paso 2: Agregar Scorecards

**Scorecard 1: Revenue**
1. Click en **Add a chart** → **Scorecard**
2. Arrastra a la posición superior izquierda
3. En el panel derecho:
   - **Metric**: Ecommerce purchase revenue
   - **Comparison Type**: Previous period
   - **Comparison metric**: Ecommerce purchase revenue
4. **Style** tab:
   - **Compact numbers**: ON
   - **Font size**: Large
   - **Font color**: #1a73e8 (azul)

**Scorecard 2: Orders**
1. Duplica el scorecard anterior (Ctrl+D)
2. Mueve al lado del primero
3. **Metric**: Transactions

**Scorecard 3: AOV (Average Order Value)**
1. Duplica
2. **Metric**: Average purchase revenue

**Scorecard 4: Conversion Rate**
1. Duplica
2. **Metric**: Ecommerce purchase rate
3. **Style**: Format as percentage

#### Paso 3: Agregar Time Series (Gráfico de Línea)

1. **Add a chart** → **Time series chart**
2. Colócalo debajo de los scorecards
3. **Data** tab:
   - **Date Range Dimension**: Date
   - **Metric 1**: Ecommerce purchase revenue
   - **Metric 2**: Transactions (opcional)
4. **Style** tab:
   - **Line 1 color**: #1a73e8 (azul)
   - **Line 2 color**: #34a853 (verde)
   - **Show data labels**: OFF
   - **Add trendline**: ON (opcional)

#### Paso 4: Agregar Tabla de Top Products

1. **Add a chart** → **Table**
2. Colócalo debajo del time series
3. **Data** tab:
   - **Dimension**: Item name
   - **Metric 1**: Item revenue
   - **Metric 2**: Items purchased quantity
   - **Metric 3**: Item views
   - **Metric 4**: Item add-to-cart
4. **Sort**: Item revenue (Descending)
5. **Rows per page**: 10
6. **Style** tab:
   - **Table header**: Bold, background color #f1f3f4
   - **Alternating row colors**: ON

#### Paso 5: Agregar Funnel Chart (Manualmente)

Como Looker Studio no tiene funnel nativo, lo creamos con una tabla:

1. **Add a chart** → **Scorecard with Compact Numbers**
2. Crea 4 scorecards verticalmente:
   - **Product Views**: Event count (filter: event_name = view_item)
   - **Add to Cart**: Event count (filter: event_name = add_to_cart)
   - **Begin Checkout**: Event count (filter: event_name = begin_checkout)
   - **Purchases**: Transactions

3. Agrega **Text** boxes con los porcentajes de conversión entre pasos

#### Paso 6: Agregar Date Range Control

1. **Add a control** → **Date range control**
2. Colócalo en la parte superior
3. **Auto date range**: Last 30 days
4. **Enable comparison**: ON

#### Paso 7: Agregar Filtros Interactivos

**Filtro por Canal**:
1. **Add a control** → **Drop-down list**
2. **Control field**: Session default channel grouping
3. **Label**: "Select Channel"

**Filtro por Categoría de Producto**:
1. **Add a control** → **Drop-down list**
2. **Control field**: Item category
3. **Label**: "Product Category"

#### Paso 8: Personalizar Diseño

1. **Theme and layout** (panel derecho)
2. **Theme**: Selecciona "Business" o "Minimal"
3. **Navigation**: Add page navigation (si tienes múltiples páginas)
4. **Header**: 
   - Add text: "JP 3D Printer Shop - Analytics Dashboard"
   - Font: Roboto, size 24, bold

#### Paso 9: Guardar y Compartir

1. Click en **File** → **Save**
2. Para compartir:
   - Click en **Share**
   - **Add people**: Ingresa emails
   - **Permissions**: Can view / Can edit
   - Click **Send**

---

## 🧮 Métricas Calculadas (Calculated Fields)

### Crear Campos Calculados

1. En tu reporte, click en **Resource** → **Manage added data sources**
2. Click en **EDIT** junto a tu data source
3. Click en **ADD A FIELD**

### Ejemplos de Campos Calculados

#### 1. Cart Abandonment Rate
```
Name: Cart Abandonment Rate
Formula: 
1 - (Event Count (begin_checkout) / Event Count (add_to_cart))

Type: Percent
```

#### 2. Checkout to Purchase Rate
```
Name: Checkout Conversion Rate
Formula:
Transactions / Event Count (begin_checkout)

Type: Percent
```

#### 3. Revenue per Session
```
Name: Revenue per Session
Formula:
Ecommerce purchase revenue / Sessions

Type: Currency (USD)
```

#### 4. Add to Cart Rate
```
Name: Add to Cart Rate
Formula:
Event Count (add_to_cart) / Event Count (view_item)

Type: Percent
```

#### 5. Average Items per Order
```
Name: Avg Items per Order
Formula:
Items purchased quantity / Transactions

Type: Number (1 decimal)
```

#### 6. Product Conversion Rate
```
Name: Product Conversion Rate
Formula:
Items purchased quantity / Item views

Type: Percent
```

---

## 📱 Templates de Dashboards Listos

### Template 1: Executive Summary (Una Página)

**Layout**:
```
┌─────────────────────────────────────────────────────────┐
│  JP 3D Printer Shop - Executive Dashboard     [Date ▼] │
├────────────┬────────────┬────────────┬─────────────────┤
│  Revenue   │   Orders   │    AOV     │   Conv Rate     │
│  $45,890   │    123     │   $373     │     2.8%        │
│  ↑ 12.5%   │  ↑ 8.2%    │  ↑ 4.1%    │   ↑ 0.3%        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   📈 Revenue Trend (Last 30 Days)                      │
│                                                         │
├──────────────────────────┬──────────────────────────────┤
│                          │                              │
│  🛒 Sales by Category    │  📊 Traffic by Channel       │
│                          │                              │
├──────────────────────────┴──────────────────────────────┤
│                                                         │
│  📦 Top 10 Products by Revenue                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Template 2: Marketing Dashboard

**3 Páginas**:
1. **Acquisition**: Traffic sources, channels, campaigns
2. **Behavior**: User journey, page performance
3. **Conversion**: Funnel, goals, revenue

### Template 3: Product Analytics

**Métricas por Producto**:
- Performance individual de cada producto
- Comparación entre categorías
- Stock vs Sales correlation
- Price vs Conversion analysis

---

## 🎯 Mejores Prácticas

### 1. Diseño Efectivo

✅ **Do's**:
- Usa scorecards para KPIs principales en la parte superior
- Mantén colores consistentes (usa tu brand colors)
- Agrupa información relacionada
- Usa filtros para interactividad
- Agrega comparaciones de período (vs mes anterior)

❌ **Don'ts**:
- No sobrecargues con demasiados gráficos
- Evita usar más de 5-6 colores
- No uses 3D charts (dificultan la lectura)
- No pongas todo en una sola página

### 2. Performance

- Limita las métricas a las que realmente necesitas
- Usa date ranges razonables (últimos 30-90 días)
- Evita demasiados calculated fields complejos
- Considera crear extractos de datos para grandes volúmenes

### 3. Actualización de Datos

- GA4 en Looker Studio se actualiza cada 8-24 horas
- Para datos en tiempo real, usa la página Realtime de GA4
- Configura data freshness notifications

### 4. Compartir

- Crea versiones "View Only" para stakeholders
- Exporta reports a PDF para presentaciones
- Usa "Schedule email delivery" para reports automáticos

---

## 📨 Reportes Automáticos por Email

### Configurar Email Delivery

1. En tu reporte, click en **⋮** (tres puntos) → **Schedule email delivery**
2. **Recipients**: Agrega emails
3. **Frequency**: Daily / Weekly / Monthly
4. **Day & Time**: Selecciona cuándo enviar
5. **File type**: PDF / Link to report
6. **Message**: Agrega un mensaje personalizado
7. Click **Schedule**

**Ejemplo de Schedule**:
```
Subject: Weekly Ecommerce Report - JP 3D Printer Shop
Frequency: Weekly
Day: Monday
Time: 9:00 AM
Format: PDF (include data snapshot)
Recipients: team@jp3dprinters.com
```

---

## 🔄 Integración con Otras Fuentes

### Combinar Múltiples Fuentes

Looker Studio permite combinar datos de múltiples fuentes:

#### Google Search Console + GA4
- Tráfico orgánico + conversiones
- Keywords que generan revenue

#### Google Ads + GA4
- Costo de campañas + revenue
- ROI por campaña

#### BigQuery + GA4
- Análisis profundo de datos
- Machine learning predictions

**Pasos para Data Blending**:
1. **Resource** → **Manage blends**
2. Click **ADD A BLEND**
3. Selecciona las fuentes de datos
4. Define la **Join key** (dimensión común, ej: Date)
5. Selecciona las métricas de cada fuente
6. **Save Blend**

---

## 🎓 Recursos de Aprendizaje

### Tutoriales Oficiales
- [Looker Studio Learning Center](https://support.google.com/looker-studio)
- [GA4 + Looker Studio Guide](https://developers.google.com/analytics/devguides/reporting/data/v1)
- [Looker Studio Community Templates](https://lookerstudio.google.com/gallery)

### Templates Gratuitos
- [GA4 Ecommerce Template](https://lookerstudio.google.com/u/0/reporting/3816c0c0-f942-4c2a-8e08-bfc5fb27b7a2/page/p_o7zqe3xrxc)
- [Marketing Dashboard Template](https://analytics.google.com/analytics/gallery/#posts/search/%3F_.term%3Decommerce/)

### YouTube Channels
- **Measureschool**: Advanced Looker Studio tutorials
- **Analytics Mania**: GA4 + Looker Studio integration
- **Loves Data**: Beginner-friendly tutorials

---

## 🚀 Quick Start Checklist

- [ ] Conectar GA4 con Looker Studio
- [ ] Crear dashboard "Ecommerce Overview"
- [ ] Agregar scorecards de Revenue, Orders, AOV, Conversion Rate
- [ ] Crear gráfico de Revenue Trend
- [ ] Agregar tabla de Top Products
- [ ] Configurar date range control
- [ ] Agregar filtros interactivos
- [ ] Crear campos calculados (Cart Abandonment, etc.)
- [ ] Personalizar colores y estilos
- [ ] Compartir con equipo
- [ ] Configurar email reports semanales

---

## 📞 Soporte

¿Necesitas ayuda? 

- 📚 Consulta la [documentación de GTM](./GTM_TAGS_SETUP.md) para verificar que los eventos estén bien configurados
- 📊 Revisa [Google Analytics setup](./GOOGLE_ANALYTICS.md) para asegurarte que los datos fluyan correctamente
- 🔍 Visita [Search Console docs](./GOOGLE_SEARCH_CONSOLE.md) para integración SEO

---

## 🎨 Ejemplo Completo: Dashboard "Sales Performance"

### Descripción
Dashboard completo para monitorear ventas, productos y comportamiento de usuarios.

### Estructura (3 Páginas)

#### Página 1: Revenue Overview
- 4 Scorecards: Revenue, Orders, AOV, Conversion Rate
- Time Series: Revenue últimos 90 días
- Bar Chart: Revenue by Category
- Table: Top 10 Products

#### Página 2: Marketing Performance
- Pie Chart: Traffic by Channel
- Table: Channel Performance (Sessions, Users, Revenue, Conv Rate)
- Time Series: New vs Returning Users
- Geo Map: Users by Country

#### Página 3: Product Deep Dive
- Dropdown: Select Product
- Product Scorecards: Views, Add to Cart, Purchases, Revenue
- Funnel: View → Cart → Checkout → Purchase
- Time Series: Product Performance over Time

### Configuración JSON (Para importar)
```json
{
  "name": "JP 3D Printer Shop - Sales Performance",
  "dataSource": "GA4 - JP 3D Printer Shop",
  "dateRange": "Last 30 days",
  "pages": 3,
  "filters": ["Channel", "Category", "Product"],
  "metrics": ["Revenue", "Orders", "AOV", "Conversion"],
  "dimensions": ["Date", "Product", "Channel"]
}
```

---

¡Ahora estás listo para crear dashboards profesionales en Looker Studio! 🚀

Para más información sobre tracking de ecommerce, consulta:
- [GTM Tags Setup](./GTM_TAGS_SETUP.md)
- [Google Tag Manager Guide](./GOOGLE_TAG_MANAGER.md)
- [Google Analytics Setup](./GOOGLE_ANALYTICS.md)
