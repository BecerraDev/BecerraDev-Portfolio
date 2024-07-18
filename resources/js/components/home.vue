<template>
    <section class="home-style top color" id="home">
        <div class="cover">
            <div class="container px-3">
                <div class="row">
                    <div class="col-lg-6 p-2">
                        <img
                            class="img-fluid"
                            src="/public/images/ia-design.svg"
                            alt="hello"
                        />
                    </div>
                    <div class="col-lg-6">
                        <div class="mt-5">
                            <p class="lead  text-uppercase mb-1 cambio-color fw-bold greeting-text">
                                Hola!
                            </p>
                            <h1
                                class="intro-title font-title marker name-text"
                                data-aos="fade-left"
                                data-aos-delay="50"
                            >
                                Soy Byron Becerra
                            </h1>
                            <p
                                class="lead fw-normal mt-3 job-title-text"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                Desarrollador Web FullStack Junior
                            </p>
                            <div
                                class="social-nav"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div
                                    class="icon-container mt-3"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <a
                                        href="https://www.linkedin.com/in/byron-becerra-aravena-406845308/"
                                        class="social-icon"
                                        ><i class="fab fa-linkedin"></i
                                    ></a>
                                    <a
                                        href="https://github.com/BecerraDev"
                                        class="social-icon"
                                        ><i class="fab fa-github"></i
                                    ></a>
                                    <a href="#contact" class="social-icon"
                                        ><i class="fas fa-envelope"></i
                                    ></a>
                                </div>
                            </div>

                            <div
                                class="btn-custom"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <a
                                    href="/downloads/CV_Byron_Becerra.pdf"
                                    class="styled-link font-2"
                                    
                                    download="CV_Byron_Becerra.pdf"
                                    >Descargar CV</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    
    <div class="wave-bg"></div>

</template>

<style scoped>
.top {
    padding-top: 7rem;
}
.color {
    background-color: #002147;
    color: white;
}


.styled-link {
    display: inline-block;
    padding: 12px 30px; /* Ajusta el padding según necesites */
    font-size: 16px;
    text-decoration: none;
    color: black;
    background-color: #ffcc00;
    border-radius: 25px;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10; /* Asegúrate de que el botón esté por encima de la imagen */
}


.styled-link:hover {
    background-color: #5846e0;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.styled-link:active {
    background-color: #4632c0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(2px);
}

.social-icon {
    font-size: 24px; /* Tamaño del ícono, ajusta según necesites */
    margin-right: 20px; /* Espacio entre los íconos, ajusta según necesites */
    color: #fff; /* Color de los íconos */
    transition: transform 0.3s ease-in-out;
    display: inline-block;
}

.social-icon:hover {
  transform: translateY(-10px); /* Mueve el icono hacia arriba cuando se aplica hover */
}

.cambio-color {
    animation: cambioColores 5s infinite; /* Animación de cambio de colores durante 5 segundos, repetida infinitamente */
}

@keyframes cambioColores {
    0% {
        color: #ff6347;
    } /* Color inicial */
    25% {
        color: #ffd700;
    } /* Cambio de color al 25% */
    50% {
        color: #7fff00;
    } /* Cambio de color al 50% */
    75% {
        color: #4682b4;
    } /* Cambio de color al 75% */
    100% {
        color: #ff6347;
    } /* Volver al color inicial al 100% */
}

.greeting-text {
    font-family: "Montserrat", sans-serif;
    
}
.name-text {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.job-title-text {
    font-family: 'Open Sans', sans-serif;
}
.btn-custom {
    margin-top: 7rem; /* Espacio superior para separar del contenido anterior */
    position: absolute;
    z-index: 2;
}
.wave-bg {
    display: block;
    height: 9rem;
    width: 100%;
    min-width: 600px;
    transform-origin: top;

    -webkit-animation: animateWave 2000ms cubic-bezier(0.23, 1, 0.32, 1)
        forwards;
    animation: animateWave 2000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
    background-image: url("/images/wave-bg.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;   
    z-index: 1;
}
</style>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'Home',
  mounted() {
    AOS.init({
      // Opciones de configuración de AOS
    });
  }
}
</script>
