// Récupération des paramètres depuis l’URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const price = params.get("price");
const theme = params.get("theme");
const image = params.get("image");

// Affiche les infos sur la page
document.getElementById("productTitle").textContent = name;
document.getElementById("productPrice").textContent = `${price} €`;
document.getElementById("productDesc").textContent = `Thème : ${theme}`;
document.getElementById("mainImage").src = image;

// Simule plusieurs images dans le carrousel
const images = [image, image.replace(".jpg", "_2.jpg"), image.replace(".jpg", "_3.jpg")];
let index = 0;
document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("mainImage").src = images[index];
});
document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  document.getElementById("mainImage").src = images[index];
});

// Prépare le bouton Snipcart
const btn = document.getElementById("addToCart");
btn.dataset.itemId = `${name}-${theme}`;
btn.dataset.itemName = name;
btn.dataset.itemPrice = price;
btn.dataset.itemUrl = https://soulixion.github.io/clay_hand_art_snipcart/;
btn.dataset.itemImage = image;
btn.dataset.itemDescription = theme;

// Quantité personnalisée
const qtyInput = document.getElementById("quantity");
qtyInput.addEventListener("change", () => {
  btn.dataset.itemQuantity = qtyInput.value;
});

