const navSlide = () => {
    const burger = document.querySelector('.burger')
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav__list');
    const check = document.querySelector('.checkbox');
    const tick = document.querySelector('.tick');
   
    hamburger.addEventListener('click', (e) => {
        // toggle nav
        
        nav.classList.toggle('nav-active');
       
    });

    burger.addEventListener('click', (e) => {
        e.preventDefault();
        nav.classList.remove('nav-active');
    });

    

    check.addEventListener('click', () => {

        tick.classList.toggle('active');
        
        
    })


    
    
}


navSlide();