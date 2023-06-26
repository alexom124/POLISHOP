

function validarCorreo(correo){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expReg.test(correo);
    if(esValido==true){
        alert('Formulario Valido! ')

            db.collection("usuario").add({
                nombre: document.getElementById("name").value,
                apellido: document.getElementById("last").value,
                correo: document.getElementById("email").value,
                contraseña: document.getElementById("password").value,
                fecha_nac: document.getElementById("date").value,
                
                fecha_creacion: firebase.firestore.FieldValue.serverTimestamp() // Campo de fecha y hora de creación
                
            })
            .then((docRef) => {
                alert("Agregado correctamente!")
                window.location.href = 'userCheck.html';
            })
            .catch((error) => {
                alert("Error en el registro")
            });
        
    }
    else {
        alert('Formulario Invalido :(');
    }
}
  
// 
