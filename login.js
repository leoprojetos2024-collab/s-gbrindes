document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // ATENÇÃO: As credenciais estão hardcoded aqui. 
    // Para um ambiente de produção, use um sistema de autenticação seguro.
    const validUsername = 'admin';
    const validPassword = 'admin';

    if (username === validUsername && password === validPassword) {
        // Armazena o status de autenticação na sessionStorage
        sessionStorage.setItem('isAuthenticated', 'true');
        // Redireciona para a página de cadastro
        window.location.href = 'cadastro.html';
    } else {
        errorMessage.textContent = 'Usuário ou senha inválidos.';
    }
});