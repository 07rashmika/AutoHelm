//for available vehicles
let products = null;

document.addEventListener("DOMContentLoaded", () => {
  fetch("vehicleDetails.json")
    .then((response) => response.json())
    .then((data) => {
      products = data; // Assign fetched data to vehicles

      if (products !== null) {
        // Check if vehicles is not null
        const listVehicleDOM = document.querySelector(".collection");

        products.forEach((product, key) => {
          let newVehicle = document.createElement("div");
          newVehicle.classList.add("vehicle");

          newVehicle.innerHTML = `
            <div class='box'>
              <div class='img-box'>
                <img src="${product.image}" alt="${product.brand}" class='images'/>
              </div>
              <div class='bottom'>
                <p>${product.brand} ${product.model}</p>
                <p>${product.year}</p>
                <h2>¥${product.price}</h2>
                <div class="btns">
                  <button class='add-cart' onclick='addToCart(${key})'>Add 
                    <i class="fa-solid fa-cart-shopping"></i>
                  </button>                  
                  <a href="/carDetails.html?id=${product.id}" class='add-cart'>View 
                    <i class="fa-solid fa-eye"></i>
                  </a>                 
                </div>
              </div>
            </div>`;

          listVehicleDOM.appendChild(newVehicle);
        });
      } else {
        console.error("Vehicles data not found"); // Informative error message
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

//vehicles at auction
let vehicles = null;
let slides = [];

document.addEventListener("DOMContentLoaded", () => {
  fetch("auctionVehi.json")
    .then((response) => response.json())
    .then((data) => {
      vehicles = data; // Assign fetched data to vehicles

      if (vehicles !== null) {
        // Check if vehicles is not null
        const listVehicleDOM = document.querySelector(".slides");

        vehicles.forEach((vehicle) => {
          let newVehicle = document.createElement("div");
          newVehicle.classList.add("box-c");

          newVehicle.innerHTML = `            
              <div class='img-box'>
                <img src="${vehicle.image}" alt="${vehicle.brand}" class='images'/>
              </div>
              <div class='bottom'>
                <p>${vehicle.brand} ${vehicle.model}</p>
                <p>${vehicle.year}</p>
                <h2>¥${vehicle.price}</h2>
                <div class="btns">
                  <a href="/carDetails.html?id=${vehicle.id}" class='add-cart'>View 
                    <i class="fa-solid fa-eye"></i>
                  </a>
                </div>
              </div>`;

          listVehicleDOM.appendChild(newVehicle);
        });
        slides = document.querySelectorAll(".slides .box-c");
        initializeSlider(slides);
      } else {
        console.error("Vehicles data not found"); //to see whether any error occurs
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

//slider

let slideIndex = 0;
let intervalID = null;

function initializeSlider(slides) {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalID = setInterval(nextSlide, 10000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
  clearInterval(intervalID);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide(){
  slideIndex++;
  showSlide(slideIndex);
}

//cart
const openCart = document.querySelector('.cart-btn');
const closeCart = document.querySelector('.closeCart'); 
const carCollection = document.querySelector(".collection");
const carCard = document.querySelector('.box-c');
const total = document.querySelector('.total');
const body = document.querySelector('body');
const quantity = document.querySelector('.items-count');

openCart.addEventListener('click', () => {
  body.classList.add('activated');
})

closeCart.addEventListener('click', () => {
  body.classList.remove('activated');
})

let listCards = [];

const addToCart = (key) => {
  if(listCards[key] == null){
    listCards[key] = JSON.stringify(listCards[key]);
    listCards[key].quantity = 1;
  }

  reloadCard();
}

const reloadCard = () => {
  carCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    totalPrice += value.price;
    count += value.quantity;

    if(value != null){
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div><img src="img/${value.image}"></div>
        <div class="cardTitle">${value.name}></div>
        <div class="cardPrice">${value.price.toLocaleString()}</div>

        <div>
          <button style="background-color: #560bad;"
          class="cardButton" onclick="changeQuantity(${key})"
          value="${value.quantity-1}">-</button>

          <button style="background-color: #560bad;"
          class="cardButton" onclick="changeQuantity(${key})"
          value="${value.quantity+1}">+</button>
        </div>
        `
        carCard.appendChild(newDiv);
    }

    total.innerHTML = totalPrice.toLocaleString();
    quantity.innerHTML = count;
  })
}