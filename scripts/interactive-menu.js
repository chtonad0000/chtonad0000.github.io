const currentPath = document.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.navigation__link');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('navigation__link--active');
    }
});
console.log(document.location.pathname);