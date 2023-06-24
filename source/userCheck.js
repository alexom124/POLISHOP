// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js">';
import {sendEmailVerification, getAuth, signInWithPopup, createUserWithEmailAndPassword,
     signInWithEmailAndPassword, 
    onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js'

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

const app =initializeApp(firebaseConfig)
const auth= getAuth(app);

login.addEventListener('click', (e)=> {
    var email= document.getElementById('emaillog').value;
    var password= document.getElementById('passwordlog').value;

    signInWithEmailAndPassword (auth, email, password).then(cred => {
        alert ("usuario logueado");
        console.log(cred.user);
    }).catch(error => {
        const errorCode= error.code;

        if(errorCode == 'auth/invalid-email')
        alert('El correo no es valido');
        else if(errorCode == 'auth/user-disable')
        alert('usuario desabilitado');
        else if(errorCode == 'auth/user-not-found')
        alert('usuario no encontrado');
        else if(errorCode == 'auth/wrong-password')
        alert('contraseña incorrecta');

    });

});

cerrar.addEventListener('click', (e)=> {
    auth.signOut().then(() => {
        alert('Sesion cerrada');
    }).catch((error) => {
        alert('error al cerrar la sesion');
    })
});

auth.onAuthStateChanged(user=> {
    if(user){
        console.log("usuario activo");
        var email = user.emailVerified;
        if(email) {
            window.open("https.google.com/")


        }else {
            auth.signOut();
        }
    }else {
        console.log("Usuario Inactivo ")
    }
});
