<?php

$pg = "contacto";

?>
<!DOCTYPE html>
<html lang="es" class="h-100">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contacto</title>
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
      <div class="col-12 pt-3 pb-5">
        <h1>Contacto</h1>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6">
          <p>Te invito a que te contactes enviandome un mensaje o bien por whatsapp.</p>
        </div>
        <div class="col-12 col-sm-6">
          <form action="" method="POST">
            <div class="pb-3">
              <input type="text" name="txtNombre" id="txtNombre" placeholder="Nombre" class="form-control shadow">
            </div>
            <div class="pb-3">
              <input type="email" name="txtEmail" id="txtEmail" placeholder="Correo" class="form-control shadow">
            </div>
            <div class="pb-3">
              <input type="tel" name="txtTelefono" id="txtTelefono" placeholder="Teléfono/whatsapp" class="form-control shadow">
            </div>
            <div class="pb-3">
              <textarea name="txtMensaje" id="txtMensaje" placeholder="Escribe aqui tu mensaje" class="form-control shadow"></textarea>
            </div>
            <div>
              <button type="submit" id="btnEnviar" name="btnEnviar" class="btn btn-blanco">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
  <footer class="container mt-auto py-4">
    <div class="row">
      <div class="col-12 col-sm-3">
        <a href="https://github.com" target="_blank" title="Github"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/maximiliano-ibarra/" target="_blank" title="Github"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
      <div class="col-12 col-sm-3">
        sponsor <a href="https://depcsuite.com" target="_blank">DePC Suite</a>
      </div>
      <div class="col-12 col-sm-3">
        <a href="mailto:maxi.8379@gmail.com">maxi.8379@gmail.com</a>
      </div>
      <div class="col-12 col-sm-3">
        <a href="https://api.whatsapp.com/send?phone=+541139476425" aria-placeholder="Enviame tu consulta por aqui!" target="_blank" title="whatsapp"><i class="fab fa-whatsapp px-3 pt-3 pb-4"></i></a>
      </div>

    </div>
  </footer>
</body>

</html>