let clickCount = 0;
const maxClicks = 10;

function handleClick() {
    clickCount++;

    document.getElementById("clickCount").innerText = clickCount;

    if (clickCount < maxClicks) {
        playVillagerSound();
    } else if (clickCount === maxClicks) {
        triggerExplosion();
    }
}

function playVillagerSound() {
    let villagerSound = document.getElementById("villagerSound");
    villagerSound.play();
}

function triggerExplosion() {
    let character = document.getElementById("character");
    character.src = "explosion.png"; // Заменить изображение персонажа на картинку взрыва
    character.style.pointerEvents = "none"; // Отключить клики
    playExplosionSound();
}

function playExplosionSound() {
    let explosionSound = document.getElementById("explosionSound");
    explosionSound.play();

    // Закрытие страницы через 2 секунды после звука взрыва
    setTimeout(function() {
        window.close();
    }, 2000);  // 2 секунды, чтобы звук успел проиграться
}
