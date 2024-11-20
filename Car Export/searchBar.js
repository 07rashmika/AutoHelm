//vehicle search
const vehicle = [
    {   
        id: "0",
        brand: "Suzuki",
        model: "Stingray",
        year: 2017,
        price: 429000,
        image: "./assets/Logo.png"
    },
    {
        id: "1",
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
        price: 549000,
        image: "./assets/Logo.png"
    },
    {
        id: "2",
        brand: "Honda",
        model: "Civic",
        year: 2018,
        price: 409000,
        image: "./assets/Logo.png"
    },
    {
        id: "3",
        brand: "BMW",
        model: "3 Series",
        year: 2019,
        price: 529000,
        image: "./assets/Logo.png"
    },
    {
        id: "4",
        brand: "Mercedes-Benz",
        model: "E-Class",
        year: 2018,
        price: 549000,
        image: "./assets/Logo.png"
    },
    {
        id: "5",
        brand: "Audi",
        model: "A6",
        year: 2019,
        price: 489000,
        image: "./assets/Logo.png"
    }
]

const categories = [...new Set(vehicle.map((item) => {return item}))];

//search bar functionality
document.querySelector("#searchBar").addEventListener("keyup", (event) => {
    const searchData = event.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return(
            item.brand.toLocaleLowerCase().includes(searchData)
        );
    })
    displayItem(filterData);
})

const displayItem = (items) => {
    document.getElementById("root").innerHTML = items.map((item) => {
        var { image, brand, model, year, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img src=${image} alt=${brand} class='images'/>
                </div>
                <div class='bottom'>
                    <p>${brand} ${model}</p>
                    <p>${year}</p>
                    <h2>¥${price}</h2>
                    <div class="btns">
                        <button class='add-cart'>Add  
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button class='add-cart view'>View
                            <i class="fa-solid fa-eye"></i>
                        </button>
                    </div>
                </div>
             </div>`
        )
    }).join('');
}

displayItem(categories);