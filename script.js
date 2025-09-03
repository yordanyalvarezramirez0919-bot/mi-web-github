
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if(user === 'Admin' && pass === 'yordany0919'){
        localStorage.setItem('currentUser', user);
        alert('Login exitoso!');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
