////////////////////////////////////////////////////////////////////////
// progress bar

window.onload = () => {

    class Progress {
        constructor(element) {
            this._value = 0;
            this._radius = 54;
            this._circumference = 2 * Math.PI * this._radius; // длина окружности
            this._container = element;
            this.renderElement();
            this.progressValue = document.querySelector('.progress-bar__value');
            this.progress = document.querySelector('.progress-bar__circles');
            this.progressBar = document.querySelector('.progress-bar');
        }

        renderElement() {
            let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.classList.add('progress-bar__circles');
            svg.setAttribute('width', '120');
            svg.setAttribute('height', '120');
            let circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle1.setAttribute('cx', '60');
            circle1.setAttribute('cy', '60');
            circle1.setAttribute('r', '54');
            circle1.setAttribute('fill', 'none');
            circle1.setAttribute('stroke', 'lightgray');
            circle1.setAttribute('stroke-width', '6');
            let circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle2.classList.add('progress-bar__value');
            circle2.setAttribute('cx', '60');
            circle2.setAttribute('cy', '60');
            circle2.setAttribute('r', '54');
            circle2.setAttribute('fill', 'none');
            circle2.setAttribute('stroke', '#ffd633');
            circle2.setAttribute('stroke-width', '6');
            circle2.setAttribute('stroke-dasharray', '339.292');
            circle2.setAttribute('stroke-dashoffset', '339.292');
            svg.appendChild(circle1);
            svg.appendChild(circle2);
            this._container.appendChild(svg);
        }

        setValue(value) {
            this._value = value;
            this.renderValue();
        }

        renderValue() {
            this.progressValue.style.strokeDashoffset = this._circumference * (1 - this._value / 100);
        }

        setMod(mode, state) {
            if (mode === 'animated' && state === 'yes') {
                this.progress.classList.add('progress-bar__animation');
            }
            if (mode === 'animated' && state === '') {
                this.progress.classList.remove('progress-bar__animation');
            }
            if (mode === 'hidden' && state === 'yes') {
                this.progressBar.classList.add('progress-bar__hidden');
            }
            if (mode === 'hidden' && state === '') {
                this.progressBar.classList.remove('progress-bar__hidden');
            }
        }
    }

    let progress = new Progress(document.querySelector('.progress-bar'));


/////////////////////////////////////////////////////////////////////
// controller

    let control = document.getElementById('valueControl');
    let animateControl = document.getElementById('animateControl');
    let hideControl = document.getElementById('hideControl');
    let lastValue = 0;

// value controller

    control.addEventListener('input', (e) => {
        // валидация формы, убираем все лишние пробелы и нули и букву e
        if (e.target.value >= 0 && e.target.value < 101 && isNaN(e.target.value) === false && e.target.value !== ' ') {
            if (e.target.value.length > 1) {
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

};


