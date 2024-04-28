<?php

$pg = "contacto";

if ($_POST) {
  $nombre = $_POST["txtNombre"];
  $correo = $_POST["txtCorreo"];
  $telefono = $_POST["txtTelefono"];
  $mensaje = $_POST["txtMensaje"];

  if($nombre != "" && $correo != "" && $telefono != "" && $mensaje != "") {
    //varios destinatarios
    $para = "maxi.8379@gmail.com";
    $titulo = "Recibiste un mensaje desde tu Web";

    //mensaje
    $cuerpo = ";
  Nombre: $nombre <br>;
  Correo: $correo <br>;
  Telefono: $telefono <br>;
  Mensaje: $mensaje <br>;
  ";

    // Para enviar un correo HTML, debe establecerse la cabecera Content-type
    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    //cabeceras adicionales
    $cabeceras .= 'To: maxi.8379@gmail.com' . "\r\n";
    //$cabeceras .= 'From: contacto@maxiibarra.com' . "\r\n";

    //Enviarlo
    //habilitar el mail si se sube a un servidor web
    //mail($para,$titulo,$cuerpo, $cabeceras);
    header("Location:confirmacion-envio.php");
  }
  
  
}
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
              <input type="email" name="txtCorreo" id="txtCorreo" placeholder="Correo" class="form-control shadow">
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
  <footer class="container mt-auto pb-sm-4">
    <?php include_once("footer.php"); ?>
  </footer>
</body>

</html>