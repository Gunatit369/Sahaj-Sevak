// Get the form elements
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const addressInput = document.querySelector('#address');

// Add an event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the user data from the form
    const userData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        address: addressInput.value
    };

    // Do something with the user data (e.g., save it to a database or storage)
    console.log(userData);
});