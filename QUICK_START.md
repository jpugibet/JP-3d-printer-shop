# 🚀 Guía Rápida de Desarrollo - JP 3D Printer Shop

## 📍 Problema Común: "Http failure response for http://localhost:3000"

Este error ocurre cuando el frontend intenta conectarse al backend local que **NO está corriendo**.

---

## ✅ Soluciones

### **Opción 1: Desarrollo Local Completo** ⚡ (Recomendado)

Corre tanto el frontend como el backend localmente:

```bash
# Terminal 1 - Backend
cd server
npm run start:dev

# Terminal 2 - Frontend
cd ..
npm start
```

**Configuración necesaria:**
- En `src/environments/environment.ts` → `apiUrl: 'http://localhost:3000'`
- Backend debe tener el `.env` configurado con `DATABASE_URL`

---

### **Opción 2: Frontend Local + Backend en Railway** 🚂

Útil si no quieres correr el backend localmente:

**1. Actualiza `src/environments/environment.ts`:**
```typescript
export const environment = {
    production: false,
    apiUrl: 'https://tu-app.railway.app' // Tu URL real de Railway
};
```

**2. Configura CORS en Railway:**

Ve a Railway → Variables → Agrega:
```env
FRONTEND_URL=http://localhost:4200
```

**3. Inicia solo el frontend:**
```bash
npm start
```

---

### **Opción 3: Todo en Producción** 🌐

Deploy completo a Railway + Netlify:

**1. Asegúrate de tener las URLs correctas:**
- `src/environments/environment.prod.ts` → URL de Railway
- Railway Variables → `FRONTEND_URL` → URL de Netlify

**2. Deploy:**
```bash
git add .
git commit -m "Actualizar configuración"
git push
```

Netlify redesplegará automáticamente.

---

## 🔧 Comandos Útiles

### Backend (NestJS)
```bash
cd server

# Desarrollo (watch mode)
npm run start:dev

# Producción (compilado)
npm run build
npm run start:prod

# Reset DB
npm run reset:db
```

### Frontend (Angular)
```bash
# Desarrollo
npm start            # http://localhost:4200

# Build de producción
npm run build        # Genera dist/

# Build + watch
npm run watch
```

---

## 🐛 Troubleshooting

### Error: CORS Policy
**Causa:** Backend no tiene configurado el frontend en CORS  
**Solución:** Ve a Railway → Variables → `FRONTEND_URL=http://localhost:4200`

### Error: Database Connection (Railway)
**Causa:** `DATABASE_URL` no configurada en Railway  
**Solución:** Railway → Variables → Agrega `DATABASE_URL`

### Error: 404 en rutas de Angular
**Causa:** Configuración de redirects  
**Solución:** Verifica que `_redirects` esté en `dist/` después del build

### Error: Module not found
**Causa:** Dependencias no instaladas  
**Solución:**
```bash
npm install          # Frontend
cd server && npm install  # Backend
```

---

## 📚 Archivos de Configuración Importantes

| Archivo | Propósito |
|---------|-----------|
| `src/environments/environment.ts` | Config desarrollo (local) |
| `src/environments/environment.prod.ts` | Config producción (Netlify) |
| `server/.env` | Variables locales backend |
| `server/railway.json` | Config Railway |
| `netlify.toml` | Config Netlify |

---

## ✅ Checklist Pre-Deploy

- [ ] Backend desplegado en Railway
- [ ] DATABASE_URL configurada en Railway
- [ ] URL de Railway generada (Settings → Networking → Generate Domain)
- [ ] `environment.prod.ts` tiene la URL correcta de Railway
- [ ] Railway tiene `FRONTEND_URL` con la URL de Netlify
- [ ] Build local funciona: `npm run build`
- [ ] Código pusheado a GitHub

---

## 🔗 Links Rápidos

- [Railway Dashboard](https://railway.app)
- [Netlify Dashboard](https://app.netlify.com)
- [Neon Database](https://console.neon.tech)
- [Documentación Completa](./DEPLOYMENT.md)
