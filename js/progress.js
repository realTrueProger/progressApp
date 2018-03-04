////////////////////////////////////////////////////////////////////////
// progress bar

class Progress {
    constructor(element) {
        this._value = 0;
        this._radius = 54;
        this._circumference = 2 * Math.PI * this._radius; // длина окружности
        this._container = element;
        this.renderElement();
        this.progressValue = document.querySelector('.progress-bar__value');
        this.progress = document.querySelector('.progress-bar__circles');
    }

    renderElement() {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.classList.add('progress-bar__circles');
        svg.setAttribute('width', '120');
        svg.setAttribute('height', '120');
        let circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle1.setAttribute('cx', '60');
        circle1.setAttribute('cy', '60');
        circle1.setAttribute('r', this._radius);
        circle1.setAttribute('fill', 'none');
        circle1.setAttribute('stroke', 'lightgray');
        circle1.setAttribute('stroke-width', '6');
        let circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle2.classList.add('progress-bar__value');
        circle2.setAttribute('cx', '60');
        circle2.setAttribute('cy', '60');
        circle2.setAttribute('r', this._radius);
        circle2.setAttribute('fill', 'none');
        circle2.setAttribute('stroke', '#ffd633');
        circle2.setAttribute('stroke-width', '6');
        circle2.setAttribute('stroke-dasharray', this._circumference);
        circle2.setAttribute('stroke-dashoffset', this._circumference);
        svg.appendChild(circle1);
        svg.appendChild(circle2);
        this._container.appendChild(svg);
    }

    setValue(value) {
        if(value >= 0 && value < 101) {
            this._value = value;
            this.renderValue();
        } else {
            console.log('invalid value, must be 0 - 100');
        }
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
            this._container.classList.add('progress-bar__hidden');
        }
        if (mode === 'hidden' && state === '') {
            this._container.classList.remove('progress-bar__hidden');
        }
    }
}

let progress = new Progress(document.querySelector('.progress-bar'));