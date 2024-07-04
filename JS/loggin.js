// Obtener elementos del DOM
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.querySelector('.btn-login ');

// Función para manejar el inicio de sesión
const handleLogin = (event) => {
  event.preventDefault(); // Prevenir el envío del formulario por defecto

  // Obtener valores de los campos y trim para eliminar espacios en blanco
//   const email = emailInput.value.trim();
//   const password = passwordInput.value.trim();

  // Validar si ambos campos están llenos
  if (email && password) {
    // Simulación de generación de token (puedes ajustar esto según tu lógica real)
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    // Guardar el token en localStorage
    localStorage.setItem('token', token);

    // Redireccionar al usuario a index.html
    window.location.href = 'index.html';
  } else {
    // Manejar caso donde no se han llenado ambos campos
    alert('Por favor, complete los campos de email y contraseña.');
  }
};

// Event Listener para el evento submit del formulario
document.getElementById('loginForm').addEventListener('submit', handleLogin);

// Event Listener para validar campos y habilitar/deshabilitar botón de inicio de sesión
document.getElementById('loginForm').addEventListener('input', () => {
  // Verificar si ambos campos tienen contenido
  const isValid = emailInput.value.trim() && passwordInput.value.trim();

  // Habilitar/deshabilitar el botón de inicio de sesión según la validación
  loginButton.disabled = !isValid;
});