let search = document.querySelector('.search-box');
let cart = document.querySelector('.cart');


document.querySelector('#search-icon').onclick = () => { 
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}

window.onscroll = () => {
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

// Swiper

var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
  });

// Navbar Scroll

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})


  const cartItems = [];

  function renderCart() {
    const cartContainer = document.querySelector('.cart .cart-items');
    const totalDisplay = document.querySelector('.cart h2');
    cartContainer.innerHTML = '';

    let total = 0;

    cartItems.forEach((item, index) => {
      total += item.price * item.quantity;

      const box = document.createElement('div');
      box.className = 'box';
      box.innerHTML = `
        <img src="${item.imgSrc}" alt="">
        <div class="text">
          <h3>${item.name}</h3>
          <span>$${item.price.toFixed(2)}</span>
          <span>x${item.quantity}</span>
        </div>
        <i class="bx bxs-trash-alt" data-index="${index}"></i>
      `;
      cartContainer.appendChild(box);
    });

    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;

    document.querySelectorAll('.bxs-trash-alt').forEach((btn) => {
      btn.addEventListener('click', () => {
        const index = btn.getAttribute('data-index');
        cartItems.splice(index, 1);
        renderCart();
      });
    });
  }

  document.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const product = e.target.closest('.product');
      const name = product.querySelector('.product-name').innerText;
      const price = parseFloat(product.querySelector('.product-price').innerText.replace('$', ''));
      const imgSrc = product.querySelector('img').src;

      const existingItem = cartItems.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ name, price, imgSrc, quantity: 1 });
      }

      // Example: set total to 129.99
localStorage.setItem("cartTotal", "129.99");


      renderCart();
    });
  });


  

