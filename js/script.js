let hamburger = document.getElementById('hamburger');
let smallSlider = document.getElementById('smallSlider');
let navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('fixed');
    hamburger.classList.toggle('triggered');
    smallSlider.classList.toggle('menuOpen');
})