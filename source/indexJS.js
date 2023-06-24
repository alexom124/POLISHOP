


let shop = document.getElementById('shop');



console.log(shop); 

let basket = JSON.parse(localStorage.getItem("data")) || []

let generateShop = () => {
    shop.innerHTML = shopItemsData.map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
        <div id="product-id-${id}" class="item">
          <img width="220" height="250px" src="${img}" alt="">
          <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
              <h2>${"$" + price}</h2>
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  
    // Inicializar el carrusel después de generar los productos
    initializeCarousel();
  };
  

  
  document.addEventListener('DOMContentLoaded', function() {
    // Cargar el contenido de la tienda
    generateShop();
  });
  
  

// Agrega esta función para inicializar el carrusel después de generar los productos
let initializeCarousel = () => {
    $('.shop-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
};



  
