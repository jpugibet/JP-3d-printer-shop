# 🚀 Looker Studio - Quick Start Guide

Guía rápida para empezar con Looker Studio en menos de 15 minutos.

---

## ✅ Pre-requisitos

- [ ] GA4 configurado y recibiendo datos
- [ ] GTM con eventos de ecommerce funcionando
- [ ] Al menos 1 semana de datos en GA4

---

## 📊 Crear Tu Primer Dashboard (5 minutos)

### 1. Acceder y Conectar

```
1. Ve a: https://lookerstudio.google.com/
2. Click en: Create → Report
3. Busca: Google Analytics
4. Selecciona: Google Analytics 4
5. Authorize y selecciona tu propiedad: G-G8PPR7VQXD
6. Click: ADD TO REPORT
```

### 2. Agregar KPIs Principales

**Revenue Scorecard**:
```
1. Add a chart → Scorecard
2. Metric: Ecommerce purchase revenue
3. Style: Compact numbers ON
```

**Repite para**: Orders, AOV (Average purchase revenue), Conversion Rate (Ecommerce purchase rate)

### 3. Agregar Gráfico de Tendencia

```
1. Add a chart → Time series
2. Date Range Dimension: Date
3. Metric: Ecommerce purchase revenue
4. Colócalo debajo de los scorecards
```

### 4. Agregar Top Products

```
1. Add a chart → Table
2. Dimension: Item name
3. Metrics: Item revenue, Items purchased quantity
4. Sort by: Item revenue (descending)
5. Rows per page: 10
```

### 5. Guardar y Compartir

```
1. File → Save
2. Nombre: "JP 3D Shop - Ecommerce Dashboard"
3. Click Share para compartir con tu equipo
```

---

## 🎯 Métricas Esenciales

### Revenue Metrics
| Métrica GA4 | Descripción |
|------------|-------------|
| `Ecommerce purchase revenue` | Ingresos totales |
| `Transactions` | Número de compras |
| `Average purchase revenue` | Valor promedio del pedido |
| `Ecommerce purchase rate` | Tasa de conversión |

### Product Metrics
| Métrica GA4 | Descripción |
|------------|-------------|
| `Item views` | Veces que se vio el producto |
| `Items added to cart` | Productos agregados al carrito |
| `Items purchased` | Productos comprados |
| `Item revenue` | Ingresos por producto |

### Traffic Metrics
| Métrica GA4 | Descripción |
|------------|-------------|
| `Sessions` | Sesiones totales |
| `Total users` | Usuarios únicos |
| `New users` | Usuarios nuevos |
| `Average engagement time` | Tiempo promedio |

---

## 🧮 Campos Calculados Útiles

### Cart Abandonment Rate

```
Nombre: Cart Abandonment Rate
Fórmula: 1 - (Event Count (begin_checkout) / Event Count (add_to_cart))
Tipo: Percent
```

### Revenue per Session

```
Nombre: Revenue per Session
Fórmula: Ecommerce purchase revenue / Sessions
Tipo: Currency (USD)
```

### Add to Cart Rate

```
Nombre: Add to Cart Rate
Fórmula: Event Count (add_to_cart) / Event Count (view_item)
Tipo: Percent
```

---

## 🎨 5 Dashboards Recomendados

### 1. Executive Summary
**Para**: CEO, Managers  
**Métricas**: Revenue, Orders, AOV, Conversion, Revenue Trend  
**Actualización**: Diaria

### 2. Ecommerce Performance
**Para**: Ecommerce Manager  
**Métricas**: Funnel, Product Performance, Category Analysis  
**Actualización**: Diaria

### 3. Marketing Performance
**Para**: Marketing Team  
**Métricas**: Traffic by Channel, Campaign Performance, ROI  
**Actualización**: Diaria

### 4. Product Analytics
**Para**: Product Manager  
**Métricas**: Product Views, Conversion by Product, Inventory  
**Actualización**: Semanal

### 5. Customer Behavior
**Para**: UX/UI Team  
**Métricas**: User Journey, Page Flow, Engagement Time  
**Actualización**: Semanal

---

## 📨 Reportes Automáticos

### Configurar Email Diario

```
1. En tu dashboard: ⋮ → Schedule email delivery
2. Recipients: team@example.com
3. Frequency: Daily
4. Time: 9:00 AM
5. Format: PDF
6. Click: Schedule
```

---

## 🧪 Verificar Que Funciona

### Checklist

- [ ] Scorecards muestran datos numéricos
- [ ] Time series show revenue trend
- [ ] Tabla de productos muestra al menos 5 productos
- [ ] Date range control funciona
- [ ] No hay errores de "No data available"

### Si No Hay Datos

1. Verifica que GA4 tenga datos: https://analytics.google.com/
2. Ve a Realtime en GA4 y navega por tu sitio
3. Espera 24-48 horas para que los datos estén disponibles en Looker Studio
4. Verifica la fecha range (últimos 30 días)

---

## 🔗 Links Rápidos

- **Looker Studio**: https://lookerstudio.google.com/
- **Guía Completa**: [LOOKER_STUDIO.md](./LOOKER_STUDIO.md)
- **GA4 Setup**: [GOOGLE_ANALYTICS.md](./GOOGLE_ANALYTICS.md)
- **GTM Tags**: [GTM_TAGS_SETUP.md](./GTM_TAGS_SETUP.md)

---

## ⚡ Comandos Rápidos

### Keyboard Shortcuts

| Atajo | Acción |
|-------|--------|
| `Ctrl + C` | Copiar componente |
| `Ctrl + V` | Pegar componente |
| `Ctrl + D` | Duplicar componente |
| `Ctrl + Z` | Deshacer |
| `Ctrl + Y` | Rehacer |
| `Delete` | Eliminar selección |

---

## 💡 Tips Rápidos

✅ **Do's**:
- Usa scorecards para KPIs principales arriba
- Mantén colores consistentes
- Agrega comparaciones de período
- Usa filtros para interactividad
- Comparte dashboards en modo "View Only"

❌ **Don'ts**:
- No sobrecargues con muchos gráficos
- Evita más de 5-6 colores diferentes
- No uses gráficos 3D
- No pongas todo en una página

---

## 🆘 Solución de Problemas

### "No data available"
→ Espera 24-48 horas o verifica que GA4 tenga datos

### "Invalid dimension or metric"
→ Verifica que uses nombres exactos de GA4

### "Data source connection error"
→ Re-autoriza la conexión con GA4

### "Slow loading"
→ Reduce el date range o número de métricas

---

## 📈 Próximos Pasos

1. ✅ Crea tu primer dashboard
2. ⬜ Lee la [guía completa](./LOOKER_STUDIO.md) para dashboards avanzados
3. ⬜ Crea campos calculados personalizados
4. ⬜ Configura reportes automáticos
5. ⬜ Comparte con tu equipo

---

**Tiempo estimado**: 15 minutos  
**Dificultad**: Principiante  
**Resultado**: Dashboard funcional de ecommerce

¿Listo? ¡Empieza ahora! 🚀 https://lookerstudio.google.com/
