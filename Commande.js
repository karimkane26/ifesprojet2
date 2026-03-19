
let orders = JSON.parse(localStorage.getItem('orders')) || []
function addOrder(e){
    e.preventDefault();
let nom = document.querySelector('#nom').value
let adresse = document.querySelector('#adresse').value
let codepostal = document.querySelector('#cp').value
let pays = document.querySelector('#pays').value

let cart = JSON.parse(localStorage.getItem('cart')) || []

if(cart.length === 0){
    alert('le pannier ne peut pas etre vide ')
    return
}
let newOrder = {
        nom: nom,
        adresse: adresse,
        codepostal: codepostal,
        pays: pays,
        products: cart, // 🔥 important
        total: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
        date: new Date().toLocaleString(),
        status: "en attente"
}
orders.push(newOrder)
localStorage.setItem("orders",JSON.stringify(orders))
window.location.href = "Paiement.html"
}