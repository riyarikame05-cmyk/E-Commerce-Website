let cart = [];

// Add Product to Cart
function addToCart(productName) {

    cart.push(productName);

    updateCart();

}

// Remove Product from Cart
function removeFromCart(productName) {

    let index = cart.indexOf(productName);

    if (index > -1) {
        cart.splice(index, 1);
    }

    updateCart();

}

// Update Cart Count
function updateCart() {

    document.getElementById("cart-count").innerText = cart.length;

}

// Wishlist
function addWishlist() {

    alert("❤️ Added to Wishlist");

}

// Product Rating
function rateProduct(element, rating) {

    let stars = element.parentElement.querySelectorAll("span");

    stars.forEach((star, index) => {

        if (index < rating) {
            star.innerHTML = "★";
            star.style.color = "gold";
        } else {
            star.innerHTML = "☆";
            star.style.color = "gray";
        }

    });

    element.parentElement.querySelector(".rating-text").innerHTML =
        "Rated " + rating + "/5 ⭐";

}

// Search Products
function searchProducts() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(product => {

        let name = product.querySelector("h3").innerText.toLowerCase();

        if (name.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

}