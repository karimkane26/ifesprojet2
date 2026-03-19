let cart = JSON.parse(localStorage.getItem("cart")) || []

let totalQty = cart.reduce((sum, item) => {
   return sum + item.qty

}, 0)

// console.log(typeof(totalQty));

document.getElementById("carcount").innerText = totalQty
console.log(cart);

let cartBody = document.getElementById("cartBody")

function displayCart(){

cartBody.innerHTML = cart.map((item, index) => {

return `
<tr>
  <td><i class="fas fa-times-circle" onclick="removeItem(${index})"></i></td>
  <td><img src="${item.image}" width="50"></td>
  <td>${item.name}</td>
  <td>${item.price}</td>
  <td><input type="number" value="${item.qty}" onchange="updateQty(${index}, this.value)"></td>
  <td class="totalPrice">${Number(item.price) * item.qty}</td>
</tr>
`

}).join("")
document.getElementById("carcount").innerText = cart.reduce((sum, item) => sum + item.qty, 0)
updateTotal()

}

displayCart()

function removeItem(index){

cart.splice(index, 1)

localStorage.setItem("cart", JSON.stringify(cart))

displayCart()

}

function updateQty(index, qty){

cart[index].qty = parseInt(qty)

localStorage.setItem("cart", JSON.stringify(cart))

displayCart()

}



function updateTotal(){

let subtotal = cart.reduce((sum, item) => {
   return sum + (Number(item.price) * Number(item.qty))
}, 0)

// afficher subtotal
document.getElementById("subtotalPrice").innerText = "$ " + subtotal

// shipping (exemple)
let shipping = subtotal >= 100 ? 0 : 10

// total final
let total = subtotal + shipping
document.getElementById("totalPrice").innerText = "$ " + total

}

document.getElementById('checkoutBtn').addEventListener('click',()=> {
   if(cart.length < 0) {
      alert("le pannier ne peut pas etre vide")
   }
      if(confirm("Confirmer votre commande ?")){
        window.location.href = "Commande.html"
    }
})