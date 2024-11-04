// Task 2:  Fetch Products from the API Using Fetch and Promises
document.addEventListener('DOMContentLoaded', ()=> {
    const productContainer = document.getElementById('productContainer');
    const errorMessage = document.getElementById('errorMessage');

    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok){
            throw new Error('Network Response is not working');
        }
        return response.json();
    })
    .then(data => {
        displayProducts(data);
    });
});