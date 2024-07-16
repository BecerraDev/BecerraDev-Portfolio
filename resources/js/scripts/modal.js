export function openModal(videoId) {
    var modal = document.getElementById('myModal');
    var videoPlayer = document.getElementById('videoPlayer');

    // Construir la URL del video de YouTube
    var youtubeUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';

    // Establecer la URL del reproductor de YouTube
    videoPlayer.src = youtubeUrl;

    // Mostrar la modal
    modal.style.display = 'block';
}

export function closeModal() {
    var modal = document.getElementById('myModal');
    var videoPlayer = document.getElementById('videoPlayer');

    // Detener el video de YouTube y limpiar la URL
    videoPlayer.src = '';

    // Ocultar la modal
    modal.style.display = 'none';
}