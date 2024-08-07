import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue"; //add this line

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        vue(),
    ],

    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            $: "jquery",
            jQuery: "jquery",
        },
    },
    server: {
        https: true, // Habilitar HTTPS en el servidor de desarrollo de Vite
  },
});
