// simple e-commerce console application

// products array
const products = [
    { id: 1, name: "hair ribbon", price: 300 },
    { id: 2, name: "hair clip", price: 1500 },
    { id: 3, name: "hair bonnet", price: 1000 },
    { id: 4, name: "hair scrunchies", price: 500 },
]

/*function displayProducts() {
    console.log('Available Products:');
    products.forEach(product => {
      console.log(`${product.id}. ${product.name} - $${product.price}`);
    });
  }*/

  /*function getUserInput() {
    const productId = parseInt(prompt('hair ribbon'));
    //const quantity = parseInt(prompt('Enter the quantity:'));
   // return { productId, quantity };
    return { productId };
  }*/

  /*function processOrder(productId, quantity) {
    const selectedProduct = products.find(product => product.id === productId);
  
    // if (selectedProduct && selectedProduct.quantity >= quantity) {
      //selectedProduct.quantity -= quantity;
      console.log(`Order placed successfully! Total cost: $${selectedProduct.price}`);
    //} else {
      // console.log('Product not found or insufficient quantity.');
    //}
  }*/
  
  /*while (true) {
    displayProducts();
    const { productId } = getUserInput();
    processOrder(productId);
  
    const continueShopping = prompt('Do you want to continue shopping? (yes/no)').toLowerCase();
    if (continueShopping !== 'yes') {
      console.log('Thank you for shopping with us. Goodbye!');
      break;
    }
  }
  
  
  