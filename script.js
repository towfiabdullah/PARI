// script.js
document.addEventListener('DOMContentLoaded', () => {
 const cart = [];
 const cartItemsContainer = document.getElementById('cart-items');
 const totalPriceElement = document.getElementById('total-price');

 document.querySelectorAll('.add-to-cart').forEach(button => {
     button.addEventListener('click', (event) => {
         const productElement = event.target.closest('.product');
         const productId = productElement.getAttribute('data-id');
         const productName = productElement.querySelector('h3').innerText;
         const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('Price: $', ''));

         const product = {
             id: productId,
             name: productName,
             price: productPrice
         };

         cart.push(product);
         updateCart();
     });
 });

 function updateCart() {
     cartItemsContainer.innerHTML = '';
     let totalPrice = 0;

     cart.forEach(item => {
         const listItem = document.createElement('li');
         listItem.textContent = `${item.name} - $${item.price}`;
         cartItemsContainer.appendChild(listItem);
         totalPrice += item.price;
     });

     totalPriceElement.textContent = `Total Price: $${totalPrice}`;
 }
});
