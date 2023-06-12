document.addEventListener("DOMContentLoaded", function() {
    ver(); // Llama a la función ver() cuando el contenido HTML se haya cargado

    function ver() {
        db.collection("usuario").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                document.getElementById("prim_name").innerHTML = `${doc.data().nombre}`;
                document.getElementById("prim_last").innerHTML = `${doc.data().apellido}`;
                document.getElementById("prim_email").innerHTML = `${doc.data().correo}`;
                document.getElementById("prim_date").innerHTML = `${doc.data().fecha_nac}`;
                
                // nombre en polishop
                document.getElementById("user_name").innerHTML = `Bienvenido ${doc.data().nombre} ${doc.data().apellido}`;
            console.log("se esta ejecutando correctamente")
            });
        });
    }
});
