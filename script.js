// Script for navigation bar
const bar = document.getElementById('bar')
const close = document.getElementById('close')

const  nav = document.getElementById('navbar')

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active')
    })
}

let addcart = document.querySelectorAll('.add-to-cart')
addcart.forEach((btn) => {
    btn.addEventListener('click',(e)=> {
        e.preventDefault()
        // cette ligne récupère le parent le plus proche avec la classe .pro du bouton sur lequel on a cliqué
        let product = e.currentTarget.closest(".pro")
        let name = product.querySelector("h5").innerText
        let price = product.querySelector("h4").innerText
        let image = product.querySelector("img").src
       let item = {
            name: name,
            price: price,
            image: image,
            qty: 1
       }
       localStorage.setItem('product',JSON.stringify(item))
       window.location.href = 'sproduct.html'
        
    })
})

function addTocart(product){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let exist = cart.find(items => items.name === product.name)
    if(exist){
        exist.qty += 1
    }
    else{
        cart.push(product)
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    alert("Produit ajouté au panier")
}
