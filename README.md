## Nodemailer

El formulario de contacto de la url `/contact` utiliza Nodemailer para enviar mails al destinatario deseado utilizando un servidor SMPT configurable. Para configurar, hay que ubicar las siguientes variables de entorno locales en el archivo `.env.local`:

```bash
EMAIL_USER="MAIL-DE-GMAIL"
EMAIL_APP_KEY="GOOGLE-APPLICATION-PASSWORD"
SMTP_API="smtp-relay.gmail.com"
SMTP_SERVICE="gmail"
```
Las variables por defecto sirven para utilizar el servicio SMTP de Gmail.
Se debe que reemplazar `EMAIL_USER` con la dirección de email que se utiliza para enviar el correo. `EMAIL_APP_KEY` debe ser reemplazado por una contraseña generada desde la pestaña `Contraseñas de aplicaciones` ubicada en la sección "Seguridad" de la configuración de la cuenta de google (es necesario tener la autenticación en dos pasos activada para acceder a esta opción).