const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                smoothScrollTo(entry.target);
            }
        });
    },
    {
        threshold: 0.5,
    }
);

const sections = document.querySelectorAll(".scroll_section");

sections.forEach((item) => {
    observer.observe(item);
});

function smoothScrollTo(element) {
    window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
    });
}
