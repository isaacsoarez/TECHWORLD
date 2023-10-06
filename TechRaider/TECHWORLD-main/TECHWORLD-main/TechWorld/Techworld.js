const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('open');
});

const heroText = document.querySelector('.main-text h1');

heroText.addEventListener('mouseenter', () => {
  heroText.style.color = '#c4cece';
});

heroText.addEventListener('mouseleave', () => {
  heroText.style.color = '#0fdddd';
});


const navLinks = document.querySelectorAll('.navlist a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

const imageItems = document.querySelectorAll('.image-item');
let currentIndex = 0;

function showImage(index) {
  imageItems.forEach((item, i) => {
    item.style.display = i === index ? 'block' : 'none';
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageItems.length;
  showImage(currentIndex);
}

setInterval(nextImage, 3000); 