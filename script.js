const stem = document.querySelector('.stem');
const flower = document.querySelector('.flower');
const center = document.querySelector('.center');
const petals = document.querySelectorAll('.petal');

// Animação do caule surgindo do chão
setTimeout(() => {
    stem.style.height = '100px';
    stem.style.opacity = '1';
}, 1000);

// Animação da flor e das pétalas aparecendo
setTimeout(() => {
    center.style.opacity = '1';
    petals.forEach(petal => {
        petal.style.opacity = '1';
    });
}, 1500);
