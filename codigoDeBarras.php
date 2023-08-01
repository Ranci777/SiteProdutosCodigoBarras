<!DOCTYPE html>
<html lang="pt-br">
<head>
  <title>Gerador de Código de Barras</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <?php
  // Verifica se o formulário foi enviado via POST
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se o campo "codigo" foi preenchido no formulário
    if (isset($_POST["codigo"]) && !empty($_POST["codigo"])) {
      // Recupera o valor do campo "codigo"
      $codigo = $_POST["codigo"];

      // Lógica para gerar a imagem do código de barras (utilizando a biblioteca GD neste exemplo)
      $image = imagecreatetruecolor(200, 100);
      $bgColor = imagecolorallocate($image, 255, 255, 255);
      $barColor = imagecolorallocate($image, 0, 0, 0);
      imagefilledrectangle($image, 0, 0, 200, 100, $bgColor);
      imagestring($image, 5, 10, 50, $codigo, $barColor);
      ob_start();
      imagepng($image);
      // Exibe a imagem do código de barras no HTML
      echo '<div class="barcode-image">';
      echo '<img src="data:image/png;base64,' . base64_encode($imageData) . '" alt="Código de Barras">';
      echo '</div>';

      // Exibe os resultados do código de barras
      echo '<div>';
      echo '<h3>Resultado:</h3>';
      echo '<div class="barcode">';
      echo '<div>' . substr($codigo, 0, 6) . '</div>';
      echo '<div>' . substr($codigo, 6, 6) . '</div>';
      echo '</div>';
      echo '</div>';
    } else {
      // Exibe uma mensagem de erro caso o campo "codigo" não tenha sido preenchido
      echo "<p>Por favor, preencha o campo Código de Barras.</p>";
    }


  }
  ?>
</body>
</html>
