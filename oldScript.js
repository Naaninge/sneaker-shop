// product array

const productList = [
  {
    id: 1,
    image: "images/image-product-1.jpg",
    thumbnail: "images/image-product-1-thumbnail.jpg",
    price: 125,
  },
  {
    id: 2,
    image: "images/image-product-2.jpg",
    thumbnail: "images/image-product-2-thumbnail.jpg",
    price: 125,
  },
  {
    id: 3,
    image: "images/image-product-3.jpg",
    thumbnail: "images/image-product-3-thumbnail.jpg",
    price: 125,
  },
  {
    id: 4,
    image: "images/image-product-4.jpg",
    thumbnail: "images/image-product-4-thumbnail.jpg",
    price: 125,
  },
];

// selecting elements in the dom
const cart = document.getElementById("nav-cart");
const cartList = document.getElementById("cart-list");
const close = document.querySelector(".close");
// selecting the smaller images
const img = document.querySelector("#image-product");
const firstImage = document.querySelector(".img1");
const secondImage = document.querySelector(".img2");
const thirdImage = document.querySelector(".img3");
const fourthImage = document.querySelector(".img4");

// next and previous buttons
const modalImage = document.querySelector(".view-product");
const previous = document.querySelector(".previous-btn");
const next = document.querySelector(".next-btn");

// product modal
const productModal = document.querySelector("#product-modal");

// targeting the remove and add buttons
const remove = document.querySelector(".remove");
const add = document.querySelector(".add");
const viewCount = document.querySelector(".counter");
// add to cart button
const addToCart = document.querySelector(".add-to-cart");
const smallCount = document.querySelector("#small-count");
const viewCart = document.querySelector(".cart-items");

let index = 0;
let counter = 0;

// Event Listeners

// counter functions
remove.addEventListener("click", () => {
  counter -= 1;
  if (counter < 0) {
    counter = 0;
  }
  viewCount.textContent = counter;
});

add.addEventListener("click", () => {
  counter += 1;
  viewCount.textContent = counter;
});

//adding to cart
addToCart.addEventListener("click", () => {
  if (counter > 0) {
    const price = productList[0].price;
    const total = price * counter;

    if (smallCount.classList.contains("hide")) {
      smallCount.classList.remove("hide");
      smallCount.classList.add("small-count");
    }

    smallCount.textContent = counter;
    viewCart.innerHTML = ` <div class="cart-info">
          <img id="small-cart-img" src="images/image-product-1-thumbnail.jpg" alt="">
        <div id="add-to-cart-list">
          <p>Fall Limited Edition Sneakers</p> 
            <p><span class="cart-price">&dollar;${price}</span> x <span class="quantity">${counter}</span> <strong class="total"> &dollar;${total}</strong></p>
         
        </div>
        <div>
          <img class="delete-img" src="images/icon-delete.svg" alt="">
        </div>
        </div>
        <div>
          <button class="check-out-btn">Check Out</button>
       
        </div>`;
  }
});
// view the cart on nav cart
cart.addEventListener("click", () => {
  if (cartList.classList.contains("hide")) {
    cartList.classList.remove("hide");
    cartList.classList.add("show-cart");
  } else {
    cartList.classList.add("hide");
    cartList.classList.remove("show-cart");
  }
});

// Close modal
close.addEventListener("click", () => {
  productModal.classList.remove("product-slider");
  productModal.classList.add("hide");
});

// Change the Images
firstImage.addEventListener("click", () => {
  img.src = productList[0].image;
});
secondImage.addEventListener("click", () => {
  img.src = productList[1].image;
});

thirdImage.addEventListener("click", () => {
  img.src = productList[2].image;
});
fourthImage.addEventListener("click", () => {
  img.src = productList[3].image;
});

// first image to view modal'
img.addEventListener("click", () => {
  if (productModal.classList.contains("hide")) {
    productModal.classList.remove("hide");
    productModal.classList.add("product-slider");
  } else {
    productModal.classList.add("hide");
    productModal.classList.remove("product-slider");
  }
});

// chaning images in modal

next.addEventListener("click", () => {
  index += 1;
  if (index > productList.length - 1) {
    index = 0;
  }
  modalImage.src = productList[index].image;
  console.log(modalImage.src);
});

previous.addEventListener("click", () => {
  index -= 1;
  if (index < 0) {
    index = productList.length - 1;
  }
  modalImage.src = productList[index].image;
  console.log(modalImage.src);
});
