// Aquí va el código JavaScript para validar el correo y nombre
function validarUsuario() {
    var correo = document.getElementById('email').value;
    var contraseña = document.getElementById('password').value;

    // Realizar consulta a la base de datos para verificar si el usuario existe
    db.collection("usuario")
        .where("correo", "==", correo)
        .where("contraseña", "==", contraseña)
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.size > 0) {
                // El usuario ya existe en la base de datos
                alert('Logueado exitosamente!');
                window.location.href = 'shop.html';
            } else {
                // El usuario no existe en la base de datos
                alert('Usuario inexistente');
            }
        })
        .catch((error) => {
            alert("Error en la consulta");
        });
}