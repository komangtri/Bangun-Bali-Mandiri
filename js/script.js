var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1380: {
            slidesPerView: 4,
        }
    },
});

const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function (e) {
    console.log(window.scrollY)
    if (window.scrollY > 1) {
        navbar.classList.replace('bg-transparant', 'nav-color')
    } else if (window.scrollY <= 0) {
        navbar.classList.replace('nav-color', 'bg-transparant')
    }
})

var slideDown = {
    distance: '150%',
    origin: 'top',
    opacity: null,
    duration: 1000
}

var slideRight = {
    distance: '150%',
    origin: 'left',
    opacity: null,
    duration: 2000
}

var slideLeft = {
    distance: '150%',
    origin: 'right',
    opacity: null,
    duration: 2000
}

var slideUp = {
    distance: '150%',
    origin: 'down',
    opacity: null,
    duration: 1000
}

ScrollReveal().reveal('#hero', slideDown);
ScrollReveal().reveal('#portofolio', {
    easing: 'ease-in-out'
});
ScrollReveal().reveal('#information', slideLeft);
ScrollReveal().reveal('#product', {
    easing: 'ease-in'
});