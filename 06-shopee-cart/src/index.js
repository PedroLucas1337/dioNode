import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";


const myCart = []; 
const myWishList = [];

console.log("Welcome to te your Shopee Cart");

const item1 =  await createItem("funko-pop ribamar vasco", 200.99, 4);  //espera criar o item para ir ao subtotal
const item2 =  await createItem("funko-pop ribamar chapecoense", 100.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2); // adicione o item no meu carrinho, sendo o item 1 (no dois, ele vai para uma lista de desejos e n aparece)
await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)
await cartService.displaycart(myCart);


//await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(myCart, item2.name);
 