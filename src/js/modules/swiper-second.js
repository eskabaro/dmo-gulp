// import Swiper from "swiper";
// import { Mousewheel, Scrollbar, Pagination } from "swiper/modules";

// const bgSlider = document.querySelector("#news_bg");

// const sizeWindowWidth = () => {
//     return window.innerWidth >= 992;
// };

// window.addEventListener("resize", () => {
//     initializeSwiper(sizeWindowWidth());
// });

// const initializeSwiper = (isVertical) => {
//     new Swiper(".swiper_news", {
//         modules: [Mousewheel, Scrollbar, Pagination],
//         direction: isVertical ? "vertical" : "horizontal",
//         slidesPerView: "auto",
//         freeMode: true,
//         spaceBetween: isVertical ? 20 : 12,
//         scrollbar: {
//             enabled: isVertical,
//             el: ".swiper-scrollbar",
//             draggable: true,
//             snapOnRelease: false,
//             dragSize: "auto",
//         },
//         simulateTouch: !isVertical,
//         allowTouchMove: !isVertical,
//         mousewheel: {
//             enabled: false,
//         },
//         pagination: {
//             el: ".swiper_news__pagination",
//             enabled: !isVertical,
//             clickable: true,
//         },
//         onAny(_, ...props) {
//             if (isVertical)
//                 bgSlider.style.backgroundPositionX = `${
//                     props[0].translate / 3
//                 }%`;
//         },
//     });
// };

// initializeSwiper(sizeWindowWidth());
