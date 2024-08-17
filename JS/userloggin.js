
const loginFormButton = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

loginFormButton.addEventListener('click', async (event) => {
    event.preventDefault();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || !isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    // Hacer la solicitud de login a la API
    try {
        const response = await fetch('https://bcknd-chal.onrender.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        console.log("API Response:", data); // Agregar para verificar la respuesta

        if (data.success) {
            // Almacenar el token en el localStorage
            localStorage.setItem('token', data.data.token);
            console.log("Token Stored:", data.data.token); // Agregar para verificar el token almacenado
            // Redirigir al usuario a la página principal
            window.location.href = '../index.html';
        } else {
            alert("Login failed: " + data.message);
        }
    } catch (error) {
        alert("An error occurred: " + error.message);
    }
});