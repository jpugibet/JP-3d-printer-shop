# 🚀 Despliegue Rápido

## Netlify (Frontend) + Railway (Backend)

### 📦 Archivos de Configuración Creados:
- ✅ `netlify.toml` - Configuración de Netlify
- ✅ `server/railway.json` - Configuración de Railway
- ✅ `server/Procfile` - Comando de inicio
- ✅ `src/_redirects` - Redirecciones para Angular
- ✅ `server/.env` - Variables de entorno (NO SUBIR A GIT)

### ⚡ Despliegue en 3 Pasos:

#### 1️⃣ Subir a GitHub
```bash
git add .
git commit -m "Configuración para despliegue"
git push origin main
```

#### 2️⃣ Railway (Backend)
1. Ve a https://railway.app
2. New Project → Deploy from GitHub
3. Selecciona tu repo, carpeta: `server`
4. Agrega variables de entorno:
   - `DATABASE_URL` (ya está en server/.env)
   - `PORT=3000`
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://tu-app.netlify.app` (actualizar después)
5. Copia la URL de Railway

#### 3️⃣ Netlify (Frontend)
1. Actualiza `src/environments/environment.prod.ts`:
   ```typescript
   apiUrl: 'https://tu-railway-url.up.railway.app'
   ```
2. Commit y push
3. Ve a https://netlify.com
4. New site from Git → GitHub
5. Build settings: Auto-detectado desde netlify.toml
6. Deploy!
7. Copia URL de Netlify y actualiza `FRONTEND_URL` en Railway

### 📖 Documentación Completa
Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas y solución de problemas.

---

## 🔗 URLs Importantes
- **Frontend (Netlify):** (actualizar después del despliegue)
- **Backend (Railway):** (actualizar después del despliegue)
- **Database (Neon):** postgresql://neondb_owner:***@ep-odd-rice-aecmgar6-pooler.c-2.us-east-2.aws.neon.tech/neondb
