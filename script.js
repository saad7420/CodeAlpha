let currentIndex = 1;

const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;

// Clone first and last images
const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);

// Add clones to the gallery
gallery.appendChild(firstClone);
gallery.insertBefore(lastClone, gallery.firstChild);

function updateGallery() {
    const width = gallery.clientWidth;
    gallery.style.transition = 'transform 1s ease';
    gallery.style.transform = `translateX(-${currentIndex * width}px)`;
}

function showNextImage() {
    const width = gallery.clientWidth;
    if (currentIndex >= totalImages) {
        gallery.style.transition = 'none';
        currentIndex = 1;
        gallery.style.transform = `translateX(-${currentIndex * width}px)`;
        setTimeout(() => {
            gallery.style.transition = 'transform 1s ease';
            currentIndex++;
            gallery.style.transform = `translateX(-${currentIndex * width}px)`;
        }, 20);
    } else {
        currentIndex++;
        updateGallery();
    }
}

function showPreviousImage() {
    const width = gallery.clientWidth;
    if (currentIndex <= 0) {
        gallery.style.transition = 'none';
        currentIndex = totalImages;
        gallery.style.transform = `translateX(-${currentIndex * width}px)`;
        setTimeout(() => {
            gallery.style.transition = 'transform 1s ease';
            currentIndex--;
            gallery.style.transform = `translateX(-${currentIndex * width}px)`;
        }, 20);
    } else {
        currentIndex--;
        updateGallery();
    }
}

function startLoop() {
    setInterval(showNextImage, 7000); // Change image every 7 seconds
}

document.getElementById('next').addEventListener('click', showNextImage);
document.getElementById('prev').addEventListener('click', showPreviousImage);

window.addEventListener('load', () => {
    const width = gallery.clientWidth;
    gallery.style.transform = `translateX(-${currentIndex * width}px)`;
    startLoop();
    window.addEventListener('resize', updateGallery);
});