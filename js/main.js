////////////////////////////////////////////////////////////////////////
// progress bar app

class Progress {
    constructor() {
        this._value = 0;
        this._radius = 54;
        this._circumference = 2 * Math.PI * this._radius; // длина окружности
        this.progressValue = document.querySelector('.progressBar__value');
        this.progress = document.querySelector('.progressBar__progress');
        this.progressBar = document.querySelector('.progressBar');
    }

    setValue(value) {
        this._value = value;
        this.render();
    }

    render() {
        this.progressValue.style.strokeDashoffset = this._circumference * (1 - this._value/100);
    }

    setMod(mode, state) {
        if(mode === 'animated' && state === 'yes') {
            this.progress.classList.add('animation');
        }
        if(mode === 'animated' && state === '') {
            this.progress.classList.remove('animation');
        }
        if(mode === 'hidden' && state === 'yes') {
            this.progressBar.classList.add('hidden');
        }
        if(mode === 'hidden' && state === '') {
            this.progressBar.classList.remove('hidden');
        }
    }
}

let progress = new Progress();

// controller

let control = document.getElementById('valueControl');
let animateControl = document.getElementById('animateControl');
let hideControl = document.getElementById('hideControl');
let lastValue = 0;

// value controller

control.addEventListener('input', (e) => {
    // валидация формы, убираем все лишние пробелы и нули и букву e
    if (e.target.value >= 0 && e.target.value < 101 && isNaN(e.target.value) === false && e.target.value !== ' ') {
        if(e.target.value.length > 1) {
            e.target.value = parseInt(e.target.value);
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
    if(e.target.checked){
        progress.setMod('animated', 'yes');
    } else {
        progress.setMod('animated', '');
    }
});

// hide button

hideControl.addEventListener('change', (e) => {
    if(e.target.checked){
        progress.setMod('hidden', 'yes');
    } else {
        progress.setMod('hidden', '');
    }
});





