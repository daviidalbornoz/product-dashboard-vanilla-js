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