const navSlide = () => {
    const burger = document.querySelector('.burger')
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav__list');


    hamburger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');
    });
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-close');
    });

}


navSlide();