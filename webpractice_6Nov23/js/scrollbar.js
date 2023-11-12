const imageGallery = document.querySelector('.image-gallery');
const images = imageGallery.querySelectorAll('img');
let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

setInterval(nextImage, 2000); // Change image every 2 seconds
