const music = document.getElementById('background-music');
const audioActivation = document.getElementById('audio-activation');

// Активация звука по нажатию
audioActivation.addEventListener('click', () => {
    music.play(); // Запускаем музыку
    audioActivation.classList.add('hidden'); // Скрываем область активации
});
