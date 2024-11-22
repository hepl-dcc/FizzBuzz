(function () {
    const fizzBuzz = {
        olElement: document.getElementById('fizzbuzz'),
        windowHeight: window.innerHeight,
        start: 1,
        end: 100,
        init() {
            this.gap = this.end;
            document.documentElement.classList.add('js-enabled');
            this.generateItemElements();
            window.addEventListener('scrollend', (event) => {
                this.generateLiNumberElement();
            });
        },
        toggleSum(event) {
            [event.currentTarget.dataset.sum, event.currentTarget.textContent] = [event.currentTarget.textContent, event.currentTarget.dataset.sum];
        },

        getSum(until) {
            return (until * (until + 1)) / 2;
        },

        generateItemElements() {
            for (; this.start <= this.end; this.start++) {
                if (this.start % 15 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', '<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
                } else if (this.start % 5 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
                } else if (this.start % 3 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', ' <li class="fizz">FI<i>zz</i></li>');
                } else {
                    const liElement = document.createElement('li');
                    liElement.textContent = this.start;
                    liElement.addEventListener('click', this.toggleSum);
                    liElement.dataset.sum = this.getSum(this.start);
                    this.olElement.insertAdjacentElement('beforeend', liElement);
                }
            }
            this.end += this.gap;
        },
        generateLiNumberElement() {
            const bodyHeight = document.body.clientHeight;
            const scroll = window.scrollY;
            if (scroll + this.windowHeight >= bodyHeight) {
                this.generateItemElements();
            }
        }
    };

    fizzBuzz.init();

})();
