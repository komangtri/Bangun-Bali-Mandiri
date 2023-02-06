// var multipleCardCarousel = document.querySelector(
//   "#carouselExampleControls"
// );
// if (window.matchMedia("(min-width: 768px)").matches) {
//   var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//     interval: false,
//   });
//   var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//   var cardWidth = $(".carousel-item").width();
//   var scrollPosition = 0;
//   $("#carouselExampleControls .carousel-control-next").on("click", function () {
//     if (scrollPosition < carouselWidth - cardWidth * 4) {
//       scrollPosition += cardWidth;
//       $("#carouselExampleControls .carousel-inner").animate({
//           scrollLeft: scrollPosition
//         },
//         600
//       );
//     }
//   });
//   $("#carouselExampleControls .carousel-control-prev").on("click", function () {
//     if (scrollPosition > 0) {
//       scrollPosition -= cardWidth;
//       $("#carouselExampleControls .carousel-inner").animate({
//           scrollLeft: scrollPosition
//         },
//         600
//       );
//     }
//   });
// } else {
//   $(multipleCardCarousel).addClass("slide");
// }

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