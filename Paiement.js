function pay(){
    // récupérer le mode de paiement sélectionné
    let method = document.querySelector('input[name="payment"]:checked').value

    alert("Paiement via " + method + " réussi ✅")

    // 🔥 redirection
    window.location.href = "success.html"
}