document.addEventListener('DOMContentLoaded', function() {
    const chatbotHTML = `
        <a href="https://wa.me/5511913292588" target="_blank" class="chatbot-container">
            <img src="img/minikey.jpg" alt="Atendente Virtual" class="chatbot-avatar">
            <i class="bi bi-whatsapp chatbot-icon"></i>
        </a>
    `;

    document.body.innerHTML += chatbotHTML;
});