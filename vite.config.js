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
    build: {
        // Directorio de salida para los archivos compilados
        outDir: "public/build",
        // Generar el archivo manifest.json
        manifest: true,
        // Opciones de Rollup para configurar las entradas
        rollupOptions: {
            input: {
                app: "resources/js/app.js", // Entrada principal de JavaScript
                styles: "resources/css/app.css", // Entrada principal de CSS
            },
        },
    },
});
