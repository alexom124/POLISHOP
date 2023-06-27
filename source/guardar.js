

// function validarCorreo(correo) {
//     var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
//     var esValido = expReg.test(correo);
//     if (esValido) {
//       alert('Formulario Valido!');

//       db.collection("usuario").add({
//           nombre: document.getElementById("name").value,
//           apellido: document.getElementById("last").value,
//           correo: document.getElementById("email").value,
//           contraseña: document.getElementById("password").value,
//           fecha_nac: document.getElementById("date").value,
//           fecha_creacion: firebase.firestore.FieldValue.serverTimestamp() // Campo de fecha y hora de creación
//         })
//         .then((docRef) => {
//           alert("Agregado correctamente!");
//           window.location.href = 'userCheck.html';
//         })
//         .catch((error) => {
//           alert("Error en el registro");
//         });
//     } else {
//       alert('Formulario Invalido :(');
//     }
//   }

//   function validarFormulario() {
//     var name = document.getElementById('name').value;
//     var last = document.getElementById('last').value;
//     var password = document.getElementById('password').value;

//     // Validar que los campos de nombre, apellidos y contraseña no estén vacíos
//     if (name.trim() === '' || last.trim() === '' || password.trim() === '') {
//       alert('Por favor, completa todos los campos.');
//       return;
//     }

//     // Validar que el nombre y apellidos no contengan solo una letra o números
//     var regexNombre = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;
//     if (!regexNombre.test(name) || !regexNombre.test(last)) {
//       alert('El nombre y apellidos deben contener solo letras y espacios. No se permiten números ni caracteres especiales.');
//       return;
//     }

//     // Validar que la contraseña tenga al menos 6 caracteres
//     if (password.length < 6) {
//       alert('La contraseña debe tener al menos 6 caracteres.');
//       return;
//     }

//     // Validar el correo electrónico
//     var correo = document.getElementById('email').value;
//     validarCorreo(correo);

//     //Validar fecha de nacimiento este correcta

   
//     alert('validando');
//   }

//function validarCorreo(correo) {
//     var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
//     var esValido = expReg.test(correo);
//     if (esValido) {
//       alert('Formulario Valido!');

//       db.collection("usuario").add({
//           nombre: document.getElementById("name").value,
//           apellido: document.getElementById("last").value,
//           correo: document.getElementById("email").value,
//           contraseña: document.getElementById("password").value,
//           fecha_nac: document.getElementById("date").value,
//           fecha_creacion: firebase.firestore.FieldValue.serverTimestamp() // Campo de fecha y hora de creación
//         })
//         .then((docRef) => {
//           alert("Agregado correctamente!");
//           window.location.href = 'userCheck.html';
//         })
//         .catch((error) => {
//           alert("Error en el registro");
//         });
//     } else {
//       alert('Formulario Invalido :(');
//     }
//   }



function validarCorreo(correo) {
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(correo);
        if (esValido) {
          alert('Formulario Valido!');
    
          db.collection("usuario").add({
              nombre: document.getElementById("name").value,
              apellido: document.getElementById("last").value,
              correo: document.getElementById("email").value,
              contraseña: document.getElementById("password").value,
              fecha_nac: document.getElementById("date").value,
              fecha_creacion: firebase.firestore.FieldValue.serverTimestamp() // Campo de fecha y hora de creación
            })
            .then((docRef) => {
              alert("Agregado correctamente!");
              window.location.href = 'userCheck.html';
            })
            .catch((error) => {
              alert("Error en el registro");
            });
        } else {
          alert(' Correo Invalido! ejemplo@dominio.com');
        }
      }




function validarFormulario() {
    var name = document.getElementById('name').value;
    var last = document.getElementById('last').value;
    var password = document.getElementById('password').value;
    var dateOfBirth = document.getElementById('date').value;
  
    // Validar que los campos de nombre, apellidos, contraseña y fecha de nacimiento no estén vacíos
    if (name.trim() === '' || last.trim() === '' || password.trim() === '' || dateOfBirth.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Validar que el nombre y apellidos no contengan solo una letra o números
    var regexNombre = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;
    if (!regexNombre.test(name) || !regexNombre.test(last)) {
      alert('El nombre y apellidos deben contener solo letras y espacios. No se permiten números ni caracteres especiales.');
      return;
    }
  
    // Validar que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
  
    // Validar la fecha de nacimiento
    var currentDate = new Date();
    var selectedDate = new Date(dateOfBirth);
    var ageInYears = currentDate.getFullYear() - selectedDate.getFullYear();
  
    if (ageInYears < 10) {
      alert('Debes tener al menos 10 años de edad.');
      return;
    }
  
    // Resto de la lógica de validación y envío del formulario
    var correo = document.getElementById('email').value;
    validarCorreo(correo);
  
   
  }