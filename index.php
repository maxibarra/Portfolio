<?php 

$pg = "inicio";

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

<body id="inicio" class="d-flex flex-column h-100">
  <header class="container">
   <?php include_once("menu.php"); ?>
  </header>
  <main class="container">
    <div class="row">
      <div class="col-12 mt-4 text-center div-cohete">
        <a href="proyectos.php">
          <img src="images/cohete.svg">
        </a>
      </div>
    </div>
    <div class="row">
        <div class="col-12 col-sm-6 my-4 mt-sm-5 text-center mb-3 offset-sm-3">
          <p class="py-1 shadow"> 
            Bienvenid@ a mi sitio web sobre desarrollo de sistemas
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center ">
          <a href="proyectos.php" class="btn btn-blanco shadow">Conoce mis proyectos</a>
        </div>
      </div>
  </main>

  <footer class="container mt-auto py-4">
    <div class="row">
      <div class="col-12 col-sm-3">
        <a href="https://github.com" target="_blank" title="Github"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/maximiliano-ibarra/" target="_blank" title="Github"><i
            class="fab fa-linkedin-in"></i></a>
      </div>
      
      <div class="col-12 col-sm-3">
        sponsor <a href="https://depcsuite.com">DePC Suite</a>
      </div>
      <div class="col-12 col-sm-3">
        <a href="mailto:maxi.8379@gmail.com">maxi.8379@gmail.com</a>
      </div>
      <div class="col-12 col-sm-3">
        <a href="https://api.whatsapp.com/send?phone=+541139476425" target="_blank" title="whatsapp"><i
            class="fab fa-whatsapp px-3 pt-3 pb-4"></i></a>
      </div>

    </div>
  </footer>
</body>

</html>