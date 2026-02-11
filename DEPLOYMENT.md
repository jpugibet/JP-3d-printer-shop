# Guía de Despliegue - JP 3D Printer Shop

## 📋 Pre-requisitos
- Cuenta en [Railway](https://railway.app/)
- Cuenta en [Netlify](https://www.netlify.com/)
- Repositorio Git (GitHub recomendado)

---

## 🚂 Paso 1: Desplegar Backend en Railway

### 1.1 Subir código a GitHub
```bash
git add .
git commit -m "Preparar para despliegue"
git push origin main
```

### 1.2 Conectar con Railway
1. Ve a [railway.app](https://railway.app/) e inicia sesión
2. Click en "New Project"
3. Selecciona "Deploy from GitHub repo"
4. Autoriza Railway y selecciona tu repositorio
5. Selecciona la carpeta **server** (o configura Root Directory: `server`)

### 1.3 Configurar Variables de Entorno en Railway
En el dashboard de Railway, ve a **Variables** y agrega:

```env
DATABASE_URL=postgresql://neondb_owner:npg_qM1YyUhpNEF0@ep-odd-rice-aecmgar6-pooler.c-2.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://tu-app.netlify.app
```

**⚠️ Importante:** Actualiza `FRONTEND_URL` después de desplegar el frontend en Netlify.

### 1.4 Configurar Start Command
En Railway, asegúrate que el comando de inicio sea:
```
npm run start:prod
```

### 1.5 Obtener la URL del Backend
Después del despliegue, Railway te dará una URL como:
```
https://jp-3d-printer-shop-production.up.railway.app
```
**Guarda esta URL - la necesitarás para el frontend.**

---

## 🌐 Paso 2: Desplegar Frontend en Netlify

### 2.1 Actualizar Environment Variables
Edita `src/environments/environment.prod.ts`:
```typescript
export const environment = {
    production: true,
    apiUrl: 'https://tu-backend-railway.up.railway.app'
};
```

### 2.2 Hacer Commit de los Cambios
```bash
git add src/environments/environment.prod.ts
git commit -m "Actualizar URL del backend para producción"
git push origin main
```

### 2.3 Conectar con Netlify
1. Ve a [netlify.com](https://www.netlify.com/) e inicia sesión
2. Click en "Add new site" → "Import an existing project"
3. Selecciona GitHub y autoriza Netlify
4. Selecciona tu repositorio `JP-3d-printer-shop`

### 2.4 Configurar Build Settings
Netlify debería detectar automáticamente la configuración desde `netlify.toml`:
- **Build command:** `npm run build -- --configuration production`
- **Publish directory:** `dist/jp-3d-printer-shop/browser`

Si no lo detecta, agrégalo manualmente.

### 2.5 Deploy
Click en "Deploy site" y espera a que termine el build.

---

## 🔄 Paso 3: Actualizar CORS en Backend

### 3.1 Obtener URL de Netlify
Después del despliegue, Netlify te dará una URL como:
```
https://jp-3d-printer-shop.netlify.app
```

### 3.2 Actualizar Variable en Railway
1. Regresa a Railway
2. Ve a Variables
3. Actualiza `FRONTEND_URL` con tu URL de Netlify:
```
FRONTEND_URL=https://jp-3d-printer-shop.netlify.app
```
4. Railway redesplegará automáticamente

---

## ✅ Verificación Final

### Probar el Backend
```bash
curl https://tu-backend-railway.up.railway.app
# Deberías ver "Hello World!" o la respuesta de tu API
```

### Probar el Frontend
1. Abre tu URL de Netlify en el navegador
2. Navega por la aplicación
3. Verifica que los productos se carguen correctamente

---

## 🐛 Solución de Problemas

### Error: CORS
- Verifica que `FRONTEND_URL` en Railway coincida con tu URL de Netlify
- Asegúrate de incluir `https://` sin barra al final

### Error: Database Connection
- Verifica que `DATABASE_URL` esté correctamente configurada en Railway
- Asegúrate de que Neon esté activo (no en modo sleep)

### Error: 404 en Rutas de Angular
- Verifica que el archivo `_redirects` esté en el build
- Revisa que `netlify.toml` tenga la configuración de redirects

### Build Fails
- Verifica que todas las dependencias estén en `package.json`
- Revisa los logs de build en Netlify/Railway para errores específicos

---

## 🔐 Seguridad

### Variables de Entorno Sensibles
**NUNCA** hagas commit de:
- `.env` files
- Contraseñas de base de datos
- API keys

### Recomendaciones
- Usa diferentes bases de datos para dev/prod
- Rota las credenciales regularmente
- Habilita autenticación en tus endpoints cuando sea necesario

---

## 📚 Recursos Adicionales
- [Documentación de Railway](https://docs.railway.app/)
- [Documentación de Netlify](https://docs.netlify.com/)
- [Neon Database](https://neon.tech/docs)

---

## 🎉 ¡Listo!
Tu aplicación JP 3D Printer Shop ahora está desplegada y disponible públicamente.
