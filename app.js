//oldalsó menü 
const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

// click css csere//
burger.addEventListener('click', function (event) {
    nav.classList.toggle('menu-active')
    burger.classList.toggle('fi-align-justify')
    burger.classList.toggle('fi-align-arrow-left')
})
// products beillesztés  
const products = [
    {
        id: 12, 
        name: 'Málna',
        picture: 'malna.jpg',
        description: 'Kézzel termelt egészség',
        price: 3800,
        inStock: true
    },
    {
        id: 2,
        name: 'Áfonya',
        picture: 'afonya.jpg',
        description: 'Kézzel termelt egészség',
        price: 3250,
        inStock: true
    },
    {
        id:35,
        name: 'Szeder',
        picture: 'szeder.jpg',
        description: 'Kézzel termelt egészség',
        price: 1700,
        inStock: true,
        variations: ['fehér', 'fekete']
    }
] 

const productsSection = document.getElementById('products')


products.forEach(product => {
    productsSection.innerHTML += `<div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <img src="./img/${product.picture}">
        <h3>${product.price} Ft</h3>
        <a href="#" class="addToCart">Kosárba</a>
    </div>`
})

// kosár kezelés

const cart = {}

const addToCartButtons = document.getElementsByClassName('addToCart')