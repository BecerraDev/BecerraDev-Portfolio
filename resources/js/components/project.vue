<template>

  <section class="project-section">
    <div id="projects" class="section px-3 px-lg-4 pt-5">
      <div class="container-narrow">
        <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <div class="text-center mb-5">
                            <h2 class="marker marker-center">Proyectos</h2>
                        </div>
                        <p class="content ">
                          En esta sección, presento una colección de proyectos que destacan mi experiencia y habilidades en desarrollo. Cada proyecto incluye un video demostrativo reproducido en la misma pagina y enlace al repositorio en GitHub para explorar más detalles y contribuir.
                        </p>
                    </div>
                </div>


               
        <div class="row">

          <!-- ETPEL -->

          <div class="col-12 col-md-4 mb-4"  data-aos="fade-right" data-aos-delay="100">
            <div class="image-container">
              <img src="/public/images/etpel-1.png" class="img-fluid" alt="web design" />
              <div class="overlay">
                <button class="btn custom-button btn-primary mb-4" onclick="openModal('oYBC7r5oSzk')">                     
                  <i class="fas fa-play-circle mr-1"></i> Reproducir</button>
                    <a href="https://github.com/BecerraDev/ETPEL-Portal" class="btn custom-button btn-primary">
                      <i class="fab fa-github mr-1"></i> Repositorio
                    </a>
              </div>
            </div>
            <div class="description">
              <h4> ETPEL <div class="text-muted text-small purple"> CIISA </div>
              </h4>
              <p> Plataforma para conectar docentes y estudiantes con publicaciones filtradas, mensajería tipo correo y
                herramientas de colaboración educativa.</p>
              <div class="icons project-icons">
                <i class="fab fa-node-js mr-2" title="Node.js"></i>
                <i class="fab fa-bootstrap mr-2" title="Bootstrap"></i>
                <i class="fas fa-database mr-2" title="Database"></i>
                <i class="fab fa-css3-alt mr-2" title="CSS"></i>
                <i class="fab fa-js mr-2" title="JavaScript"></i>
                <i class="fab fa-express mr-2" title="Express"></i>
              </div>
            </div>
          </div>

          <!-- LARERATASKER -->

          <div class="col-12 col-md-4"  data-aos="fade-up" data-aos-delay="100">
            <div class="image-container">
              <img src="/public/images/etpel-1.png" class="img-fluid" alt="web design" />
              <div class="overlay">
                    <button class="btn custom-button btn-primary mb-4" onclick="openModal('EQY9-f_8iTs')">                     
                      <i class="fas fa-play-circle mr-1"></i> Reproducir</button>
                  <a href="#" class="btn custom-button btn-primary">
                    <i class="fab fa-github mr-1"></i> Repositorio
                  </a>
              </div>
            </div>
            <div class="description">
              <h4> LABATASKER <div class="text-muted text-small purple"> CIISA </div>
              </h4>
              <p> Plataforma para conectar docentes y estudiantes con publicaciones filtradas, mensajería tipo correo y
                herramientas de colaboración educativa.</p>
              <div class="icons project-icons">
                <i class="fab fa-node-js mr-2" title="Node.js"></i>
                <i class="fab fa-bootstrap mr-2" title="Bootstrap"></i>
                <i class="fas fa-database mr-2" title="Database"></i>
                <i class="fab fa-css3-alt mr-2" title="CSS"></i>
                <i class="fab fa-js mr-2" title="JavaScript"></i>
                <i class="fab fa-express mr-2" title="Express"></i>
              </div>
            </div>
          </div>



          <!-- AGREGAR MAS PROYECTOS -->


          <div class="col-12 col-md-4" data-aos="fade-left" data-aos-delay="100">
            <div class="image-container">
              <img src="/public/images/etpel-1.png" class="img-fluid" alt="web design" />
              <div class="overlay">
                  <a href="#" class="btn custom-button btn-primary mb-4">
                    <i class="fas fa-play-circle mr-1"></i> Reproducir
                  </a>
                  <a href="#" class="btn custom-button btn-primary">
                    <i class="fab fa-github mr-1"></i> Repositorio
                  </a>
              </div>
            </div>
            <div class="description">
              <h4> ETPEL <div class="text-muted text-small purple"> CIISA </div>
              </h4>
              <p> Plataforma para conectar docentes y estudiantes con publicaciones filtradas, mensajería tipo correo y
                herramientas de colaboración educativa.</p>
              <div class="icons project-icons">
                <i class="fab fa-node-js mr-2" title="Node.js"></i>
                <i class="fab fa-bootstrap mr-2" title="Bootstrap"></i>
                <i class="fas fa-database mr-2" title="Database"></i>
                <i class="fab fa-css3-alt mr-2" title="CSS"></i>
                <i class="fab fa-js mr-2" title="JavaScript"></i>
                <i class="fab fa-express mr-2" title="Express"></i>
              </div>
            </div>
          </div>





          <!-- Finaliza Contenido-->
        </div>
      </div>
    </div>





<!-- Modal -->
      <div id="myModal" class="modal">
          <div class="modal-content">
              <!-- Botón de cerrar -->
              <span class="close" id="closeModalButton" onclick="closeModal()">&times;</span>
              <!-- Contenedor del video -->
              <div class="video-container">
                  <!-- Insertar el reproductor de YouTube -->
                  <iframe id="videoPlayer" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
              </div>
          </div>
      </div>






















  </section>




</template>

<style scoped>
.project-icons {
  margin-top: 10px;
  /* Ajusta el margen superior si es necesario */

}

.project-icons i {
  margin-right: 10px;
  /* Ajusta el margen derecho entre los iconos */
  font-size: 1.2rem;
  /* Tamaño personalizado */
  color: #002147;
  /* Color del texto */

}

.purple {
  color: #6C63FF;
  /* Color del texto */
}

.custom-button {
  color: white;
  /* Color del texto */
  background-color: #6C63FF;
  /* Cambia el color de fondo al pasar el cursor */
  border-color: #6C63FF;
  /* Color del borde */
}

.custom-button:hover {
  color: white;
  /* Cambia el color del texto al pasar el cursor */
}

p {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

a {
  font-family: 'Space Grotesk', sans-serif;

}

@media (max-width: 768px) {
  .project-icons {
    margin-top: 10px;
    /* Ajuste de margen para dispositivos medianos */
  }

  .custom-button {
    padding: 8px 20px;
    /* Ajuste de tamaño de botón */
    font-size: 14px;
    /* Ajuste de tamaño de fuente del botón */
  }
}

.image-container {
  position: relative;
  overflow: hidden;
}

.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image-container:hover .overlay {
  opacity: 1;
}

.description {
  max-height: 230px;
  /* Altura máxima para la descripción */
  overflow: hidden;
  padding: 20px;
  background-color: #f8f9fa;
  /* Color de fondo para la descripción */
  border: 1px solid #e9ecef;
  /* Borde ligero */
  border-top: none;
  /* Sin borde en la parte superior */
  border-bottom-left-radius: 8px;
  /* Bordes redondeados solo en la parte inferior izquierda */
  border-bottom-right-radius: 8px;
  /* Bordes redondeados solo en la parte inferior derecha */
  margin-top: -10px;
  /* Ajuste negativo para superponer ligeramente la descripción sobre la imagen */
  transition: max-height 0.3s ease;
  /* Transición suave para cambiar la altura máxima */
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
}

.description.expanded {
  max-height: none;
  /* Cuando se expande la descripción */

}

.letra {
  font-size: 14px;
}






</style>




<script>

export default {
  name: 'Project',
};
</script>