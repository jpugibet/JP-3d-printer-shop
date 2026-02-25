# Integración de Tidio Chat

Esta guía explica cómo configurar y usar Tidio Chat en tu aplicación.

## ¿Qué es Tidio?

[Tidio](https://www.tidio.com/) es una plataforma de comunicación para clientes que incluye:
- 💬 Chat en vivo
- 🤖 Chatbots de IA
- 📧 Email marketing
- 📱 Soporte multicanal

## Configuración Inicial

### 1. Crear cuenta en Tidio

1. Accede a [tidio.com](https://www.tidio.com/)
2. Regístrate o inicia sesión
3. Crea un nuevo proyecto
4. Obtén tu **Project ID** (ejemplo: `d1fe234c1234567890`)

### 2. Agregar ID a las variables de entorno

Actualiza tus archivos de entorno:

**src/environments/environment.ts** (desarrollo):
```typescript
export const environment = {
    // ... otras variables
    tidioProjectId: 'd1fe234c1234567890' // Reemplaza con tu Project ID real
};
```

**src/environments/environment.prod.ts** (producción):
```typescript
export const environment = {
    // ... otras variables
    tidioProjectId: 'd1fe234c1234567890' // Reemplaza con tu Project ID real
};
```

### 3. El servicio se inicializa automáticamente

El servicio `TidioService` se inicializa automáticamente al cargar la aplicación mediante `APP_INITIALIZER` en `app.config.ts`. El chat aparecerá en la esquina inferior derecha de tu aplicación.

## Uso del Servicio

Puedes inyectar `TidioService` en cualquier componente para interactuar con Tidio:

```typescript
import { TidioService } from './core/services/tidio.service';

export class MyComponent {
    constructor(private tidioService: TidioService) {}

    openChat() {
        this.tidioService.openChat();
    }

    closeChat() {
        this.tidioService.closeChat();
    }

    identifyVisitor() {
        this.tidioService.setVisitorInfo(
            'Juan Pérez',
            'juan@example.com'
        );
    }
}
```

## API Disponible

### `initialize(projectId: string)`
Inicializa Tidio con tu Project ID. Se llama automáticamente.

### `openChat()`
Abre el widget de chat.

```typescript
this.tidioService.openChat();
```

### `closeChat()`
Cierra el widget de chat.

```typescript
this.tidioService.closeChat();
```

### `showNotification(message: string)`
Muestra una notificación en el chat.

```typescript
this.tidioService.showNotification('¡Hola! ¿Necesitas ayuda?');
```

### `setCustomVariables(variables: object)`
Establece variables personalizadas para segmentación.

```typescript
this.tidioService.setCustomVariables({
    cartValue: 299.99,
    country: 'ES',
    premium: true
});
```

### `setVisitorId(visitorId: string)`
Establece un ID único para identificar al visitante.

```typescript
this.tidioService.setVisitorId('user_12345');
```

### `setVisitorInfo(name: string, email?: string)`
Establece la información del visitante.

```typescript
this.tidioService.setVisitorInfo('María López', 'maria@example.com');
```

### `isInitialized(): boolean`
Comprueba si Tidio está inicializado.

```typescript
if (this.tidioService.isInitialized()) {
    console.log('Tidio está listo');
}
```

## Casos de Uso Comunes

### Identificar usuario autenticado

En tu componente de login o después de autenticar:

```typescript
import { TidioService } from './core/services/tidio.service';

export class UserService {
    constructor(private tidioService: TidioService) {}

    loginUser(user: UserModel) {
        // ... lógica de autenticación
        
        this.tidioService.setVisitorInfo(
            user.name,
            user.email
        );
        this.tidioService.setCustomVariables({
            userId: user.id,
            isPremium: user.isPremium,
            joinDate: user.createdAt
        });
    }
}
```

### Personalizar chat por categoría de producto

```typescript
export class ProductDetailComponent {
    constructor(private tidioService: TidioService) {}

    loadProduct(productId: string) {
        // ... cargar producto
        
        this.tidioService.setCustomVariables({
            currentProduct: productId,
            category: this.product.category,
            price: this.product.price
        });
    }
}
```

### Abrir chat desde un botón de soporte

```typescript
export class HeaderComponent {
    constructor(private tidioService: TidioService) {}

    openSupport() {
        this.tidioService.openChat();
    }
}
```

## Configuración en Dashboard de Tidio

1. Accede a tu dashboard de Tidio
2. Ve a **Channels** → **Chat**
3. Personaliza:
   - Apariencia (colores, tamaño)
   - Mensajes de bienvenida
   - Configuración de chatbot de IA
   - Reglas de enrutamiento
   - Integración de emails
   - Información de soporte

## Características Recomendadas

### 1. Chatbot de Bienvenida
- Configura un chatbot para responder preguntas frecuentes
- Disponible 24/7 incluso sin agentes vivos

### 2. Segmentación
Usa `setCustomVariables()` para segmentar conversaciones:
- Por producto visto
- Por cantidad de carrito
- Por ubicación
- Por tipo de usuario (nuevo/recurrente)

### 3. Seguimiento de Conversaciones
Los emails de los clientes se guardan automáticamente para seguimiento posterior.

### 4. Notificaciones
Muestra notificaciones personalizadas en momentos clave:
- En páginas de productos
- Al abandonar el carrito
- Después de comprar

```typescript
export class CartComponent {
    constructor(private tidioService: TidioService) {}

    onAbandonment() {
        this.tidioService.showNotification(
            '¿Necesitas ayuda con tu compra? Habla con nosotros.'
        );
    }
}
```

## Troubleshooting

### Chat no aparece
1. Verifica que `tidioProjectId` está configurado en `environment.ts`
2. Abre la consola del navegador (F12) y busca mensajes de error
3. Comprueba que JavaScript está habilitado
4. Verifica el Project ID en tu dashboard de Tidio

### Variables personalizadas no se guardan
1. Asegúrate de llamar a `setCustomVariables()` antes de que Tidio se inicialice completamente
2. El objeto debe tener propiedades simples (strings, números, booleanos)

### Tidio no se inicializa en desarrollo
1. Verifica que `tidioProjectId` no es `'YOUR_TIDIO_PROJECT_ID'`
2. Abre la consola del navegador para ver mensajes de advertencia
3. Espera a que Angular termine de cargar la aplicación

## Recursos

- [Documentación oficial de Tidio](https://www.tidio.com/platform/)
- [Tidio Chat API](https://www.tidio.com/developers/)
- [Centro de ayuda](https://support.tidio.com/)

## Variables de Entorno Necesarias

```typescript
// Development
tidioProjectId: 'YOUR_TIDIO_PROJECT_ID'

// Production
tidioProjectId: 'YOUR_TIDIO_PROJECT_ID'
```

Ambas pueden ser diferentes si tienes proyectos separados para desarrollo y producción.
