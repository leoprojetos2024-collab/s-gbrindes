document.addEventListener('DOMContentLoaded', function() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    const adminLink = document.getElementById('admin-link');
    const logoutLink = document.getElementById('logout-link');

    // Função para atualizar a visibilidade dos elementos da UI
    const updateAuthUI = (isAuth, adminEl, logoutEl) => {
        if (adminEl) {
            adminEl.style.display = isAuth ? 'none' : 'block';
        }
        if (logoutEl) {
            logoutEl.style.display = isAuth ? 'block' : 'none';
        }
    };

    // 1. Atualiza a UI
    updateAuthUI(isAuthenticated, adminLink, logoutLink);

    // 2. Adiciona a funcionalidade de logout se o usuário estiver autenticado
    if (isAuthenticated && logoutLink) {
        logoutLink.addEventListener('click', (event) => {
            event.preventDefault();
            sessionStorage.removeItem('isAuthenticated');
            window.location.href = 'index.html';
        });
    }
});