// Управление музыкой
const music = document.getElementById('background-music');

// Начинает проигрывать музыку после загрузки
music.volume = 0.5; // Установим громкость
music.play().catch((error) => {
    console.log("Ошибка при проигрывании музыки:", error);
});
