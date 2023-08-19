const sneakerData = [
    {
        name: "Nike Air Force 1",
        price: 160,
        brand: "Nike",
        category: "Casual",
        image: "https://example.com/nike-air-force-1.jpg"
    },
    {
        name: "Adidas Ultraboost",
        price: 180,
        brand: "Adidas",
        category: "Running",
        image: "https://example.com/adidas-ultraboost.jpg"
    },
    {
        name: "Jordan 1 Retro",
        price: 200,
        brand: "Jordan",
        category: "Basketball",
        image: "https://example.com/jordan-1-retro.jpg"
    },
    {
        name: "Puma RS-X",
        price: 120,
        brand: "Puma",
        category: "Casual",
        image: "https://example.com/puma-rs-x.jpg"
    },
    {
        name: "New Balance 990v5",
        price: 180,
        brand: "New Balance",
        category: "Running",
        image: "https://example.com/new-balance-990v5.jpg"
    },
    {
        name: "Reebok Classic Leather",
        price: 90,
        brand: "Reebok",
        category: "Casual",
        image: "https://example.com/reebok-classic-leather.jpg"
    },
    {
        name: "Vans Old Skool",
        price: 65,
        brand: "Vans",
        category: "Skateboarding",
        image: "https://example.com/vans-old-skool.jpg"
    },
    {
        name: "Converse Chuck Taylor",
        price: 55,
        brand: "Converse",
        category: "Casual",
        image: "https://example.com/converse-chuck-taylor.jpg"
    },
    {
        name: "Asics Gel-Kayano",
        price: 150,
        brand: "Asics",
        category: "Running",
        image: "https://example.com/asics-gel-kayano.jpg"
    },
    {
        name: "Puma Suede Classic",
        price: 70,
        brand: "Puma",
        category: "Casual",
        image: "https://example.com/puma-suede-classic.jpg"
    }
];




const sneakerList = document.querySelector(".sneaker-list");
const sortSelect = document.getElementById("sort");

function renderSneakers(sneakers) {
    sneakerList.innerHTML = "";
    sneakers.forEach(sneaker => {
        const sneakerCard = document.createElement("div");
        sneakerCard.classList.add("sneaker-card");
        sneakerCard.innerHTML = `
            <h3>${sneaker.name}</h3>
            <img src="https://via.placeholder.com/300" alt="${sneaker.name}">
            <p>Price: $${sneaker.price}</p>
            <p>Brand: ${sneaker.brand}</p>
            <p>Category: ${sneaker.category}</p>
        `;
        sneakerList.appendChild(sneakerCard);
    });
}

sortSelect.addEventListener("change", () => {
    const sortBy = sortSelect.value;
    let sortedSneakers = [...sneakerData];
    if (sortBy === "price-low") {
        sortedSneakers.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
        sortedSneakers.sort((a, b) => b.price - a.price);
    }
    renderSneakers(sortedSneakers);
});

const searchInput = document.getElementById("search");

function filterSneakers(searchTerm) {
    const filteredSneakers = sneakerData.filter(sneaker =>
        sneaker.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredSneakers;
}

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value;
    const filteredSneakers = filterSneakers(searchTerm);
    renderSneakers(filteredSneakers);
});


// Initial rendering
renderSneakers(sneakerData);
