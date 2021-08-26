
const cartItem = document.querySelector(".cart-item")
const  itemPrice = document.querySelector(".cart-item-price")
const totalPrice = document.querySelector(".total-price")
let total = 0
const itemQuantity = document.querySelectorAll("#qnt")


// console.log(addToCartButton);




    // console.log(button); 
    // console.log(item)
    // const addToCartButton = document.getElementById("add-to-cart")
    // const addToCartButtonClicked = (e) => {
        
    //     let itemName = document.getElementsByClassName("item-name")[0].innerText
    //     let itemPrice = document.getElementsByClassName("item-price")[0].innerText
    //     let itemImg = document.getElementsByClassName("item-img")[0].src
    //     console.log(itemName, itemPrice, itemImg);
        // addItemToCart(itemName, itemPrice, itemImg)
        
    // }
    // addToCartButton.addEventListener("clicked", addToCartButtonClicked)
    




// let addToCartButtons = document.querySelectorAll("#add-to-cart")
// console.log(addToCartButtons);
// for (let i = 0; i < addToCartButtons.length; i++) {
//     const button = addToCartButtons[i];
//     button.addEventListener("clicked", addToCartButtonClicked)
// }
// document.get


const removeButtons = document.querySelectorAll("#remove");
for (let i = 0; i < removeButtons.length; i++) {
  let button = removeButtons[i];
  button.addEventListener("click", removeCartItem);
}
const removeCartItem = (e) => {
    let button = e.target;
    button.parentElement.parentElement.remove();
    // updateCartTotal();
  }





//   const updateCartTotal = (e) => {
//     let price = parseFloat(itemPrice.textContent)
//     let quantity = parseInt(itemQuantity.value)
//     total = price*quantity
//     totalPrice.textContent = `$ ${total} `
// }


const cartItems = document.querySelector(".cart-items")
const addItemToCart = (itemName, itemPrice, itemImg) => {
    let cartItem = document.createElement("div")
    cartItem.classList.add("cart-item") 
    let itemsInCartNames = cartItems.querySelectorAll(".item-in-cart-name");
    for (var i = 0; i < itemsInCartNames.length; i++) {
      if (itemsInCartNames[i].innerText == itemName) {
        alert("This item is already added to the cart.");
        return;
      }
    } 
    cartItem.innerHTML = `
    <div class="item-in-cart">
        <img class="item-in-cart-img" src="${itemImg}" width="100" height="100">
        <span class="item-in-cart-name">${itemName}</span>
    </div>
    <div class="item-in-cart-price">
        <p class="cart-item-price">${itemPrice}</p>
    </div>
    <div class="item-in-cart-quantity">
        <input id="qnt" type="number" value="1">
        <button id="remove" type="button">REMOVE</button>
    </div>`
    cartItems.appendChild(cartItem)
    cartItem.querySelector("#remove").addEventListener('click', removeCartItem)
    console.log(itemQuantity );
    totalPrice.textContent = itemPrice
    
    for (let i = 0; i < itemQuantity.length; i++) {
      let itemQuantityUnit = itemQuantity[i];
  
      itemQuantityUnit.addEventListener("input", (e) => {
        let price = parseFloat(itemPrice.textContent)
        let quantity = parseInt(itemQuantity.value)
        console.log('hello');
        total = price*quantity
        totalPrice.textContent = `$ ${total} `
} ) }
    
    
}



const addToCartButtons = document.querySelectorAll("#add-to-cart");
for (let i = 0; i < addToCartButtons.length; i++) {
  const button = addToCartButtons[i];
  button.addEventListener("click",  (e) => {
    let button = e.target;
    let item = button.parentElement.parentElement;
    const itemName = item.querySelector(".item-name").innerText
    const itemPrice = item.querySelector(".item-price").innerText
    const itemImg = item.querySelector(".item-img").src
    addItemToCart(itemName, itemPrice, itemImg);
    // updateCartTotal();
  });
}


// const addToCartClicked = (e) => {
//   let button = e.target;
//   let item = button.parentElement.parentElement;
//   const itemName = item.querySelector(".item-name").innerText
//   const itemPrice = item.querySelector(".item-price").innerText
//   const itemImg = item.querySelector(".item-img").src
//   addItemToCart(itemName, itemPrice, itemImg);
//   // updateCartTotal();
// }

// const allCartItems = cartItems.querySelectorAll(".cart-item");
// const totalPrice = document.querySelector(".total-price");
// let total = 0;
// const updateCartTotal = () => {
//     for (let i = 0; i < allCartItems.length; i++) {
//       let itemPrice = allCartItems[i].querySelector(".cart-item-price");
//       let itemQuantity = allCartItems[i].querySelector("#qnt");
//       let price = parseFloat(itemPrice.textContent);
//       let quantity = parseInt(itemQuantity.value);
//       total +=  price*quantity
      
//     }
//     total = Math.round(total * 100) / 100;
//     totalPrice.innerText = `$ ${total}`
// }
  

// totalPrice = Math.round(total * 100) / 100




