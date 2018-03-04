/////////////////////////////////////////////////////////////////////
// controller

let control = document.getElementById('valueControl');
let animateControl = document.getElementById('animateControl');
let hideControl = document.getElementById('hideControl');
let lastValue = 0;

// value controller

control.addEventListener('input', (e) => {
    let value = e.target.value;
    // валидация формы, убираем все лишние пробелы и нули и букву e
    if (value >= 0 && value < 101 && isNaN(value) === false && value !== ' ') {
        if (e.target.value.length > 1) {
            e.target.value = parseInt(value);
        }
        e.target.value = e.target.value.trim();
        lastValue = e.target.value;
        progress.setValue(event.target.value);
    } else {
        event.target.value = lastValue;
    }
});

// animate button

animateControl.addEventListener('change', (e) => {
    if (e.target.checked) {
        progress.setMod('animated', 'yes');
    } else {
        progress.setMod('animated', '');
    }
});

// hide button

hideControl.addEventListener('change', (e) => {
    if (e.target.checked) {
        progress.setMod('hidden', 'yes');
    } else {
        progress.setMod('hidden', '');
    }
});


