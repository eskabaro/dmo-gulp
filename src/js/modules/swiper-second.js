// import Swiper from "swiper";
// import { Mousewheel, Scrollbar, Pagination } from "swiper/modules";

// const bgSlider = document.querySelector("#news_bg");

// let windowWidth = window.innerWidth;

// window.addEventListener("resize", () => {
//     windowWidth = window.innerWidth;
// });

// new Swiper(".swiper_news", {
//     modules: [Mousewheel, Scrollbar, Pagination],
//     direction: "horizontal",
//     slidesPerView: "auto",
//     freeMode: true,
//     spaceBetween: 12,
//     scrollbar: {
//         enabled: false,
//         el: ".swiper-scrollbar",
//         draggable: true,
//         snapOnRelease: false,
//         dragSize: "auto",
//     },
//     simulateTouch: true,
//     allowTouchMove: true,
//     mousewheel: {
//         enabled: false,
//     },
//     pagination: {
//         el: ".swiper_news__pagination",
//         enabled: true,
//         clickable: true,
//     },
//     onAny(_, ...props) {
//         if (windowWidth >= 992) {
//             bgSlider.style.backgroundPositionX = `${props[0].translate / 3}%`;
//         }
//     },
//     breakpoints: {
//         992: {
//             direction: "vertical",
//             spaceBetween: 20,
//             scrollbar: {
//                 enabled: true,
//             },
//             simulateTouch: false,
//             allowTouchMove: false,
//             pagination: {
//                 enabled: false,
//             },
//         },
//     },
// });
