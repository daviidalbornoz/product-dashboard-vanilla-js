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

// ==========================================
// Display the first 5 products on the page
// ==========================================

function displayProducts(products) {
  // Select the container div from the DOM
  const container = document.getElementById('product-container');

  // Loop through only the first 5 products
  products.slice(0, 5).forEach(function(product) {

    // Create the card div and assign the CSS class
    const card = document.createElement('div');
    card.className = 'product-card';

    // Create the product image
    const img = document.createElement('img');
    img.src = product.fields.image[0].url;
    img.alt = product.fields.name;

    // Create the product name
    const name = document.createElement('h3');
    name.textContent = product.fields.name;

    // Create the product price (converted from cents to dollars)
    const price = document.createElement('p');
    price.textContent = '$' + (product.fields.price / 100).toFixed(2);

    // Append all elements to the card, then card to the container
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    container.appendChild(card);
  });
}

// ==========================================
// Reusable error handling function
// ==========================================

function handleError(error) {
  console.error('An error occurred: ' + error.message);
}

// ==========================================
// Initialize the dashboard
// ==========================================

fetchProductsThen();
fetchProductsAsync();