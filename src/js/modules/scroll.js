const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && window.scrollY > 100) {
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
