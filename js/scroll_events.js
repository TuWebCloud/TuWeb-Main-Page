document.addEventListener('DOMContentLoaded', () => {            
    // BLURRY - MOBILE
    const background = document.querySelector('.port_mobile');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 90) background.classList.add('blur')
        else background.classList.remove('blur');
    });
});