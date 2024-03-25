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