// let hasToken = localStorage.getItem('token')
// console.log(hasToken);

// const isLogged = () => {
//     let thereToken = localStorage.getItem('token');
//     return thereToken ? true : false;
// }

const loginFormButton = document.getElementById('loginForm');

loginFormButton.addEventListener('click', () => {
    let token = 'eyJhbGciOiJIUzI1NiIs5c'
    localStorage.setItem('token', token);
    window.location.href = '../index.html';
    //validateSession();
});


// export { hasToken, validateSession, loginButton, logoutButton, logout };