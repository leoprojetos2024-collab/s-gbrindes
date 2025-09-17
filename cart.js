// cart.js

// Função para obter o carrinho do Local Storage
function getCart() {
    const cart = localStorage.getItem('shoppingCart');
    return cart ? JSON.parse(cart) : [];
}

// Função para salvar o carrinho no Local Storage
function saveCart(cart) {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartBadge(); // Atualiza o contador do carrinho no header
}

// Função para adicionar um item ao carrinho
function addItem(product) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += product.quantity;
    } else {
        cart.push(product);
    }
    saveCart(cart);
    alert(`${product.name} (${product.quantity} unidades) adicionado ao carrinho!`);
}

// Função para remover um item do carrinho
function removeItem(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart(); // Renderiza o carrinho novamente após a remoção
}

// Função para atualizar a quantidade de um item no carrinho
function updateQuantity(productId, newQuantity) {
    const cart = getCart();
    const itemToUpdate = cart.find(item => item.id === productId);

    if (itemToUpdate) {
        itemToUpdate.quantity = parseInt(newQuantity);
        if (itemToUpdate.quantity <= 0) {
            removeItem(productId); // Remove se a quantidade for 0 ou menos
        } else {
            saveCart(cart);
            renderCart(); // Renderiza o carrinho novamente após a atualização
        }
    }
}

// Função para atualizar o contador do carrinho no header
function updateCartBadge() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.querySelector('.navbar .bi-cart-fill + .badge');
    if (badge) {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// Função para renderizar os itens do carrinho na página carrinho.html
function renderCart() {
    const cartTableBody = document.querySelector('#cartTableBody');
    const cartTotalElement = document.querySelector('#cartTotal');
    if (!cartTableBody || !cartTotalElement) return; // Não está na página do carrinho

    const cart = getCart();
    cartTableBody.innerHTML = ''; // Limpa o corpo da tabela

    let total = 0;

    if (cart.length === 0) {
        cartTableBody.innerHTML = '<tr><td colspan="5" class="text-center">Seu carrinho está vazio.</td></tr>';
    } else {
        cart.forEach(item => {
            const subtotal = item.price * item.quantity;
            total += subtotal;

            const row = `
                <tr>
                    <td>
                            <img src="${item.image}" alt="${item.name}" class="img-fluid rounded" style="width: 80px;">
                            <div class="ms-3">
                                <h6 class="mb-0">${item.name}</h6>
                                <small class="text-muted">${item.description || ''}</small>
                            </div>
                        </div>
                    </td>
                    <td>R$ ${item.price.toFixed(2).replace('.', ',')}</td>
                    <td class="text-center">
                        <input type="number" class="form-control form-control-sm d-inline-block" style="width: 70px;" id="qty-${item.id}"
                               value="${item.quantity}" min="1"
                               onchange="updateQuantity('${item.id}', this.value)">
                    </td>
                    <td class="text-end">R$ ${subtotal.toFixed(2).replace('.', ',')}</td>
                    <td class="text-center">
                        <button class="btn btn-danger btn-sm" onclick="removeItem('${item.id}')">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </td>
                </tr>
            `;
            cartTableBody.innerHTML += row;
        });
    }

    cartTotalElement.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    updateCartBadge(); // Garante que o badge esteja atualizado
}

// Inicializa o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge(); // Atualiza o badge ao carregar qualquer página
    if (document.querySelector('#cartTableBody')) { // Se estiver na página do carrinho
        renderCart();
    }
});