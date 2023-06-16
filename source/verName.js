document.addEventListener("DOMContentLoaded", function() {
    ver(); // Llama a la función ver() cuando el contenido HTML se haya cargado
   
        // Resto del código
    
    
    function ver() {
        db.collection("usuario")
        .orderBy("fecha_creacion", "desc") // Ordenar por fecha de creación de manera descendente
        .limit(1) // Obtener solo 1 documento (el último agregado)
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // nombre en polishop
                document.getElementById("user_name").innerHTML = `Bienvenido ${doc.data().nombre} ${doc.data().apellido}`;
            console.log("se esta ejecutando correctamente")
            });
        });
    }
});