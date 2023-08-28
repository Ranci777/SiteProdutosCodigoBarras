// Captura o botão "Adicionar ao Carrinho"
const addToCartButton = document.querySelectorAll(".product-card button");
// Inicializa o contador do carrinho
let cartCount = 0;
// Adiciona um evento de clique a todos os botões "Adicionar ao Carrinho"
addToCartButton.forEach((button) => {
  button.addEventListener("click", function () {
    const product = this.parentElement; // O elemento pai do botão é a div .product-card

    // Extrai informações do produto
    const productName = product.querySelector("h2").textContent;
    const price = parseFloat(
      product.querySelector(".price").textContent.replace("R$", "")
    ); // Converte o preço para float
    const quantity = parseInt(product.querySelector("#quantity").value);

    // Chama a função para adicionar o item ao carrinho
    addToCart(quantity, productName, price);

    // Incrementa o contador do carrinho
    cartCount += quantity;
    updateCartCount();
  });
});

// Função para atualizar o contador do carrinho
function updateCartCount() {
  const cartCountElement = document.getElementById("cartcount");
  cartCountElement.textContent = cartCount;
}

// Função para adicionar um item ao carrinho
function addToCart(quantity, productName, price) {
  alert("Produto adicionado ao carrinho.");
  // Cria o elemento do item do carrinho
  const cartItem = document.getElementById("cart").content.cloneNode(true);
  cartItem.classList.add("cart");
  cartItem.innerHTML = `
    <img src="img/${productName}.jpg" alt="${productName}" />
    <div class="cart-item-info">
      <h4>${productName}</h4>
      <h5>R$ ${price.toFixed(2)}</h5>
      <span class="remove-item">Remover</span>
    </div>
    <div class="cart-item-quantity">
      <i class="fas fa-chevron-up"></i>
      <p class="item-amount">${quantity}</p>
      <i class="fas fa-chevron-down"></i>
    </div>
  `;
  // Adiciona o elemento do item do carrinho ao carrinho
  const cart = document.getElementById("cart");
  cart.appendChild(cartItem);
}
