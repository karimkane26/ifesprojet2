let product = JSON.parse(localStorage.getItem('product')) || {}
MainImg.src = product.image
product_name.innerText = product.name
product_price.innerText = product.price
product_qty.value = product.qty || 1

let addBtn = document.querySelector(".addCartBtn")

addBtn.addEventListener("click", () => {

  let cart = JSON.parse(localStorage.getItem("cart")) || []

  let qty = parseInt(product_qty.value) || 1

  // vérifier si produit existe déjà
  let exist = cart.find(item => item.name === product.name)

  if(exist){
    exist.qty += qty    
  }

  else{
    cart.push({
      name: product.name,
      price: Number(product.price.replace("$","")),
      image: product.image,
      qty: qty
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))

  alert("Produit ajouté au panier ")
  window.location.href="cart.html"

})