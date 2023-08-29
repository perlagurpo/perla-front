import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();
  const user = process.env.EMAIL_USER;
  const password = process.env.EMAIL_APP_KEY;
  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp-relay.gmail.com",
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