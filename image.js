let images = [];
let currentIndex = 0;

function uploadImages(event) {
  const files = event.target.files;
  for (let file of files) {
    const url = URL.createObjectURL(file);
    images.push(url);
  }
  currentIndex = 0;
  showImage();
}

function showImage() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  if (images.length > 0) {
    const img = document.createElement('img');
    img.src = images[currentIndex];
    img.id = 'currentImage';
    gallery.appendChild(img);
  }
}

function nextImage() {
  if (images.length > 0) {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }
}

function prevImage() {
  if (images.length > 0) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  }
}

function zoomImage() {
  const img = document.getElementById('currentImage');
  if (img) {
    img.style.transform = img.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
  }
}

function deleteImage() {
  if (images.length > 0) {
    images.splice(currentIndex, 1);
    currentIndex = Math.max(0, currentIndex - 1);
    showImage();
  }
}