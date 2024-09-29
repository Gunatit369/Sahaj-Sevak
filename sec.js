const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // यहाँ आप अपने सर्वर पर डेटा भेजने के लिए AJAX का उपयोग कर सकते हैं
    // या आप अपने डेटा को स्थानीय रूप से सत्यापित कर सकते हैं
    if (email === '' || password === '') {
        errorMessage.textContent = 'कृपया ईमेल और पासवर्ड दर्ज करें';
    } else {
        // यहाँ आप अपने डेटा को स्थानीय रूप से सत्यापित कर सकते हैं
        // या आप अपने सर्वर पर डेटा भेजने के लिए AJAX का उपयोग कर सकते हैं
        console.log('ईमेल:', email);
        console.log('पासवर्ड:', password);
        errorMessage.textContent = '';
    }
});