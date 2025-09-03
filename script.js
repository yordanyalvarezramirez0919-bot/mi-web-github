
window.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('currentUser');
    const status = document.getElementById('status');
    if(user){
        status.textContent = 'Bienvenido, ' + user;
    } else {
        status.textContent = 'No has iniciado sesión en Web 1';
    }
    document.getElementById('whatsappBtn').addEventListener('click', () => {
        window.open('https://wa.me/1234567890', '_blank');
    });
});
