const express = require('express');
const cors = require('cors');

const app = express();

// Configurar los encabezados CORS
app.use(cors());

// Resto de la configuración de tu servidor

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});


function enviarCorreo() {
    // Datos del correo electrónico
    const data = {
      to: 'alexom124@hotmail.com',
      from: 'alexom1245@gmail.com',
      subject: 'Prueba de correo electrónico',
      text: 'Este es un correo de prueba enviado desde SendGrid.'
    };

    // Realizar la solicitud HTTP utilizando Fetch
    fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ personalizations: [{ to: [{ email: data.to }] }], from: { email: data.from }, subject: data.subject, content: [{ type: 'text/plain', value: data.text }] })
    })
    .then(response => {
      if (response.ok) {
        alert('Correo enviado con éxito');
      } else {
        alert('Error al enviar el correo');
      }
    })
    .catch(error => {
      alert('Error al enviar el correo: ' + error);
    });
  }






  