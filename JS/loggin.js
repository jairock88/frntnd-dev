const loginButton = document.querySelector('.btn-login');
const logoutButton = document.getElementById('logoutHome');
const loginCard = document.getElementById('login-card');
const avatarLogin = document.getElementById('avatar-login');
const loginNav = document.getElementById('loginBtnNav');

// Función para validar la sesión
const validateSession = () => {
    const hasToken = localStorage.getItem('token');
    if (!hasToken) {
        loginCard.classList.remove('d-none');
        logoutButton.classList.add('d-none');
        avatarLogin.classList.add('d-none');
        loginNav.classList.remove('d-none');
    } else {
        loginCard.classList.add('d-none');
        logoutButton.classList.remove('d-none');
        avatarLogin.classList.remove('d-none');
        loginNav.classList.add('d-none');
    }
};

// Función para el inicio de sesión y guardar token
// const handleLogin = () => {
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
//     localStorage.setItem('token', token);
//     validateSession();
// };

// Función para manejar el cierre de sesión
const handleLogout = () => {
    localStorage.removeItem('token');
    validateSession();
};

// // clic al botón de inicio de sesión
// if (loginButton) {
//     loginButton.addEventListener('click', handleLogin);
// }

// Agregar evento de clic al botón de cierre de sesión
if (logoutButton) {
    logoutButton.addEventListener('click', handleLogout);
}

validateSession();
