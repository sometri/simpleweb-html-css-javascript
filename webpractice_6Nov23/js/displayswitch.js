const imageGallery = document.querySelector('.image-gallery');
const images = imageGallery.querySelectorAll('img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(nextImage, 2000); // Change image every 2 seconds

showImage(currentIndex);
