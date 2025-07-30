function changeColorShadow(button) {
    const card = button.closest('.card');
    card.classList.toggle('color-shadow');
}

function changeTitleColor(button) {
    const cardTitle = button.closest('.card').querySelector('.card-title');
    cardTitle.classList.toggle('title-color');
}

function borderRotate(button) {
    const card = button.closest('.card');
    card.classList.toggle('border-rotate');
}

function imageEffect(button) {
    const cardImage = button.closest('.card').querySelector('img');
    cardImage.classList.toggle('image-effect');
}

function imageAndTextEffect(button) {
    const cardImage = button.closest('.card').querySelector('img');
    const cardText = button.closest('.card').querySelector('.card-text');
    cardImage.classList.toggle('image-brightness');
    cardText.classList.toggle('text-italic');
}

function changeText(button) {
    const cardText = button.closest('.card').querySelector('.card-text');
    cardText.textContent = cardText.textContent === 'Stay updated with the latest technological advancements.' 
        ? 'Explore future innovations and tech trends.' 
        : 'Stay updated with the latest technological advancements.';
}

function fadeEffect(button) {
    const card = button.closest('.card');
    card.classList.toggle('fade-effect');
}

function toggleContent(button) {
    const cardText = button.closest('.card').querySelector('.card-text');
    cardText.style.display = cardText.style.display === 'none' ? 'block' : 'none';
}

function zoomRotate(button) {
    const card = button.closest('.card');
    card.classList.toggle('zoom-rotate');
}

function pulseEffect(button) {
    const card = button.closest('.card');
    card.classList.toggle('pulse-effect');
}

function glowElevate(button) {
    const card = button.closest('.card');
    card.classList.toggle('glow-elevate');
}

function changeBackground(button) {
    const card = button.closest('.card');
    card.classList.toggle('change-background');
}

function shakeBounce(button) {
    const card = button.closest('.card');
    card.classList.toggle('shake-bounce');
}

function changeFont(button) {
    const cardText = button.closest('.card').querySelector('.card-text');
    cardText.classList.toggle('font-change');
}

function flipGrayscale(button) {
    const card = button.closest('.card');
    card.classList.toggle('flip-grayscale');
}

function textShadow(button) {
    const cardText = button.closest('.card').querySelector('.card-text');
    cardText.classList.toggle('text-shadow');
}

function floatBorder(button) {
    const card = button.closest('.card');
    card.classList.toggle('float-border');
}

function rotateImage(button) {
    const cardImage = button.closest('.card').querySelector('img');
    cardImage.classList.toggle('rotate-image');
}

function neonBorder(button) {
    const card = button.closest('.card');
    card.classList.toggle('neon-border');
}

function changeButtonColor(button) {
    const buttons = button.closest('.card').querySelectorAll('button');
    buttons.forEach(btn => {
        btn.classList.toggle('button-color-change');
    });
}

function squeezeEffect(button) {
    const card = button.closest('.card');
    card.classList.toggle('squeeze-effect');
}

function blurEffect(button) {
    const cardImage = button.closest('.card').querySelector('img');
    cardImage.classList.toggle('blur-effect');
}

function gradientRotate(button) {
    const card = button.closest('.card');
    card.classList.toggle('gradient-rotate');
}

function starEffect(button) {
    const cardTitle = button.closest('.card').querySelector('.card-title');
    const originalText = "Space Exploration";
    const starText = "★☆✦✧★✩✷ Space ★ Exploration ✧✦☆★✩";
    
    cardTitle.textContent = cardTitle.textContent === originalText ? starText : originalText;
}