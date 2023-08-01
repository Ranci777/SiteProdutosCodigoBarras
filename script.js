function addToCart(productName, price) {
  // Aqui você pode implementar a lógica para adicionar o produto ao carrinho de compras.
  // Por exemplo, você pode usar uma API para enviar os dados para um servidor ou apenas
  // exibir uma mensagem ao usuário de que o produto foi adicionado ao carrinho.
  alert(`Produto "${productName}" adicionado ao carrinho por R$ ${price}.`);
}
dispatchEvent(new Event("load"));
function gerarCodigoDeBarras() {
  var codigo = document.getElementById("codigo").value;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("barcodeImage").src = xmlhttp.responseText;
    }
    xmlhttp.open("POST", "codigoDeBarras.php", true);
    xmlhttp.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    xmlhttp.send("codigo=" + codigo);
    var codigo = document.getElementById("codigo").value;
    // Lógica para gerar a imagem do código de barras (utilizando a biblioteca GD neste exemplo)
    var image = new Image();
    image.onload = function () {
      document.getElementById("barcodeImage").src = image.src;
      image.src = "gerarCodigoDeBarras.php?codigo=" + codigo;
    };
  };
}
function enviado(numberProduct, codigoDeBarras) {
  // Aqui você pode implementar a lógica para adicionar o produto ao carrinho de compras.
  // Por exemplo, você pode usar uma API para enviar os dados para um servidor ou apenas
  // exibir uma mensagem ao usuário de que o produto foi adicionado ao carrinho.
  alert(
    `Produto "${numberProduct}" adicionado ao carrinho por R$ ${codigoDeBarras}.`
  );
}
