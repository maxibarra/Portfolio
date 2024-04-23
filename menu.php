 <nav class="navbar navbar-expand-lg mb-4">
   <div class="container-fluid">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <a class="nav-link px-4 inicio <?php echo ($pg == "inicio") ? "active" : ""; ?> " href="index.php">Inicio</a>
         </li>
         <li class="nav-item">
           <a class="nav-link px-4 <?php echo ($pg == "sobre-mi") ? "active" : ""; ?> " href="sobre-mi.php">Sobre Mi</a>
         </li>
         <li class="nav-item">
           <a class="nav-link px-4 <?php echo ($pg == "proyectos") ? "active" : ""; ?> " href="proyectos.php">Proyectos</a>
         </li>
         <li class="nav-item">
           <a class="nav-link px-4 <?php echo ($pg == "contacto") ? "active" : ""; ?> " href="contacto.php">Contacto</a>
         </li>
       </ul>
       <ul class="navbar-nav">
         <li class="float-sm-end">
           <a class="btn btn-rojo" href="contacto.php">Descargar Mi CV <i class="fa-solid fa-download"></i></a>
         </li>
       </ul>
     </div>
   </div>
 </nav>
 </nav>