  const images = [
document.addEventListener('DOMContentLoaded', function() {
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
  ];

  const gallery = document.querySelector('.gallery');
  images.forEach(imgSrc => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Kenangan Kami';
    gallery.appendChild(img);
  });
});
console.log("Galeri Foto diakses.");