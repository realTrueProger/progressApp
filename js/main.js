////////////////////////////////////////////////////////////////////////
// progress bar app

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // длина окружности
let control = document.getElementById('valueControl');
let animateControl = document.getElementById('animateControl');
let hideControl = document.getElementById('hideControl');
let progressValue = document.querySelector('.progress__value');
let lastValue = 0;

// меняем progress bar

function progress(value) {
    let progress = value / 100;
    progressValue.style.strokeDashoffset = CIRCUMFERENCE * (1 - progress);
}

// value controller

control.addEventListener('input', (e) => {
    // валидация формы, убираем все лишние пробелы и нули и букву e
    if (e.target.value >= 0 && e.target.value < 101 && isNaN(e.target.value) === false && e.target.value !== ' ') {
        if(e.target.value.length > 1) {
            e.target.value = parseInt(e.target.value);
        }
        e.target.value = e.target.value.trim();
        lastValue = e.target.value;
        progress(event.target.value);
    } else {
        event.target.value = lastValue;
    }
});

animateControl.addEventListener('click', (e) => {
    document.querySelector('.progress').classList.toggle('animation');
});

// hide button

hideControl.addEventListener('click', (e) => {
   document.querySelector('.svgContainer').classList.toggle('hidden');
});





