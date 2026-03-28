// ==========================================
// Fetch products using Promise-based syntax
// ==========================================

function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then(function(response) {
      return response.json();
    })
    .then(function(products) {
      products.forEach(function(product) {
        console.log('Product name:', product.fields.name);
      });
    })
    .catch(function(error) {
      handleError(error);
    });
}

// ==========================================
// Fetch products using async/await syntax
// ==========================================

async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}