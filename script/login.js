// login form by id
const loginForm = document.querySelector('#login-form');
// Login form submit event
loginForm.addEventListener('submit', function (event) {
    // console.log(event.target);
    event.preventDefault();
    //  collect form data
    const formData = new FormData(loginForm);
    console.log(
        formData.get('login'),
        formData.get('password')
    );
    // Save user information
    // Send confirmation email
    // Display success message
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'login successful!';
});