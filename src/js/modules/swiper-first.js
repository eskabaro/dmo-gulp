import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

const listBox = document.querySelectorAll(".slide");

new Swiper(".service_overview__swiper", {
    modules: [Pagination, Autoplay],
    loopAdditionalSlides: 2,
    initialSlide: 5,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    speed: 650,
    // spaceBetween: 20,
    slidesPerView: "auto",
    slideToClickedSlide: true,
    slideActiveClass: "active",
    pagination: {
        el: ".service_overview__pagination",
        type: "bullets",
        clickable: true,
    },
    onAny() {
        listBox.forEach((item) => {
            const listH = item.children[1].children[1].offsetHeight;
            item.children[1].style.bottom = `-${listH + (listH ? 20 : 0)}px`;

            if (window.innerWidth >= 768 && item.classList.contains("active")) {
                item.children[1].style.bottom = "0px";
            }
        });
    },
});
