// Cambiar color del header al hacer scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.style.backgroundColor = window.scrollY > 50 ? "rgb(63, 47, 74)" : "transparent";
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, productPrice) {
    const existingItemIndex = cart.findIndex(item => item.name === productName);
    
    if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    
    openCartSlidebar(); // Abrir el slide bar al agregar producto
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const emptyCartMessage = document.getElementById("empty-cart-message");
    const checkoutBtn = document.getElementById("checkout-btn");
    const cartTotalContainer = document.getElementById("cart-total-container");

    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        emptyCartMessage.style.display = "block";
        checkoutBtn.style.display = "none";
        cartTotalContainer.style.display = "none";
    } else {
        emptyCartMessage.style.display = "none";
        checkoutBtn.style.display = "block";
        cartTotalContainer.style.display = "block";
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const li = document.createElement("li");
            li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
            li.innerHTML = `
                <div>
                    <span>${item.name} - $${item.price.toFixed(2)}</span>
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
                    </div>
                </div>
                <span>$${itemTotal.toFixed(2)}</span>
                <button onclick="removeFromCart(${index})" class="btn btn-sm btn-outline-danger">×</button>
            `;
            cartItems.appendChild(li);
        });

        cartTotal.innerText = `$${total.toFixed(2)}`;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

function openCartSlidebar() {
    document.getElementById("cart-slidebar").classList.add("active");
    document.getElementById("backdrop").classList.add("active");
}

function closeCartSlidebar() {
    document.getElementById("cart-slidebar").classList.remove("active");
    document.getElementById("backdrop").classList.remove("active");
}

function increaseQuantity(index) {
    cart[index].quantity += 1;
    updateCart();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        removeFromCart(index);
    }
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert("Gracias por tu compra!");
    cart = [];
    updateCart();
}

function seguirComprando() {
    closeCartSlidebar();
}

document.getElementById("carrito-btn").addEventListener("click", openCartSlidebar);
document.getElementById("close-slidebar").addEventListener("click", closeCartSlidebar);
document.getElementById("backdrop").addEventListener("click", closeCartSlidebar);

document.addEventListener("DOMContentLoaded", updateCart);


const cartButton = document.getElementById("carrito-btn");
const slidebar = document.getElementById("cart-slidebar");
const closeButton = document.getElementById("close-slidebar");
const backdrop = document.getElementById("backdrop");

// Abrir Slide Bar y activar el fondo oscurecido
cartButton.addEventListener("click", () => {
    slidebar.classList.add("active");
    backdrop.classList.add("active");
});

// Cerrar Slide Bar y desactivar el fondo oscurecido
closeButton.addEventListener("click", () => {
    slidebar.classList.remove("active");
    backdrop.classList.remove("active");
});

// Cerrar Slide Bar al hacer clic en el fondo
backdrop.addEventListener("click", () => {
    slidebar.classList.remove("active");
    backdrop.classList.remove("active");
});

