function guardarTicket() {
    var usuarioRef = db.collection("usuario").doc("documento_usuario_id")
    .collection("ticket");

    usuarioRef.add({
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        desc: document.getElementById("desc").value,
        item: document.getElementById("item").value
    })
    .then((docRef) => {
        alert("Agregado correctamente!");
        // window.location.href = 'shop.html'; //shop
    })
    .catch((error) => {
        alert("Error en el registro");
    });
}


