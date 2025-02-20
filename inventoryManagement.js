// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

console.log(products);

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(productName) {
  products.push(productName);
  console.log(products);
}

function updateProductName(position, newName) {
  if (position >= 0 && position < products.length) {
    console.log(products[position]);
    products[position] = newName;
    console.log(position,products[position]);
  } else {
    console.log("Invalid position. Please provide a valid index.");
  }
}

function removeLastProduct() {
  if (products.length > 0) {
    const removedProduct = products.pop();
    console.log(removedProduct);
    console.log(products);
  } else {
    console.log("The products array is already empty.");
  }
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
