import nodemailer from 'nodemailer';
/**
 * Crea un mail y lo envía a través de un Transport de NodeMailer usando el servicio SMTP configurado en las variables de entorno
 * Recibe una request con un body que debe contener la siguiente información:
 * name: String, mail: String, message: String
 * @param {request} request 
 * @returns 
 */
export async function POST(request) {
  const { name, email, message } = await request.json();
  const user = process.env.EMAIL_USER;
  const password = process.env.EMAIL_APP_KEY;
  /*
  */
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    host: process.env.SMTP_API,
    secure: true,
    auth: {
      user: user,
      pass: password
    }
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "grupo.perla.software@gmail.com",
      replyTo: email, //
      subject: `Nuevo formulario de contacto de ${name}`,
      html: `
        <p>Nombre: ${name} </p>
        <p>Email: ${email} </p>
        <p>Mensaje: ${message} </p>
      `
    });
    return new Response({ status: 200, statusText: "mensaje enviado"});
  } catch(error) {
    return new Response({ status: 400, statusText: "error"});
  } 
}