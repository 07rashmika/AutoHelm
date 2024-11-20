const openCart = document.querySelector(".cart-btn");
const closeCart = document.querySelector(".closeCart");
const carCard = document.querySelector(".cart-items");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".items-count");

openCart.addEventListener("click", () => {
  body.classList.add("activated");
});

closeCart.addEventListener("click", () => {
  body.classList.remove("activated");
});

let listCards = [];

const addToCart = (key) => {
  if (!listCards[key]) {

    listCards[key] = {
      ...products[key],
      quantity: 1,
    };
  } else {

    listCards[key].quantity += 1;
  }
  reloadCard();
};

const reloadCard = () => {
  carCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((item, key) => {
    if (item) {
      totalPrice += item.price * item.quantity;
      count += item.quantity;

      let newDiv = document.createElement("li");
      newDiv.classList.add("cart-item");

      newDiv.innerHTML = `
        <div class="item-image"><img src="${item.image}" alt="${item.brand} ${item.model}"></div>
        <div class="item-details">
          <p>${item.brand} ${item.model}</p>
          <p>Price: ¥${item.price.toLocaleString()}</p>
          <p>Quantity: ${item.quantity}</p>
        </div>
        <div class="item-actions">
          <button class="cardButton" onclick="changeQuantity(${key}, -1)">-</button>
          <button class="cardButton" onclick="changeQuantity(${key}, 1)">+</button>
        </div>
      `;

      carCard.appendChild(newDiv);
    }
  });

  total.innerHTML = `Total: ¥${totalPrice.toLocaleString()}`;
  quantity.innerHTML = count;
};

const changeQuantity = (key, delta) => {
  if (listCards[key]) {
    listCards[key].quantity += delta;

    if (listCards[key].quantity <= 0) {

      listCards[key] = null;
    }
    reloadCard();
  }
};


document.addEventListener("DOMContentLoaded", () => {
  fetch("vehicleDetails.json")
    .then((response) => response.json())
    .then((data) => {
      products = data;


      if (products) {
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
            </div>
          `;

          listVehicleDOM.appendChild(newVehicle);
        });
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
});

document.querySelector("#search-bar").addEventListener("keyup", (event) => {
  const searchData = event.target.value.toLowerCase();


  const filterData = products.filter((item) => {
    return (
      item.brand.toLowerCase().includes(searchData) ||
      item.model.toLowerCase().includes(searchData) ||
      item.year.toString().includes(searchData) ||
      item.price.toString().includes(searchData)
    );
  });


  displayFilteredItems(filterData);
});

const displayFilteredItems = (items) => {
  const listVehicleDOM = document.querySelector(".collection");
  listVehicleDOM.innerHTML = "";

  if (items.length === 0) {
    listVehicleDOM.innerHTML = "<p>No vehicles found.</p>";
    return;
  }

  items.forEach((item) => {
    let newVehicle = document.createElement("div");
    newVehicle.classList.add("vehicle");

    newVehicle.innerHTML = `
      <div class='box'>
        <div class='img-box'>
          <img src="${item.image}" alt="${item.brand}" class='images'/>
        </div>
        <div class='bottom'>
          <p>${item.brand} ${item.model}</p>
          <p>${item.year}</p>
          <h2>¥${item.price}</h2>
          <div class="btns">
            <button class='add-cart' onclick='addToCart(${item.id})'>Add  
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <a href="/carDetails.html?id=${item.id}" class='add-cart'>View 
              <i class="fa-solid fa-eye"></i>
            </a>
          </div>
        </div>
      </div>
    `;

    listVehicleDOM.appendChild(newVehicle);
  });
};