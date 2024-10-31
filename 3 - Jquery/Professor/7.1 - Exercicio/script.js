$(document).ready(function () {
    const baseUrl = 'https://open-souce.azurewebsites.net/api/product'; // substitua pela URL da API

    // Função para carregar a lista de produtos
    function loadProducts() {
        $.get(baseUrl, function (products) {
            $('#productList').empty();
            products.forEach(product => {
                $('#productList').append(`
                       <li data-id="${product.id}">
                           SKU: ${product.sku}, Título: ${product.title}, Preço: ${product.price}, Quantidade: ${product.quantity}
                       </li>
                   `);
            });
        });
    }

    // Criar Produto
    $('#createProduct').click(function () {
        const sku = $('#sku').val();
        const title = $('#title').val();
        const description = $('#description').val();
        const price = parseFloat($('#price').val());
        const quantity = parseInt($('#quantity').val());
        const total = price * quantity;

        $.post(baseUrl, { sku, title, description, price, quantity, total }, function (newProduct) {
            alert('Produto criado com sucesso!');
            loadProducts();
        });
    });

    // Atualizar Produto
    $('#updateProduct').click(function () {
        const id = $('#productId').val();
        const sku = $('#sku').val();
        const title = $('#title').val();
        const description = $('#description').val();
        const price = parseFloat($('#price').val());
        const quantity = parseInt($('#quantity').val());
        const total = price * quantity;

        $.ajax({
            url: `${baseUrl}/${id}`,
            method: 'PUT',
            data: { sku, title, description, price, quantity, total },
            success: function () {
                alert('Produto atualizado com sucesso!');
                loadProducts();
            }
        });
    });

    // Excluir Produto
    $('#deleteProduct').click(function () {
        const id = $('#productId').val();
        $.ajax({
            url: `${baseUrl}/${id}`,
            method: 'DELETE',
            success: function () {
                alert('Produto excluído com sucesso!');
                loadProducts();
            }
        });
    });

    // Inicializar lista de produtos
    loadProducts();
});