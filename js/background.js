const bg = document.querySelector('#home');
let num = 1;

setInterval(() => {
    num == 3 ? num = 1 : num++;
    bg.style.backgroundImage = `url(image/home-5/bg${num}.webp)`;
}, 7000)