// Variables para los elementos del DOM
const loginButton = document.getElementById('loginButton');
const cancelButton = document.getElementById('cancelButton');
const loginMessage = document.getElementById('loginMessage');
const registerButton = document.getElementById('registerButton');
const registerMessage = document.getElementById('registerMessage');
const userList = document.getElementById('userList');

// Validar credenciales del administrador
if (loginButton) {
    loginButton.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('isLoggedIn', true);
            loginMessage.textContent = 'Bienvenido, admin';
            setTimeout(() => window.location.href = 'registro.html', 1000);
        } else {
            loginMessage.textContent = 'Usuario o contraseña incorrectos';
        }
    });
}

// Cerrar sesión
if (cancelButton) {
    cancelButton.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        loginMessage.textContent = 'Sesión cerrada';
    });
}

// Mostrar usuarios registrados
function displayUsers() {
    userList.innerHTML = '';
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `Usuario: ${user.username}`;
        userList.appendChild(li);
    });
}

// Registrar nuevo usuario
if (registerButton) {
    registerButton.addEventListener('click', () => {
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (newUsername && newPassword) {
            const exists = users.some(user => user.username === newUsername);
            if (exists) {
                registerMessage.textContent = 'El usuario ya existe';
            } else {
                users.push({ username: newUsername, password: newPassword });
                localStorage.setItem('users', JSON.stringify(users));
                registerMessage.textContent = 'Usuario registrado con éxito';
                displayUsers();
            }
        } else {
            registerMessage.textContent = 'Complete todos los campos';
        }
    });

    // Al cargar la página de registro, mostrar usuarios existentes
    document.addEventListener('DOMContentLoaded', displayUsers);
}
