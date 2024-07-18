<template>
    <section >

        <div class="section pt-5 px-3 px-lg-4" id="about">
            <div class="container-narrow">
                <div class="row">
                    <div class="col-md-6 content">
                        <h2 class="my-2 color-title-section">Mi Trayectoria</h2>

                        <p>
                            ¡Hola! Soy Byron Becerra, un ingeniero en
                            Informática con una sólida trayectoria en desarrollo
                            web full stack. Me apasiona trabajar tanto en el
                            frontend como en el backend, utilizando herramientas
                            como JavaScript, Vue.js, Express, PHP, Laravel, SQL,
                            CSS y Bootstrap para crear soluciones robustas y
                            eficientes.
                        </p>
                        <p>
                            Aunque mi experiencia laboral se centra en mis
                            estudios de ingeniería en informática y no en roles
                            previos, mi formación académica y gusto por
                            resolver problemas técnicos me han preparado para
                            enfrentar desafíos en el desarrollo web.
                        </p>
                        <p>
                            Mi experiencia laboral previa de 4 años en un centro
                            de llamadas me ha equipado con habilidades valiosas
                            en la resolución de problemas y la atención al
                            cliente, las cuales aplico en mi enfoque hacia el
                            desarrollo web. Actualmente, me encuentro en la
                            etapa junior de mi carrera, comprometido en mejorar
                            constantemente mis habilidades y contribuir a
                            proyectos innovadores.
                        </p>

                    </div>
                    <div
                        class="col-md-5 offset-md-1"
                        data-aos="fade-right" data-aos-delay="100"
                    >
                        <img
                            class="avatar img-fluid mt-2"
                            src="/public/images/my-photo.jpg"
                            width="400"
                            height="400"
                            alt="Byron Becerra"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "About",
};
</script>

<style scoped>
#about {
    background-color: white;
}
.ia-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

</style>
