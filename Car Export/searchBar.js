
fetch('./vehicledetails.json')
    .then(response => response.json())
    .then(data => {
        const vehicle = data;
        const categories = [...new Set(vehicle.map((item) => item))];


        const displayItem = (items) => {
            document.getElementById("root").innerHTML = items.map((item) => {
                const { image, brand, model, year, price } = item;
                return `
                    <div class='box'>
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
                    </div>`;
            }).join('');
        };


        displayItem(categories);


        document.querySelector("#searchBar").addEventListener("keyup", (event) => {
            const searchData = event.target.value.toLowerCase();
            const filterData = categories.filter((item) => {
                return (
                    item.brand.toLowerCase().includes(searchData) ||
                    item.model.toLowerCase().includes(searchData)
                );
            });
            displayItem(filterData);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));
