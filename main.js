// Task 2:  Fetch Products from the API Using Fetch and Promises
document.addEventListener('DOMContentLoaded', ()=> {
    const productContainer = document.getElementById('productContainer'); // Get from HTML

    fetch('https://www.course-api.com/javascript-store-products') // Fetching from API
    .then(response => {
        if (!response.ok){ // checking if connection was ok
            throw new Error('Network Response is not working'); //if its not ok
        }
        return response.json();
    })
    .then(data => {
        displayProducts(data);
    })
});
//Task 3: Display Product Details Dynamically
function displayProducts (products){
    const productContainer = document.getElementById('productContainer'); 
    products.forEach(product =>{
        const productElement = document.createElement('div'); //displaying the products

        productElement.innerHTML = ` 
        <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
        <h3>${product.fields.name}</h3>
        <p>Company: ${product.fields.company}</p>
        <p>Price: $${(product.fields.price / 100).toFixed(2)}</p>
    `;
    productContainer.appendChild(productElement);
       
    });
} 
//Task 4: Handle Errors Gracefully
.catch(error => { //catch error
    console.error('Failed to load products. Please try again later.', error);
});
