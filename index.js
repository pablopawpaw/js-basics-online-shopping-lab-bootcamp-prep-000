var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getItemName(i){
  return cart[i].itemName;
}

function getItemPrice(i){
  return cart[i].itemPrice;
}

function addToCart(itemName) {
 var item = {itemName, itemPrice};
 var itemPrice;
 item.itemPrice = parseInt(Math.random()*100);
 cart.push(item);
 return `${itemName} has been added to your cart.`;
}


function viewCart() {
let statement = '';
  let statementBeg = `In your cart, you have `;
  statement = statementBeg;
  
if(cart.length===0) {
  return console.log('Your shopping cart is empty.');
}

var i;

  for(i=0;i<cart.length;i++) {
    let addName = getItemName(i);
    let addPrice = getItemPrice(i);
    let statementAdd = `${addName} at $${addPrice}, `;
    let statementEnd = `and ${addName} at $${addPrice}.`;
    let statementOne = `${addName} at $${addPrice}.`;
    
    if(cart.length>0 && i===cart.length-1) {
      statement+=statementEnd;
      } else if(cart.length===1) {
      statement+=statementOne;
      } else {
        statement+=statementAdd;
      }
       
    } 
  return statement   ;   
}

function total() {
  var totalPrice=0;
  for(i=0;i<cart.length;i++) {
    totalPrice +=getItemPrice(i);
  }
  return totalPrice;
}

function removeFromCart(item) {
  for(var i=0; i<cart.length; i++) {
    if(getItemName(i)===item) {
      delete cart[i]
      
    } 
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
