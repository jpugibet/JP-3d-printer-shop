# Configuración de Relay para flujos de contacto

Este documento describe cómo conectar el formulario de contacto de la aplicación con un flujo en [Relay](https://www.relay.app/) utilizando un webhook.

## Objetivo

Cada vez que un usuario envíe un mensaje mediante el formulario de "Contacto",
el servidor guardará el registro en la base de datos y enviará una petición al webhook de Relay.
A partir de ese momento podrás diseñar un flujo en la plataforma de Relay que:

- Envíe un email a soporte
- Cree una notificación en Slack/Teams
- Añada el contacto a una hoja de cálculo / CRM
- Dispare cualquier otra automatización

## Pasos de configuración

1. **Crear un workflow en Relay**
   - Inicia sesión en https://www.relay.app/
   - Crea un nuevo flujo (por ejemplo, "Contacto from Web").
   - Añade un bloque del tipo **Incoming Webhook** al comienzo del flujo. Relay generará una URL única.
   - Copia esa URL, la necesitarás en el siguiente paso.

2. **Establecer la variable de entorno en el servidor**

   Añade la URL al archivo `.env` de la aplicación de backend (o en la configuración de tu hosting, p.ej. Railway):

   ```text
   RELAY_CONTACT_WEBHOOK_URL=https://hook.relay.app/…tu_id_de_webhook…
   ```

   Asegúrate de no subir este valor al repositorio; el archivo `.env` se mantiene privado.

3. **Verificar la integración en el código**

   - El servicio de contactos (`ContactsService`) ya incluye la lógica para enviar los datos al webhook.
   - Si el `RELAY_CONTACT_WEBHOOK_URL` no está definido, el envío se omite silenciosamente.
   - En caso de error, el servidor registra una advertencia en el log, pero el proceso principal continúa.

4. **Enviar un contacto de prueba**

   - Abre la página de contacto en el frontend.
   - Rellena el formulario y envía el mensaje.
   - Comprueba en la pestaña de `History` (o similar) de Relay que la solicitud ha llegado y que el flujo se dispara.

## Formato de la petición POST

El cuerpo JSON que se envía al webhook contiene los siguientes campos:

```json
{
  "id": "<uuid>",
  "name": "Nombre del visitante",
  "email": "visitor@example.com",
  "subject": "Asunto",
  "message": "Texto del mensaje",
  "createdAt": "2026-03-02T15:23:45.678Z"
}
```

Puedes usar estos valores en tu flujo Relay para personalizar emails o acciones.

## Observaciones

- La entrega al webhook es asíncrona; fallos no bloquean la creación del registro en la base de datos.
- Si más adelante necesitas enviar datos adicionales (por ejemplo, IP o locale), modifica
  el método `notifyRelay` en `contacts.service.ts`.

¡Con esto ya tienes un flujo personalizado de contactos conectado a Relay! Puedes
ampliarlo con cualquier otra acción soportada por la plataforma.
