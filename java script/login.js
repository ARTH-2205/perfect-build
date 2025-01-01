function check(event) {
    
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const notification = document.getElementById('notification');

    notification.innerText = '';

    if (username && password) {
        alert('Login Successfully!'); 
        window.location.href = 'perfectbuildhomepage.html'; 

    } else {
        notification.style.color = 'red';
        notification.innerText = 'Please enter your username and password.';
    }
}
document.getElementById('togglePassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});