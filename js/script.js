const navSlide = () => {
    const burger = document.querySelector('.burger')
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav__list');
      

    hamburger.addEventListener('click', (e) => {
        // toggle nav
        
        nav.classList.toggle('nav-active');
       
    });

    burger.addEventListener('click', (e) => {
        e.preventDefault();
        nav.classList.remove('nav-active');
    });
    
    
}


navSlide();