// simple e-commerce console application

// products array
const products = [
    { id: 1, name: "hair ribbon", price: 300 },
    { id: 2, name: "hair clip", price: 1500 },
    { id: 3, name: "hair bonnet", price: 1000 },
    { id: 4, name: "hair scrunchies", price: 500 },
]

function displayProducts() {
    console.log('1. id 1');
    console.log('2. id 2');
    console.log('3. id 3');
    console.log('4. id 4');
  } 

function displayProducts() {
    console.log('Available Products:');
    products.forEach(product => {
      console.log(`${product.id}. ${product.name} - $${product.price}`);
    });
  }

  function getUserInput() {
    const productId = parseInt(prompt('Enter the product ID:'));
    return { productId };
  }

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
  }*/
  
  
  