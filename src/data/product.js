let products = JSON.parse(localStorage.getItem('products')) || [];

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = parseFloat(document.getElementById('price').value);
    const available = document.querySelector('input[name="available"]:checked').value;

    const newProduct = { name, description, price, available };
    products.push(newProduct);
    products.sort((a, b) => a.price - b.price);
    saveProductsToLocalStorage();
});

function displayProducts() {
    document.getElementById('fieldsetShow').classList.add('d-none');
    document.getElementById('productList').classList.remove('d-none');
    const tableBody = document.getElementById('productsTableBody');
    tableBody.innerHTML = '';
    products.forEach(product => {
        const row = `<tr><td>${product.name}</td><td>${product.price.toFixed(2)}</td><td>${product.available}</td></tr>`;
        tableBody.innerHTML += row;
    });
    clearForm();
}

function showForm() {
    document.getElementById('fieldsetShow').classList.remove('d-none');
    document.getElementById('productList').classList.add('d-none');
}

function saveProductsToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

function clearForm() {
    document.getElementById('productForm').reset();
}

function clearLocalStorage() {
    localStorage.clear();
    products = [];
    displayProducts();
}

