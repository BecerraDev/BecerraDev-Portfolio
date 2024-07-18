<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    @vite(['resources/js/app.js', 'resources/css/app.css'])
    <title>BecerraDev</title>



</head>

<body>
    <!-- Navbar Layout   include('partials/navbar') -->

    @include('partials/navbar')

    <!-- Secciones -->
    <div id="app">
        <main-component></main-component>
    </div>

    <!--- Boton Scroll -->


    <button id="scrollToTop" class="icon-scrolltop" onclick="scrollToTop()"></button>

    <!--- Footer Layout  include('partials/footer') -->

    @include('partials/footer')

</body>


</html>
