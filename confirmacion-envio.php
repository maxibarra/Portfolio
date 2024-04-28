<?php
$pg = "contacto";

?>
<!DOCTYPE html>
<html lang="es" class="h-100">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inicio</title>
  <link rel="stylesheet" href="css/fontawesome/css/all.min.css">
  <link rel="stylesheet" href="css/fontawesome/css/fontawesome.min.css">
  <link rel="stylesheet" href="css/bootstrap/css/bootstrap.min.css">
  <script src="css/bootstrap/js/bootstrap.bundle.min.js"></script>
  <link rel="icon" href="images/favicon.ico">
  <link rel="stylesheet" href="css/estilos.css">
</head>

<body id="contacto" class="d-flex flex-column h-100">
  <header class="container">
    <?php include_once("menu.php"); ?>
  </header>
  <main class="container">
    <div class="row">
      <div class="col-12 pt-1 pb-4 pt-sm-5">
        <h1 class="py-1">
          Gracias por contactarte,
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 pb-5">
        <p>Te estaré respondiendo a la brevedad.</p>
      </div>
    </div>
  </main>

  <footer class="container mt-auto pb-sm-4">
    <?php include_once("footer.php"); ?>
  </footer>
</body>

</html>