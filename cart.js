// cart.js

// Função para obter o carrinho do Local Storage
function getCart() {
    const cart = localStorage.getItem('shoppingCart');
    return cart ? JSON.parse(cart) : [];
}

// Função para salvar o carrinho no Local Storage
function saveCart(cart) {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartBadge();
}

// Função para adicionar um item ao carrinho
function addItem(product) {
    const cart = getCart();
    
    // Um item é considerado o mesmo se tiver o mesmo ID e a mesma personalização.
    const existingItem = cart.find(item => 
        item.id === product.id &&
        item.customization === product.customization
    );

    const quantityToAdd = (product.quantity && Number(product.quantity)) ? Number(product.quantity) : 1;

    if (existingItem) {
        // Se o item já existe (mesmo ID e personalização), apenas aumenta a quantidade.
        existingItem.quantity += quantityToAdd;
    } else {
        // Se for um produto novo ou com personalização diferente, adiciona como um novo item.
        product.quantity = quantityToAdd;
        cart.push(product);
    }
    
    saveCart(cart);
    window.location.href = 'carrinho.html';
}

// Função para remover um item do carrinho pelo seu índice no array
function removeItem(itemIndex) {
    let cart = getCart();
    const index = parseInt(itemIndex, 10);
    if (!isNaN(index) && index > -1 && index < cart.length) {
        cart.splice(index, 1);
    }
    saveCart(cart);
    renderCart();
}

// Função para atualizar a quantidade de um item pelo seu índice
function updateQuantity(itemIndex, newQuantity) {
    const index = parseInt(itemIndex, 10);
    const quantity = parseInt(newQuantity, 10);

    if (isNaN(quantity) || quantity < 0) {
        renderCart();
        return;
    }

    let cart = getCart();
    if (!isNaN(index) && index > -1 && index < cart.length) {
        if (quantity === 0) {
            removeItem(index);
        } else {
            cart[index].quantity = quantity;
            saveCart(cart);
            renderCart();
        }
    }
}

// Função para atualizar o contador do carrinho no header
function updateCartBadge() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
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
    if (!cartTableBody || !cartTotalElement) return;

    const cart = getCart();
    cartTableBody.innerHTML = '';

    let total = 0;

    if (cart.length === 0) {
        cartTableBody.innerHTML = '<tr><td colspan="5" class="text-center">Seu carrinho está vazio.</td></tr>';
    } else {
        cart.forEach((item, index) => {
            const price = Number(item.price) || 0;
            const quantity = Number(item.quantity) || 0;
            const subtotal = price * quantity;
            total += subtotal;

            const customizationText = item.customization ? `<small class="text-primary d-block">Personalização: ${item.customization}</small>` : '';

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <div class="d-flex align-items-center">
                        <img src="${item.image}" alt="${item.name}" class="img-fluid rounded" style="width: 80px;">
                        <div class="ms-3">
                            <h6 class="mb-0">${item.name}</h6>
                            <small class="text-muted">${item.description || ''}</small>
                            ${customizationText}
                        </div>
                    </div>
                </td>
                <td>R$ ${price.toFixed(2).replace('.', ',')}</td>
                <td class="text-center">
                    <input type="number" class="form-control form-control-sm d-inline-block quantity-input" style="width: 70px;"
                           value="${quantity}" min="0" data-index="${index}">
                </td>
                <td class="text-end">R$ ${subtotal.toFixed(2).replace('.', ',')}</td>
                <td class="text-center">
                    <button class="btn btn-danger btn-sm remove-btn" data-index="${index}">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </td>
            `;
            cartTableBody.appendChild(row);
        });
    }

    cartTableBody.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (event) => {
            updateQuantity(event.target.dataset.index, event.target.value);
        });
    });

    cartTableBody.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            removeItem(event.currentTarget.dataset.index);
        });
    });

    cartTotalElement.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    updateCartBadge();
}

// Inicializa o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    console.log("Cart.js DOMContentLoaded fired."); // <-- DEBUG LOG 1

    updateCartBadge();
    if (document.querySelector('#cartTableBody')) {
        renderCart();
    }

    // Adiciona alerta para o ícone do carrinho
    const cartIcon = document.querySelector('.bi-cart-fill');
    console.log("Cart icon element:", cartIcon); // <-- DEBUG LOG 2

    const cartIconLink = cartIcon ? cartIcon.closest('a') : null;
    console.log("Cart icon link element:", cartIconLink); // <-- DEBUG LOG 3
    if (cartIconLink) {
      console.log("Cart icon link href:", cartIconLink.href); // <-- DEBUG LOG 4
    }


    if (cartIconLink && cartIconLink.href.includes('carrinho.html')) {
        console.log("Attaching click listener to cart icon."); // <-- DEBUG LOG 5
        cartIconLink.addEventListener('click', (event) => {
            event.preventDefault();
            console.log("Cart icon clicked!"); // <-- DEBUG LOG 6
            alert("Suspenso temporariamente");
            alert("Para orçamentos e pedidos, entre em contato através do nosso chatbot.");
        });
    } else {
        console.log("Could not find cart icon link or href does not match."); // <-- DEBUG LOG 7
    }
});
