function check(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const notification = document.getElementById('notification');
    notification.innerText = '';

    if (name && email && password) {
        alert('Sign-up Successfully!');
        window.location.href = 'Perfectbuildlogin.html';
    } else {
        notification.style.color = 'red';
        notification.innerText = 'Please enter your name, email, and password.';
    }
}

document.getElementById('togglePassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});
