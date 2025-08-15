let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showLightbox();
    });
});

function showLightbox() {
    lightbox.style.display = 'flex';
    lightboxImg.src = images[currentIndex].src;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showLightbox();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showLightbox();
}

function filterImages(category) {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.style.display = category === 'all' || item.classList.contains(category) ? 'block' : 'none';
    });
}