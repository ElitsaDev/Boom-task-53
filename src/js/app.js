import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
    let products = document.getElementsByClassName('product');
    Array.from(products).forEach(product => {
        let value = document.querySelector('.price').textContent;
        product.setAttribute('data-price', value);
    });
});
