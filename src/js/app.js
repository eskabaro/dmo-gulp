import * as flsFunctions from "./modules/functions.js";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

flsFunctions.isWebp();

new Swiper(".service_overview__swiper", {
    modules: [Pagination],
    loopAdditionalSlides: 2,
    initialSlide: 5,
    loop: true,
    // rewind: true,
    slidesPerView: "auto",
    slideToClickedSlide: true,
    slideActiveClass: "active",
    pagination: {
        el: ".service_overview__pagination",
        type: "bullets",
        clickable: true,
    },
});
