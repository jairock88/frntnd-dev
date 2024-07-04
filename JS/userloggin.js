let hasToken = localStorage.getItem('token');
console.log(hasToken);

const logoutButton = document.getElementById('logout');
const loginButton = document.querySelector('.btn-login');

const manageLogoutBtn = () => {
    if (hasToken) {
        logoutButton.classList.remove('d-none'); 
    } else {
        logoutButton.classList.add('d-none');
    }
};

manageLogoutBtn();

loginButton.addEventListener('click', () => {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    localStorage.setItem('token', token);
    hasToken = localStorage.getItem('token'); // Actualizar hasToken
    manageLogoutBtn();
    //window.location.href = '../index.html';
});

// Función para remover token, simular cierre de sesión
const logout = () => {
    localStorage.removeItem('token');
    hasToken = localStorage.getItem('token'); // Actualizar hasToken
    manageLogoutBtn();
};

if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        logout();
    });
}
