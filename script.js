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



// Seleciona a div da alternativa C
const alternativaC = document.querySelector('.alternativaC');

// Seleciona o elemento de texto extra
const textoExtra = document.getElementById('textoExtra');

// Seleciona todas as divs das alternativas
const alternativas = document.querySelectorAll('.alternativas > div');

// Adiciona um event listener de clique para cada div de alternativa
alternativas.forEach(alternativa => {
    alternativa.addEventListener('click', () => {
        // Oculta o texto extra quando outra alternativa for clicada
        textoExtra.style.display = 'none';

        // Remove a seleção de todas as alternativas
        alternativas.forEach(alt => {
            alt.style.backgroundColor = 'white'; 
        });

        // Define a cor de fundo e executa outras ações, se necessário, com base na alternativa clicada
        if (alternativa.classList.contains('alternativaA') || 
            alternativa.classList.contains('alternativaB') || 
            alternativa.classList.contains('alternativaD')) {
            alternativa.style.backgroundColor = '#ff0000a9';
        } else if (alternativa.classList.contains('alternativaC')) {
            alternativa.style.backgroundColor = '#1eff00a9';
            // Exibe o texto extra quando a alternativa C for clicada
            textoExtra.style.display = 'block';
        }
    });
});
