document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('bg-primary');
    } 
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('bg-primary');       
        } else {
            navbar.classList.remove('bg-primary');
        }
    });
});