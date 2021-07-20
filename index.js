const store = {
    location: "London",
    products: [
      {
        name: "iPhone 6S",
        type: "mobile",
        stock: {
          incomingDelivery: false,
          quantity: 450
        },
        price: 600
      },
      {
        name: "iPhone 10",
        type: "mobile",
        stock: {
          incomingDelivery: false,
          quantity: 20
        },
        price: 1000
      },
      {
        name: "iPhone 12",
        type: "mobile",
        stock: {
          incomingDelivery: true,
          quantity: 0
        },
        price: 1400
      },
      {
        name: "iPad Pro",
        type: "tablet",
        stock: {
          incomingDelivery: true,
          quantity: 100
        },
        price: 600
      },
      {
        name: "iPad mini",
        type: "tablet",
        stock: {
          incomingDelivery: false,
          quantity: 300
        },
        price: 600
      },
      {
        name: "iMac",
        type: "computer",
        stock: {
          incomingDelivery: true,
          quantity: 15
        },
        price: 2300
      },
      {
        name: "MacBook Pro",
        type: "computer",
        stock: {
          incomingDelivery: false,
          quantity: 80
        },
        price: 2400
      },
      {
        name: "MacBook Air",
        type: "computer",
        stock: {
          incomingDelivery: false,
          quantity: 200
        },
        price: 1800
      }
    ]
  };
  
  console.log(store);
  
  // Each section needs it's own for loop
  // DO NOT change any of the code
  //
  // For sections with "A list of..." the output should be an array full of objects
  // Output:
  // => [{...}, {...}, {...}]
  //
  // For sections with "An object..." the output should be an object
  // Output:
  // => {...}
  
  const products = store.products;
  
  // ----- Section -----
  
  // A list of products that cost more than £1000
  const expensiveProducts = [];
  
  // I need to know the pirce
  // console.log("Product Price: ", products[0].price);
  
  // Write a for loop here...
  
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
  
    const price = product.price;
  
    if (price >= 1000) {
      expensiveProducts.push(product);
    }
  }
  
//   console.log("expensiveProducts: ", expensiveProducts);
  
  // ----- Section -----
  
  // A list of products that cost less than £1000
  const cheapProducts = [];
  
  // Write a for loop here...
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
  
    const price = product.price;
  
    if (price <= 1000) {
      cheapProducts.push(product);
    }
  }
//   console.log("cheapProducts: ", cheapProducts);
  // ----- Section -----
  
  // A list of products that have an incoming delivery
  const productsThatNeedToBeReceived = [];
  
  // I need to know incoming delivery
  console.log("Stock - Incoming Delivery: ", products[0].stock.incomingDelivery);
  
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
  
    const isDeliveryIncoming = product.stock.incomingDelivery;
  
    if (isDeliveryIncoming) {
      productsThatNeedToBeReceived.push(product);
    }
  }
  
//   console.log("productsThatNeedToBeReceived: ", productsThatNeedToBeReceived);
  
  // ----- Section -----
  
  // A list of products that are out of stock
  const outOfStockProducts = [];
  
  // ----- Section -----
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
  
    const quantityInStock = product.stock.quantity;
  
    if (quantityInStock === 0) {
      outOfStockProducts.push(product);
    }
  }

//   console.log("outOfStockProducts: ", outOfStockProducts);
  
  // A list of products that have a quantity that is less than 100 and have no incoming delivery
  const productsThatNeedToBeOrdered = [];
  
  // ----- Section -----
  for (let i = 0; i < products.length; i++){
      const product = products[i]

  const productQuantity = product.stock.quantity;
  const IncomingDelivery = product.stock.incomingDelivery;

  if (productQuantity < 100 && IncomingDelivery === 0) {
      productsThatNeedToBeOrdered.push(product);
  }
 }
//   console.log("productsThatNeedToBeOrdered: ", productsThatNeedToBeOrdered)

  // A list of products of the type "tablet"
  const tablets = [];
  
  // ----- Section -----
  for (let i = 0; i < products.length; i++) {
      const product = products[i]

      const typeOfProducts = product.type;

    if (typeOfProducts === "tablet"){
        tablets.push(product);
    }  
  }
//   console.log("tablets: ", tablets)

  // A list of products of the type "computer"
  const computers = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i]

    const typeOfProducts = product.type;

  if (typeOfProducts === "computer"){
      computers.push(product);
  }  
}
// console.log("computers: ", computers)
  
  // ----- Section -----
  
  // An object that represents an "iMac"
  let iMac = null;
  
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
  
    const name = product.name;
  
    // console.log("Iteration #", i + 1);
  
    if (name === "iMac") {
      iMac = product;
      break;
    }
  }
  
  console.log("iMac: ", iMac);
  
  // ----- Section -----
  
  // An object that represents an "iPhone 12"
  let iPhone12 = null;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
  
    const name = product.name;
  
    // console.log("Iteration #", i + 1);
  
    if (name === "iPhone 12") {
      iPhone12 = product;
      break;
    }
  }
  console.log("iphone 12: ", iPhone12);
  
  // ----- Section -----
  
  // An object that represents an "iPad Mini"

  const iPadMini = null;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
  
    const name = product.name;
  
    // console.log("Iteration #", i + 1);
  
    if (name === "iPad mini") {
        iPadMini = product;
      break;
    }
  }  
  console.log("iPadMini: ", iPadMini);
  
  // ----- Section -----
  
  // An numbers that represents the total quantity of stocked products
  let totalQuantityOfStock = 0;
  
  for (let i = 0; i < products.length; i++) {
      const product = products[i];
      console.log(product);

      const stockedProduct = product.stock.quantity;
      console.log(products.stock.quantity);

      console.log("iteration #", i + 1)

    if (stockedProduct) {
        totalQuantityOfStock = stockedProduct;
    }
  }
  console.log("totalQuantityOfStock: ", totalQuantityOfStock);
  
  // ----- CHALLENGE -----
  
  // A list of unique product types
  const productTypes = [];
  
  // Output:
  // => ["mobile", "computer", "tablet"]
  
  // An object that represents the most expensive product
  let theMostExpensiveProduct = null;
  
  let priceTracker = 0;
  
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
  
    const price = product.price;
  
    if (price > priceTracker) {
      theMostExpensiveProduct = product;
      priceTracker = price;
    }
  }
  
  console.log("theMostExpensiveProduct: ", theMostExpensiveProduct);
  
  // An object that represents the least expensive product
  let theLeastExpensiveProduct = null; 
  
  let priceLocator = 0;
  
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
  
    const price = product.price;
  
    if (price < priceLocator) {
      theLeastExpensiveProduct = product;
      priceLocator = price;
    }
  }

  console.log("theLeastExpensiveProduct: ", theLeastExpensiveProduct);
  
  // An object that represents the most expensive product
  const theMostStockedProduct = null;
  
  // An object that represents the least expensive product
  const theLeastStockedProduct = null;
  
  // Use the "stores" array in the challenge.js file
  // And do the above again, collecting data from all stores.
  