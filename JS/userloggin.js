let hasToken = localStorage.getItem('token')
console.log(hasToken);


const loginButton = document.querySelector('.btn-login');

const validateSession = () => {
    let logoutButton = document.getElementById('logout');
    let hasToken = localStorage.getItem('token');

    if (hasToken) {
        logoutButton.classList.remove('d-none'); 
    } else {
        logoutButton.classList.add('d-none');
    }
};
validateSession();


// Agregar un evento de clic al botón de inicio de sesión
loginButton.addEventListener('click', () => {
    validateSession(); 
});

validateSession();
loginButton.addEventListener('click', () => {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    localStorage.setItem('token', token);
    window.location.href = 'index.html';
    validateSession();
});

// funcion para remover token, simular cierre de sesion
const logout = () => {
    localStorage.removeItem('token');
    hasToken = localStorage.getItem('token');

    validateSession();
};

// logout 
// const logoutButton = document.querySelector('.btn-logout');
// if (logoutButton) {
//     logoutButton.addEventListener('click', () => {
//         logout();
//     });
// };
const manageSession = () => {
    let logoutButton = document.getElementById('logout');
    let hasToken = localStorage.getItem('token');

    // Validar sesión y mostrar/ocultar botón de cerrar sesión
    if (hasToken) {
        logoutButton.classList.remove('d-none'); 
    } else {
        logoutButton.classList.add('d-none');
    }

    // Configurar evento de clic para el botón de cerrar sesión
    logoutButton.addEventListener('click', () => {
        // Función para cerrar sesión
        localStorage.removeItem('token'); // Eliminar el token del localStorage
        manageSession(); // Validar sesión después de cerrar sesión
    });
};