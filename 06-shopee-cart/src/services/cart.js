//quais ações meu carrinho pode fazer??

//add item

async function addItem(userCart, item) {
    userCart.push(item) //add elemento dentro de um vetor
}

//calc total

async function calculateTotal(userCart) {
    console.log("\nShopee Cart total is: ");
    const result = userCart.reduce((total,item )=> total + item.subtotal(), 0)  //interagir com algum item e gerar uma ação com ele
    console.log(`\n💰Total: ${result}`);
}

//del item

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name); // procurar o indice do vetor que o item se encontra

    if (index !== -1){
        userCart.splice(index, 1); //deletar uma zona
    }
}

//remove item

async function removeItem(userCart, item) {
    const indexFounds = userCart.findIndex((p) => p.name === item.name); // encontrar o indice do idex
    console.log("Item encontrado no index")
    console.log(indexFounds)

    if(indexFounds == -1){
        console.log("item não encontrado"); // caso não encontre o item
        return
    }

    if(userCart[indexFounds].quantity) {
        userCart[indexFounds].quantity -= 1
        return
    } //quantidade do indice maior que um (remove um item)

        if(userCart[indexFounds].quantity == 1) {
            userCart.splice(indexFounds, 1);
            return
        }
}


async function displaycart(userCart){
    console.log("\n Shopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index  + 1}. ${item.name} R$ ${item.price} | ${item.quantity} | Subtotal ${item.subtotal()}`);
    }) //forEach percorre o carrinho de compras
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart
}

