
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import {sendEmailVerification, getAuth, signInWithPopup, createUserWithEmailAndPassword,
     signInWithEmailAndPassword, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js'

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyC8P7PVfoNa3_C4cMY9M1__P3QUPITBxW0",
  authDomain: "polishop-7af73.firebaseapp.com",
  projectId: "polishop-7af73",
  storageBucket: "polishop-7af73.appspot.com",
  messagingSenderId: "277415342166",
  appId: "1:277415342166:web:f5573dab8bde1a26a28bf7",
  measurementId: "G-6W74S5TZ9R"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);




  
  
  
//   function validarCorreo(correo) {
//     var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
//     return expReg.test(correo);
//   }
  
  registro.addEventListener('click', (e) => {
    var email = document.getElementById('emailreg').value;
    var password = document.getElementById('passwordreg').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
      alert("Usuario creado");
  
      firebase.auth().currentUser.sendEmailVerification().then(() => {
        alert('Se ha enviado un correo de verificación');
      });
    }).catch(error => {
      const errorCode = error.code;
  
      if (errorCode == 'auth/email-in-use')
        alert('El correo ya está en uso');
      if (errorCode == 'auth/invalid-email')
        alert('El correo es inválido');
      if (errorCode == 'auth/weak-password')
        alert('La contraseña debe tener al menos 6 caracteres');
    });
  
    var esValido = validarCorreo(email);
    if (esValido) {
      alert('Formulario válido!');
  
      db.collection("usuario").add({
        nombre: document.getElementById("name").value,
        apellido: document.getElementById("last").value,
        correo: document.getElementById("email").value,
        fecha_nac: document.getElementById("date").value,
        fecha_creacion: firebase.firestore.FieldValue.serverTimestamp()
      })
        .then((docRef) => {
          alert("Agregado correctamente!");
          window.location.href = 'shop.html';
        })
        .catch((error) => {
          alert("Error en el registro");
        });
    } else {
      alert('Formulario inválido :(');
    }
  });
  





