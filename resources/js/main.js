import { createApp } from 'vue';
import Main from './components/main.vue';
import { openModal, closeModal } from './scripts/modal.js';
import { scrollToTop } from './scripts/scroll.js';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000, // Duración de la animación en milisegundos
    once: true, // Si true, la animación se ejecutará solo una vez
  });

const app = createApp({});
app.component('main-component', Main);
app.mount('#app');

// Lógica para botón de scroll to top
document.getElementById('scrollToTop').addEventListener('click', function() {
    scrollToTop();
});

// Lógica para abrir y cerrar modal
document.getElementById('closeModalButton').addEventListener('click', function() {
    closeModal();
});

document.getElementById('openModalButton').addEventListener('click', function() {
    openModal('EQY9-f_8iTs');
});