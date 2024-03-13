var videos = document.querySelectorAll(".videosIntroducao");

videos.forEach(function(video) {
    // Ativa os controles e o loop quando o mouse passa sobre o vídeo
    video.addEventListener("mouseenter", function() {
        video.controls = true;
        video.loop = true;
    });

    // Desativa os controles e o loop quando o mouse sai do vídeo
    video.addEventListener("mouseleave", function() {
        video.controls = false;
        video.loop = false;
    });
});