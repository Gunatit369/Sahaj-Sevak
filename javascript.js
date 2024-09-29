const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    errorMessage.textContent = 'Please fill in both email and password';
    return;
  }

  if (!validateEmail(email)) {
    errorMessage.textContent = 'Invalid email address';
    return;
  }

  if (password.length < 8) {
    errorMessage.textContent = 'Password must be at least 8 characters long';
    return;
  }

  // If all validation passes, submit the form
  form.submit();
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}