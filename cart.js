import getElement from "./getElement.js"

const smallCount = getElement("#small-count");

const getFromLocalStorage = (cart) => {

    let products = JSON.parse(localStorage.getItem(cart))
   
        return products
    
}


const setToLocalStorage = (cart) => {
    const products = JSON.stringify(cart)
   
    return localStorage.setItem('shoeCart',products)
}

const displayCart = (container,counter,cart) => {
     
      container.innerHTML = cart
          .map((product) => {
            return ` <div class="cart-info">
          <img id="small-cart-img" src="${product.image}" alt="">
        <div id="add-to-cart-list">
          <p>Fall Limited Edition Sneakers</p> 
            <p><span class="cart-price">&dollar;${
              product.price
            }</span> x <span class="quantity">${product.amount}</span> <strong class="total"> &dollar;${product.price * product.amount}</strong></p>
         
        </div>
        <div>
          <img class="delete-img" src="images/icon-delete.svg" alt="">
        </div>
        </div>
        <div>
          <button class="check-out-btn">Check Out</button>
       
        </div>`;
          })
        .join("");
    
      smallCount.textContent = counter; 
    
}

export {

    getFromLocalStorage,
    setToLocalStorage,
    displayCart,
}