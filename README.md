# PerlaGurpo portfolio

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


## Estructura de directorios del proyecto

La carpeta `/app` contiene las páginas que Next renderiza en el frontend. La estructura de directorios de dicha carpeta determina las URLs de la siguiente manera:
- Cada carpeta dentro de `/app` se mapea a una URL singular según su nombre: `URLbase/nombreDeCarpeta`.
- Para visualizar una página, mínimamente hay que crear un archivo de js/jsx nombrado `page.js` dentro de la carpeta y en él escribir y exportar un componente de React que será renderizado. También se pueden agregar layouts para cada ruta creando páginas nomencladas como `layout.js` dentro de la misma carpeta (lo mismo puede ser realizado para páginas de carga y páginas de error -ver documentación de NextJS-).

La carpeta `/components` contiene los componentes de react que son llamados desde las páginas contenidas en `/app` para ser renderizados. Están organizados según categoría o páginas a las que están destinados.

Para correr la aplicación en local, ejecutar el comando `npm run dev`. Abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver el resultado.