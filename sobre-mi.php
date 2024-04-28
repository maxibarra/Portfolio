<?php

$pg = "sobre-mi";

?>
<!DOCTYPE html>
<html lang="es" class="h-100">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sobre Mi</title>
  <link rel="stylesheet" href="css/fontawesome/css/all.min.css">
  <link rel="stylesheet" href="css/fontawesome/css/fontawesome.min.css">
  <link rel="stylesheet" href="css/bootstrap/css/bootstrap.min.css">
  <script src="css/bootstrap/js/bootstrap.bundle.min.js"></script>
  <link rel="icon" href="images/favicon.ico">
  <link rel="stylesheet" href="css/estilos.css">
</head>

<body id="sobre-mi" class="d-flex flex-column h-100">
  <header class="container">
    <?php include_once("menu.php"); ?>
  </header>
  <main>
    <section id="bio" class="container">
      <div class="row">
        <div class="col-12 col-sm-7">
          <h1 class="col-12 py-5">Sobre Mi</h1>
          <p>Mi nombre es Maxi. Soy desarrollador web Frontend,sigo aprendiendo para desarrollarme como fullstack dev.
            Buscando experiencia en el area de la tecnologia. </p>
          <a href="contacto.html" class="btn btn-rojo my-5 d-none d-sm-block w-25">Enviar Mensaje</a>
        </div>
        <div class="col-10 col-sm-3 py-5 pe-5 d-none d-sm-block">
          <img src="images/perfil-ejem.avif" alt="Maxi" class="img-fluid">
        </div>
        <div class="col-6 d-sm-block d-sm-none py-3">
          <img src="images/perfil-ejem.avif" alt="Maxi" class="img-fluid">
        </div>
        <div class="col-6 d-sm-block d-sm-none py-3">
          <a href="contacto.php" class="btn btn-rojo my-5 d-sm-block d-sm-none">Enviar Mensaje</a>
        </div>

      </div>
    </section>
    <section id="stack">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="py-5">Stack Tecnológico</h2>
          </div>
          <div class="col-6 col-sm-2">
            <div class="tecnologia mb-4">
              <h3 class="pt-5 pb-1">Javascript</h3>
              <i class="fa-brands fa-js pb-5"></i>
            </div>
          </div>
          <div class="col-6 col-sm-2">
            <div class="tecnologia mb-4">
              <h3 class="pt-5 pb-1">PHP</h3>
              <i class="fa-brands fa-php pb-5"></i>
            </div>
          </div>
          <div class="col-6 col-sm-2">
            <div class="tecnologia mb-4">
              <h3 class="pt-5 pb-1">HTML</h3>
              <i class="fa-brands fa-html5 pb-5"></i>
            </div>
          </div>
          <div class="col-6 col-sm-2">
            <div class="tecnologia mb-4">
              <h3 class="pt-5 pb-1">API REST</h3>
              <i class="fa-solid fa-gears pb-5"></i>
            </div>
          </div>
          <div class="col-6 col-sm-2">
            <div class="tecnologia mb-4">
              <h3 class="pt-5 pb-1">Laravel</h3>
              <i class="fa-brands fa-laravel pb-5"></i>
            </div>
          </div>
          <div class="col-6 col-sm-2">
            <div class="tecnologia mb-4">
              <h3 class="pt-5 pb-1">Bootstrap</h3>
              <i class="fa-brands fa-bootstrap pb-5"></i>
            </div>
          </div>
          <div class="col-6 col-sm-2">
            <div class="tecnologia mb-4">
              <h3 class="pt-5 pb-1">MySQL</h3>
              <i class="fa-solid fa-database pb-5"></i>
            </div>
          </div>
          <div class="col-6 col-sm-2">
            <div class="tecnologia mb-4">
              <h3 class="pt-5 pb-1">CSS</h3>
              <i class="fa-brands fa-css3-alt pb-5"></i>
            </div>
          </div>
          <div class="col-6 col-sm-2">
            <div class="tecnologia mb-4">
              <h3 class="pt-5 pb-1">Git</h3>
              <i class="fa-brands fa-git pb-5"></i>
            </div>
          </div>
          <div class="col-6 col-sm-2">
            <div class="tecnologia mb-4">
              <h3 class="pt-5 pb-1">React Js</h3>
              <i class="fa-brands fa-react pb-5"></i>
            </div>
          </div>
          <div class="col-6 col-sm-2">
            <div class="tecnologia mb-4">
              <h3 class="pt-5 pb-1">Mercado Pago</h3>
              <i class="fa-solid fa-wallet pb-5"></i>
            </div>
          </div>
          <div class="col-6 col-sm-2">
            <div class="tecnologia mb-4">
              <h3 class="pt-5 pb-1">Apache</h3>
              <i class="fa-solid fa-server pb-5"></i>
            </div>
          </div>
          <div class="col-6 col-sm-2">
            <div class="tecnologia mb-4">
              <h3 class="pt-5 pb-1">Paypal</h3>
              <i class="fa-brands fa-paypal pb-5"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="experiencia" class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="pt-5 pb-4">Experiencia Laboral</h2>
        </div>
      </div>
      <div class="row shadow">
        <div class="col-sm-2 d-none d-sm-block p-5">
          <img src="images/sin-logo.png" alt="Logo de Empresa" class="img-fluid">
        </div>
        <div class="col-sm-10 col-12 my-3">
          <h3>Puesto en la empresa</h3>
          <h4>Nombre de la empresa</h4>
          <h5>Desde - Hasta</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque officia magni, maiores veritatis inventore
            eligendi laborum numquam tempore aliquam non.</p>
        </div>
        <div class="col-sm-2 d-none d-sm-block p-5">
          <img src="images/sin-logo.png" alt="Logo de Empresa" class="img-fluid">
        </div>
        <div class="col-sm-10 col-12 my-3">
          <h3>Puesto en la empresa 2</h3>
          <h4>Nombre de la empresa</h4>
          <h5>Desde - Hasta</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque officia magni, maiores veritatis inventore
            eligendi laborum numquam tempore aliquam non.</p>
        </div>
        <div class="col-sm-2 d-none d-sm-block p-5">
          <img src="images/sin-logo.png" alt="Logo de Empresa" class="img-fluid">
        </div>
        <div class="col-sm-10 col-12 my-3">
          <h3>Puesto en la empresa 3</h3>
          <h4>Nombre de la empresa</h4>
          <h5>Desde - Hasta</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque officia magni, maiores veritatis inventore
            eligendi laborum numquam tempore aliquam non.</p>
        </div>
      </div>
    </section>
    <section id="formacion" class="container">
      <div class="row">
        <div class="col-12 pt-5 pb-4">
          <h2>Formación Academica</h2>
        </div>
      </div>
      <div class="row shadow bg-white rounded p-1">
        <div class="col-12 col-sm-6">
          <div class="row">
            <div class="col-2 py-3 my-auto d-none d-sm-block">
              <img src="images/teclab.png" alt="teclab" class="img-fluid">
            </div>
            <div class="col-12 col-sm-10 p-3">
              <h3>Tecnicatura Superior En Programación</h3>
              <h4>Instituto Tecnico Superior TECLAB</h4>
              <h5>2018-2019</h5>
              <p>Materias aprobadas 50%</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="formacion" class="container mb-5">
      <div class="row">
        <div class="col-12 pt-5 pb-4">
          <h2>Cursos de desarrollo profesional</h2>
        </div>
      </div>
      <div class="row shadow bg-white rounded p-1">
        <div class="col-12 col-sm-6">
          <div class="row">
            <div class="col-2 py-3 my-auto d-none d-sm-block">
              <img src="images/dePC.png" alt="dePCsuite" class="img-fluid baw">
            </div>
            <div class="col-12 col-sm-10 p-3">
              <h3>Desarrollo Web Full Stack</h3>
              <h4>DePc Suite</h4>
              <h5>2024</h5>

            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="row">
            <div class="col-2 py-3 my-auto d-none d-sm-block">
              <img src="images/coder.jpg" alt="coder" class="img-fluid">
            </div>
            <div class="col-12 col-sm-10 p-3">
              <h3>Desarrollo Web</h3>
              <h4>CoderHouse</h4>
              <h5>2021</h5>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="row">
            <div class="col-2 py-3 my-auto d-none d-sm-block">
              <img src="images/coder.jpg" alt="coderHouseJs" class="img-fluid">
            </div>
            <div class="col-12 col-sm-10 p-3">
              <h3>Javascript</h3>
              <h4>CoderHouse</h4>
              <h5>2021</h5>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="row">
            <div class="col-2 py-3 my-auto d-none d-sm-block">
              <img src="images/coder.jpg" alt="coderReact" class="img-fluid">
            </div>
            <div class="col-12 col-sm-10 p-3">
              <h3>React Js</h3>
              <h4>CoderHouse</h4>
              <h5>2021</h5>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="row">
            <div class="col-2 py-3 my-auto d-none d-sm-block">
              <img src="images/udemy.png" alt="udemy" class="img-fluid">
            </div>
            <div class="col-12 col-sm-10 p-3">
              <h3>React y TypeScript</h3>
              <h4>Udemy</h4>
              <h5>2024</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="idiomas">
      <div class="container">
        <div class="row py-5 mx-0">
          <div class="col-sm-6 col-12 pb-3 pb-sm-0">
            <div class="row mr-sm-1 bg-white card-idioma shadow me-sm-1">
              <div class="col-4 text-center card">
                <i class="fa-regular fa-comments"></i>
              </div>
              <div class="col-8 p-4 pb-3">
                <h2>IDIOMAS</h2>
                <ul>
                  <li>ESPAÑOL - Nativo</li>
                  <li>INGLES - Basico A2 </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-12">
            <div class="row mr-sm-1 bg-white card-idioma shadow me-sm-1">
              <div class="col-4 text-center card">
                <i class="fa-solid fa-table-tennis-paddle-ball"></i>
              </div>
              <div class="col-8 p-4 pb-3">
                <h2>HOBBIES</h2>
                <ul>
                  <li> Futbol</li>
                  <li> Videojuegos </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer class="container mt-auto pb-sm-4">
    <?php include_once("footer.php"); ?>
  </footer>
</body>

</html>