<template>
    <div class="section px-2 px-lg-4 pb-4 pt-5 mb-5" id="contact">
        <div class="container-narrow">
            <div class="text-center mb-5">
                <div class="highlight-container" data-aos="fade-up">
                    <h2 class="highlight-title color-title-section">Contacto</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6" data-aos="fade-left" data-aos-delay="300">
                    <div class="mt-3 px-1 texto-style">
                        <p> <strong>
                            ¡Hola! Estoy entusiasmado por la posibilidad de
                            formar parte de tu equipo. </strong> </p>
                            
                        <p> Si estás buscando un
                            desarrollador web comprometido, con experiencia en
                            tecnologías como JavaScript, Vue.js, PHP, Laravel,
                            y una pasión por la innovación tecnológica, ¡has
                            llegado al lugar correcto!
                        </p>
                        <p>
                            Por favor, completa el formulario a continuación y
                            estaré encantado de discutir cómo mis habilidades y
                            experiencia pueden contribuir al éxito de tu
                            empresa.
                        </p>
                    </div>
                </div>

                <div class="col-md-6" data-aos="zoom-in" data-aos-delay="100">
                    <div>
                        <form @submit.prevent="submitForm" class="custom-form">
                            <div class="mb-3">
                                <label for="name" class="form-label"
                                    >Nombre</label
                                >
                                <input
                                    type="text"
                                    id="name"
                                    v-model="form.name"
                                    class="form-control"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label"
                                    >Correo electrónico</label
                                >
                                <input
                                    type="email"
                                    id="email"
                                    v-model="form.email"
                                    class="form-control"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label"
                                    >Mensaje</label
                                >
                                <textarea
                                    class="form-control"
                                    style="resize: none"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    v-model="form.message"
                                    required
                                ></textarea>
                            </div>
                            <button class="btn btn-primary" type="submit">
                                Enviar
                            </button>
                        </form>
                        <div
                            v-if="status"
                            :class="{
                                'text-success cambio-color': success,
                                'text-danger': !success,
                            }"
                            class="mt-3"
                        >
                            {{ status }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="arrow-down"></div>

</template>

<style scoped>

.arrow-down {
  position: absolute;
  right: 20px; /* Ajusta según sea necesario */
  bottom: 20px; /* Ajusta según sea necesario */
  width: 30px;
  height: 30px;
  background-image: url('path-to-your-arrow-image.svg');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer; /* Añade si deseas un cursor que indique que es interactivo */
  transition: transform 0.3s ease-in-out; /* Añade una transición suave si deseas animaciones */
}

.arrow-down:hover {
  transform: translateY(5px); /* Efecto de desplazamiento hacia abajo al pasar el ratón */
}


.highlight-container {
    text-align: center;
    position: relative;
}

.highlight-title {
    display: inline-block;
    position: relative;
}

.texto-style {
    font-family: "Rubik", sans-serif;
}

.custom-form {
    background-color: #f0f0f0; /* Fondo gris claro */
    padding: 20px; /* Espaciado interno */
    border-radius: 10px; /* Bordes redondeados */
    box-shadow: none; /* Sin sombra */
}

.custom-form .form-label {
    font-weight: bold; /* Texto de etiquetas en negrita */
}

.custom-form .btn-primary {
    background-color: #007bff; /* Fondo azul del botón */
    border-color: #007bff; /* Borde azul del botón */
}

.custom-form .btn-primary:hover {
    background-color: #0056b3; /* Color de fondo azul más oscuro al pasar el mouse */
    border-color: #0056b3; /* Color de borde azul más oscuro al pasar el mouse */
}
.text-success {
    color: green;
    font-size: 16px; /* Cambia el tamaño de la fuente para el éxito */
    font-family: "Space Grotesk", sans-serif;
    font-weight: bold;
}

.text-danger {
    color: red;
}


</style>

<script>
import axios from "axios";

export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                message: "",
            },
            status: "",
            success: false,
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post(
                    "https://formspree.io/f/xvgponnr",
                    this.form,
                    {
                        headers: {
                            Accept: "application/json",
                        },
                    }
                );

                if (response.status === 200) {
                    this.status =
                        "¡Formulario enviado con éxito! Pronto recibirás una respuesta.";
                    this.success = true;
                    this.form.name = "";
                    this.form.email = "";
                    this.form.message = "";
                } else {
                    this.handleError(response.data);
                }
            } catch (error) {
                this.handleError(error.response.data);
            }
        },
        handleError(data) {
            if (data.errors) {
                this.status = data.errors
                    .map((error) => error.message)
                    .join(", ");
            } else {
                this.status =
                    "Ocurrió un error al enviar el formulario. Por favor, inténtalo nuevamente.";
            }
            this.success = false;
        },
    },
};
</script>
