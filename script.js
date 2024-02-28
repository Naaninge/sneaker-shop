
import getElement from "./getElement.js"
import productList from "./product.js"
import { getFromLocalStorage,setToLocalStorage,displayCart } from "./cart.js"

// selecting elements in the dom
const cart = document.getElementById('nav-cart')
const cartList = document.getElementById('cart-list')
const close = getElement('.close')
// selecting the smaller images
const img = getElement('#image-product')
const firstImage = getElement('.img1')
const secondImage = getElement('.img2')
const thirdImage = getElement('.img3')
const fourthImage = getElement('.img4')

// next and previous buttons
const modalImage = getElement('.view-product')
const previous = getElement('.previous-btn')
const next = getElement('.next-btn')

// product modal
const productModal = getElement('#product-modal')
const smallCount = getElement("#small-count");

// targeting the remove and add buttons
const remove =getElement('.remove')
const add = getElement('.add')
const viewCount = getElement('.counter')
// add to cart button
const addToCart =getElement('.add-to-cart')

const viewCart = getElement('.cart-items')

//side menu

const sideMenuClose = getElement('.close-s')
const menu = getElement(".menu-btn");
const sideMenu = getElement(".side-menu");

let index = 0
let counter = 0
  

// Event Listeners

// counter functions
remove.addEventListener('click',()=>{
    counter -=1
    if(counter < 0){
        counter = 0
    }
    viewCount.textContent = counter
})

add.addEventListener('click',()=>{
    counter +=1
    viewCount.textContent = counter
})


// local Storage Cart
let cartProduct = getFromLocalStorage("shoeCart");
 let cartItems = [];

//adding to cart
addToCart.addEventListener('click',()=>{
    const shoe = productList[0]

    if (counter > 0) {
        cartItems.push({ ...shoe, amount:counter });
        setToLocalStorage(cartItems)
         if(smallCount.classList.contains('hide')){
            smallCount.classList.remove('hide')
            smallCount.classList.add('small-count')
        }
       
        
        displayCart(viewCart, cartProduct)
            
            
    }
   
})



// view the cart on nav cart
cart.addEventListener('click',()=>{
    
    if(cartList.classList.contains('hide')){
        cartList.classList.remove('hide')
        cartList.classList.add('show-cart')
    }
     else{
        cartList.classList.add('hide')
        cartList.classList.remove('show-cart')
        
     }
    
    
})

// Close modal
close.addEventListener('click',()=>{

        productModal.classList.remove('product-slider')  
        productModal.classList.add('hide')
    
})

sideMenuClose.addEventListener("click", () => {
  sideMenu.classList.add("hide");
});

menu.addEventListener("click", () => {
  sideMenu.classList.remove("hide");
});

// Change the Images 
firstImage.addEventListener('click',()=>{
   img.src = productList[0].image
   
})
secondImage.addEventListener('click',()=>{
    img.src = productList[1].image
 })

 thirdImage.addEventListener('click',()=>{
    img.src = productList[2].image
 })
 fourthImage.addEventListener('click',()=>{
    img.src = productList[3].image
 })

// first image to view modal'
img.addEventListener('click',()=>{

    if(productModal.classList.contains('hide')){
        productModal.classList.remove('hide')
        productModal.classList.add('product-slider')
    }
     else{
        productModal.classList.add('hide')
        productModal.classList.remove('product-slider')
        
     }
  
})

// chaning images in modal
next.addEventListener('click',()=>{
    index += 1
    if(index > productList.length -1 ){
        index = 0
    }
    modalImage.src = productList[index].image
    console.log(modalImage.src)
})

previous.addEventListener('click',()=>{
    index -= 1
    if(index < 0){
        index = productList.length -1
    }
    modalImage.src =  productList[index].image
    console.log(modalImage.src)
});

console.log(`${viewCart}: ${counter}: ${cartItems}`);
displayCart(viewCart,cartItems);

