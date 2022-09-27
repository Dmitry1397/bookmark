const menuBtn = document.querySelector('#mobile-menu');
const menu = document.querySelector('nav');
const logo = document.querySelector('#logo-image');

menuBtn.addEventListener('click', () => {
    if (menu.style.display === 'block') {
        document.body.style.height = 'unset';
        document.body.style.overflow = 'unset';
        menu.style.display = 'none';
        menuBtn.className = 'show';
        logo.className = 'under';
    } else {
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
        menu.style.display = 'block';
        menuBtn.className = 'hide';
        logo.className = 'over';
    }
})
