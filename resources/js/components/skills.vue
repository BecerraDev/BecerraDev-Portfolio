<template>
    <section class="skills-section">
        <div class="section px-3 px-lg-4 pt-5" id="skills">
            <div class="container-narrow">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <div class="text-center mb-5">
                            <h2 class="marker marker-center color-title-section">Habilidades</h2>
                        </div>
                        <p class="content">
                            Aquí están algunas de las tecnologías con las que
                            trabajo y mi nivel de experiencia adquirida a lo
                            largo de mi carrera:
                        </p>
                    </div>
                </div>

                <div class="bg-light p-3">
                    <div class="row">
                        <div class="col-md-12 font-space">
                            <ul class="skill-list">
                                <li
                                    class="skill-item"
                                    role="progressbar"
                                    data-aos="zoom-in"
                                    data-aos-delay="100"
                                >
                                    <i
                                        class="fab fa-laravel mb-2"
                                        title="Avanzado"
                                    ></i>
                                    <h5>Laravel</h5>
                                    <span class="skill-level">Intermedio</span>
                                </li>
                                <li
                                    class="skill-item"
                                    role="progressbar"
                                    data-aos="zoom-in"
                                    data-aos-delay="100"
                                >
                                    <i
                                        class="fas fa-database mb-2"
                                        title="Intermedio"
                                    ></i>
                                    <h5>SQL</h5>
                                    <span class="skill-level">Intermedio</span>
                                </li>
                                <li
                                    class="skill-item"
                                    role="progressbar"
                                    data-aos="zoom-in"
                                    data-aos-delay="100"
                                >
                                    <i
                                        class="fab fa-vuejs mb-2"
                                        title="Avanzado"
                                    ></i>
                                    <h5>Vue.js</h5>
                                    <span class="skill-level">Intermedio</span>
                                </li>

                                <li
                                    class="skill-item"
                                    role="progressbar"
                                    data-aos="zoom-in"
                                    data-aos-delay="100"
                                >
                                    <i class="fas fa-server mb-2"></i>
                                    <h5>Express</h5>
                                    <span class="skill-level">Intermedio</span>
                                </li>
                                <li
                                    class="skill-item"
                                    role="progressbar"
                                    data-aos="zoom-in"
                                    data-aos-delay="100"
                                >
                                    <i class="fab fa-js mb-2"></i>
                                    <h5>JavaScript</h5>
                                    <span class="skill-level">Avanzado</span>
                                </li>
                                <li
                                    class="skill-item"
                                    role="progressbar"
                                    data-aos="zoom-in"
                                    data-aos-delay="100"
                                >
                                    <i class="fab fa-java mb-2"></i>
                                    <h5>Java</h5>
                                    <span class="skill-level">Avanzado</span>
                                </li>
                                <li
                                    class="skill-item"
                                    role="progressbar"
                                    data-aos="zoom-in"
                                    data-aos-delay="100"
                                >
                                    <i class="fab fa-css3-alt mb-2"></i>
                                    <h5>CSS</h5>
                                    <span class="skill-level">Avanzado</span>
                                </li>
                                <li
                                    class="skill-item"
                                    role="progressbar"
                                    data-aos="zoom-in"
                                    data-aos-delay="100"
                                >
                                    <i class="fab fa-bootstrap mb-2"></i>
                                    <h5>Bootstrap</h5>
                                    <span class="skill-level">Avanzado</span>
                                </li>
                                <li
                                    class="skill-item"
                                    role="progressbar"
                                    data-aos="zoom-in"
                                    data-aos-delay="100"
                                >
                                    <i class="fab fa-php mb-2"></i>
                                    <h5>PHP</h5>
                                    <span class="skill-level">Intermedio</span>
                                </li>

                                <!-- Añadir más íconos con sus niveles aquí -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Skills",
};
</script>

<style scoped>
.font {
    font-family: "Rubik", sans-serif;
    font-size: 14px;
    color: #333;
}

.skills-section {
    background-color: white;
    padding: 50px 0;
}

.skill-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.skill-item {
    margin: 10px;
    text-align: center;
    width: 120px; /* Ancho fijo para cada ítem */
    position: relative;
}

.skill-item i {
    color: #ff5722;
    font-size: 4.5rem; /* Tamaño de íconos */
    cursor: pointer;
}

.skill-item h5 {
    font-size: 0.9rem; /* Tamaño de texto */
    margin-top: 8px;
    font-weight: bold;
}

.skill-item .skill-level {
    position: absolute;
    bottom: -20px; /* Ajuste la posición según su preferencia */
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    display: none; /* Ocultar inicialmente */
}

.skill-item:hover .skill-level {
    display: block; /* Mostrar al pasar el cursor */
}

/* Estilos específicos del componente */
</style>
