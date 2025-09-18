document.addEventListener('DOMContentLoaded', function() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    const adminLink = document.getElementById('admin-link');
    const logoutLink = document.getElementById('logout-link');

    if (isAuthenticated) {
        if (adminLink) adminLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'block';

        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            sessionStorage.removeItem('isAuthenticated');
            window.location.href = 'index.html';
        });
    } else {
        if (adminLink) adminLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'none';
    }
});