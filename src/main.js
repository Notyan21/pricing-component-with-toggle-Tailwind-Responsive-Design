const toggleContainer = document.querySelector('#toggle-container');
const prices = document.querySelectorAll('.price');


const monthlyPrices = [19.99, 24.99, 39.99];
const yearlyPrices = [199.99, 249.99, 399.99];


toggleContainer.addEventListener('click', () => {
    toggleContainer.classList.toggle('justify-end');
    
    const isMonthly = toggleContainer.classList.contains('justify-end');
    
    prices.forEach((priceElement, index) => {
        priceElement.textContent = `$${isMonthly ? monthlyPrices[index] : yearlyPrices[index]}`;
    });
});
