let windowWidth = window.innerWidth;

window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (
                entry.isIntersecting &&
                window.scrollY > 100 &&
                windowWidth >= 1200
            ) {
                smoothScrollTo(entry.target);
            }
        });
    },
    {
        threshold: 0.6,
    }
);

const sections = document.querySelectorAll(".scroll_section");

sections.forEach((item) => {
    observer.observe(item);
});

const smoothScrollTo = (element) => {
    window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
    });
};
