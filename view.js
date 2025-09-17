// view.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        const product = products.find(p => p.id === productId);

        if (product) {
            document.getElementById('productImage').src = product.image;
            document.getElementById('productImage').alt = product.name;
            document.getElementById('productName').textContent = product.name;
            document.getElementById('productDescription').textContent = product.description;
            document.getElementById('productPrice').textContent = product.price.toFixed(2).replace('.', ',');

            // Populate quantity options (can be customized per product if needed)
            const productQuantitySelect = document.getElementById('productQuantity');
            productQuantitySelect.innerHTML = ''; // Clear existing options
            // Default options, can be made dynamic based on product type
            const defaultQuantities = [
                { value: 1, text: '1 unidade' },
                { value: 25, text: '25 unidades' },
                { value: 50, text: '50 unidades' },
                { value: 100, text: '100 unidades' }
            ];
            defaultQuantities.forEach(qty => {
                const option = document.createElement('option');
                option.value = qty.value;
                option.textContent = qty.text;
                productQuantitySelect.appendChild(option);
            });

            // Personalization info
            document.getElementById('basicCustomizationInfo').textContent = product.customization.basic;
            document.getElementById('advancedCustomizationInfo').textContent = product.customization.advanced;

            // Add to Cart button logic
            document.getElementById('addToCartBtn').addEventListener('click', () => {
                const quantity = parseInt(productQuantitySelect.value);
                const basicCustomization = document.getElementById('basicCustomizationField').value;

                const itemToAdd = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    image: product.image,
                    description: product.description,
                    customization: basicCustomization // Add basic customization to the item
                };
                addItem(itemToAdd); // Call addItem from cart.js
            });

        } else {
            // Product not found
            document.querySelector('.container').innerHTML = '<h2 class="text-center text-danger">Produto não encontrado!</h2>';
        }
    } else {
        // No product ID in URL
        document.querySelector('.container').innerHTML = '<h2 class="text-center text-danger">Nenhum produto especificado.</h2>';
    }
});