let vehicles = null;

// fetch("vehicleDetails.json")
//   .then((response) => response.json())
//   .then((data) => {
//     vehicles = data;
//     showDetails()
//   });

function showDetails() {
  let details = document.querySelector(".details");
//   let listVehicle = details.querySelector(".listVehicle");
  let vehicleID = new URLSearchParams(window.location.search).get('id');
  let thisVehicle = vehicles.filter(value =>
    {return value.id == vehicleID})[0];

    //if there is no product with id = productId => return to home page
  if (!thisVehicle) {
    window.location.href = "/";
  }

  details.querySelector(".image img").src = thisVehicle.image;
  details.querySelector(".name").innerText = thisVehicle.brand + ' ' + thisVehicle.model;
  details.querySelector(".year").innerText = thisVehicle.year;
  details.querySelector(".price").innerText = "Y" + thisVehicle.price;
  details.querySelector(".description").innerText = thisVehicle.description;
}