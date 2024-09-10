const candies = [
    {
        name: "Chocolate Bar",
        description: "Rich and creamy milk chocolate",
        price: 2.50,
        image: "https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Chocolate+Bar"
    },
    {
        name: "Gummy Bears",
        description: "Fruity and chewy gummy treats",
        price: 1.99,
        image: "https://via.placeholder.com/300x200/FF69B4/FFFFFF?text=Gummy+Bears"
    },
    {
        name: "Lollipops",
        description: "Colorful and long-lasting suckers",
        price: 0.99,
        image: "https://via.placeholder.com/300x200/1E90FF/FFFFFF?text=Lollipops"
    }
];

function createCandyItem(candy) {
    const candyItem = document.createElement('div');
    candyItem.className = 'candy-item';
    candyItem.innerHTML = `
        <img src="${candy.image}" alt="${candy.name}">
        <h3>${candy.name}</h3>
        <p>${candy.description}</p>
        <p class="price">$${candy.price.toFixed(2)}</p>
    `;
    return candyItem;
}

function displayCandies() {
    const candyList = document.getElementById('candy-list');
    candies.forEach(candy => {
        const candyItem = createCandyItem(candy);
        candyList.appendChild(candyItem);
    });
}

document.addEventListener('DOMContentLoaded', displayCandies);
