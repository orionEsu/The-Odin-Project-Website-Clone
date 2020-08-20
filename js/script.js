const navSlide = () =>{
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav__list');

    hamburger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');
    });
}


navSlide();