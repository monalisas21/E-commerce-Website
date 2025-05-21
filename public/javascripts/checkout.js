// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.getElementById('checkout-container');
//     const subtotalElem = document.getElementById('subtotal');
//     const taxElem = document.getElementById('tax');
//     const totalElem = document.getElementById('total');

//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

//     let subtotal = 0;

//     cartItems.forEach(item => {
//       const itemTotal = item.price * item.quantity;
//       subtotal += itemTotal;

//       const row = document.createElement('div');
//       row.className = 'cartItem row align-items-start';
//       row.innerHTML = `
//         <div class="col-3 mb-2">
//           <img class="w-100" src="${item.imgSrc}" alt="cart item">
//         </div>
//         <div class="col-5 mb-2">
//           <h6>${item.name}</h6>
//           <p class="pl-1 mb-0">—</p>
//           <p class="pl-1 mb-0">Qty: ${item.quantity}</p>
//         </div>
//         <div class="col-2">
//           <p class="cartItemQuantity p-1 text-center">${item.quantity}</p>
//         </div>
//         <div class="col-2">
//           <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
//         </div>
//         <hr>
//       `;
//       container.appendChild(row);
//     });

//     const tax = +(subtotal * 0.05).toFixed(2); // assuming 5% tax
//     const total = +(subtotal + tax).toFixed(2);

//     subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
//     taxElem.textContent = `$${tax.toFixed(2)}`;
//     totalElem.textContent = `$${total.toFixed(2)}`;



//   });


// document.addEventListener("DOMContentLoaded", () => {
//   const total = localStorage.getItem("cartTotal") || "0.00";
//   document.getElementById("total-amount").textContent = `$${parseFloat(total).toFixed(2)}`;
// });






























