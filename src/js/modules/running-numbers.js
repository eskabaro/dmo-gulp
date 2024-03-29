const elems = document.querySelectorAll(".count");
const rootElem = document.querySelector("#counter");

const outNum = (num, elem) => {
    const time = num >= 1000 ? 500 : 1000;
    let step = num <= 1000 ? 1 : 100;

    let n = 0;
    const l = document.querySelector(`#${elem}`);
    const t = Math.round(time / (num / step));

    l.classList.add("active");

    const interval = setInterval(() => {
        n = n + step;

        if (n == num) {
            clearInterval(interval);
            l.classList.remove("active");
        }

        l.innerHTML = n >= 7000 ? `${n}+` : n;
    }, t);
};

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                elems.forEach((item) => {
                    const count = item.getAttribute("data-count");
                    const elemId = item.getAttribute("id");

                    outNum(count, elemId);
                });
            }
        });
    },
    {
        threshold: 0.1,
    }
);

observer.observe(rootElem);
