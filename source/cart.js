
let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping-cart")

console.log(shopItemsData);


let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation =()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
    
};

calculation();

let generateCartItems = () => {
    if(basket.length !==0){
       return (shoppingCart.innerHTML = basket.map((x) => {
        console.log(x);
        let { id , item } = x;
        let search= shopItemsData.find((y)=>y.id === id) || [];
        let {img,name, price} = search
        return `
        <div class="cart-item">
        <img width="100" src=${img} alt="" />
        <div class="details">

        <div class="title-price-x">
            <h4 class="title-price">
                <p> ${name} </p>
                <p class="cart-item-price">$ ${price}</p>
            </h4>
            <i onClick="removeItem(${id})" class="bi bi-x-lg"></i>
        </div>

        <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>                  
                <div id=${id} class="quantity"> ${item}
               
                </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
               </div>
        <h3>$ ${item * search.price} </h3>
        </div>
        </div> 
        `;
        
       }).join(""));
    }
    else{
        shoppingCart.innerHTML = ``;
        label.innerHTML= `
        <h2>Carrito Vacio<h2>
        <a href="shop.html">
            <button class="homeBtn">Regresar </button>
        </a>
        `;
    }

};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    if (search.item >= 10) {
      alert('No puedes agregar más de 10 artículos.');
      return;
    }

    search.item += 1;
  }
  localStorage.setItem('data', JSON.stringify(basket));

  generateCartItems();
  update(selectedItem.id);
};


let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined) return
    else if(search.item === 0) return;
    else{
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x)=>x.item !==0);
   generateCartItems();
   

    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id)=>{
    let search=basket.find((x)=>x.id=== id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();

};

let removeItem = (id)=> {
    let selectedItem = id
    // console.log(selectedItem);
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateCartItems();
    TotalAmount();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
    
};

let clearCart = () => {
    basket = []
        generateCartItems();
        calculation();
        localStorage.setItem("data", JSON.stringify(basket));
    
};



function genPDF() {
    var doc = new jsPDF();
  
    // Cálculo del total a pagar
    var totalAPagar = basket.reduce((total, x) => {
      var { id, item } = x;
      var search = shopItemsData.find((y) => y.id === id) || {};
      var { price } = search;
      var productTotal = item * price;
      return total + productTotal;
    }, 0);
  
    // Cálculo de los datos del carrito
    var cartData = basket.map((x) => {
      var { id, item } = x;
      var search = shopItemsData.find((y) => y.id === id) || {};
      var { name, price } = search;
      var productoTotal = item * price;
  
      return {
        idt: id,
        namet: name,
        pricet: price,
        itemt: item,
        productTotal: productoTotal,
      };
    });
  
    var cartDataText = cartData
      .map((data) => {
        return `Producto: ${data.namet}, Precio: $${data.pricet}, Cantidad: ${data.itemt}, Total: $${data.productTotal}`;
      })
      .join('\n \n');
  
    var totalAPagarText = `Total: $${totalAPagar}`;
  
    // Agregar los datos del carrito al PDF
    doc.text(15, 20, 'polishop');
    doc.text(60, 20, 'TICKET DE COMPRA');
    doc.text(20, 40, cartDataText);
    doc.text(140, 20, totalAPagarText);
  
    // Guardar el PDF
    doc.save('Ticket de compra.pdf');
  
    // Guardar los datos en la base de datos
    cartData.forEach((data) => {
      guardarTicket2(data);
    });

    window.location.href = 'paypal.html';
   
  }




  

let TotalAmount = ()=> {
    if(basket.length !==0) {
        let amount = basket.map((x)=>{
            let {item, id} = x;
            let search= shopItemsData.find((y)=>y.id === id) || [];
            return item * search.price;
        }).reduce((x,y)=>x+y,0);
        // console.log(amount);
        label.innerHTML = `
        <h2>Cuenta Total : $ ${amount}</h2>
        <button onClick="genPDF()" class="checkout">Generar Ticket</button>
        <button onClick="clearCart()" class="removeAll">Limpiar carrito</button>

        `;
    }
    else return;
};

TotalAmount();




function guardarTicket2(data) {
    //! Datos almacenados
    var { idt, namet, pricet, itemt, productTotal } = data;
  
    db.collection('usuario')
      .add({
        idt: idt,
        namet: namet,
        pricet: pricet,
        itemt: itemt,
        productTotal: productTotal,
      })
      .then((docRef) => {
        //alert('Agregado correctamente!');
        console.log("producto agregado")
      })
      .catch((error) => {
        alert('Error en el registro');
      });
  
    //! termina datos almacenados
  }





