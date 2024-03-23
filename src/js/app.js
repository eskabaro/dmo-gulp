import * as flsFunctions from "./modules/functions.js";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

flsFunctions.isWebp();

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
    slidesPerView: "auto",
    slideToClickedSlide: true,
    slideActiveClass: "active",
    pagination: {
        el: ".service_overview__pagination",
        type: "bullets",
        clickable: true,
    },
    onAny(arg, ...props) {
        listBox.forEach((item) => {
            const listH = item.children[1].children[1].offsetHeight;
            item.children[1].style.bottom = `-${listH + (listH ? 20 : 0)}px`;

            if (window.innerWidth >= 768 && item.classList.contains("active")) {
                item.children[1].style.bottom = "0px";
            }
        });
    },
});

const elems = document.querySelectorAll(".count");

const outNum = (num, elem) => {
    const time = 1000;
    let step = num <= 999 ? 1 : 10;

    let n = 0;
    const l = document.querySelector(`#${elem}`);
    const t = Math.round(time / (num / step));

    const interval = setInterval(() => {
        n = n + step;

        if (n == num) clearInterval(interval);

        l.innerHTML = n;
    }, t);
};

elems.forEach((item) => {
    const count = item.getAttribute("data-count");
    const elemId = item.getAttribute("id");

    outNum(count, elemId);
});
