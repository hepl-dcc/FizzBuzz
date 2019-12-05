(function () {
  "use strict";
  const FizzBuzz = {
    cacheDom() {
      this.app = document.querySelector("#fizzbuzz");
    },
    init() {
      document.documentElement.classList.add('js-enabled');
      this.iNumberOfElem = 0;
      this.cacheDom();
      this.addEventListeners();
      this.iNumberOfElem = this.generateItems();
    },
    generateItem(num) {
      if (num % 3 === 0 && num % 5 === 0) {
        this.app.insertAdjacentHTML('beforeend', `<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>`)
      } else if (num % 3 === 0) {
        this.app.insertAdjacentHTML('beforeend', `<li class="fizz">FI<i>zz</li>`);

      } else if (num % 5 === 0) {
        this.app.insertAdjacentHTML('beforeend', `<li class="buzz">BU<i>zz</li>`);
      } else {
        this.app.insertAdjacentHTML('beforeend', `<li class="buzz">${num}</li>`);
      }
    },
    generateItems({ start = 1, maxElem = 100 } = {}) {
      for (; start <= maxElem; start++) {
        this.generateItem(start);
      }
      return start;
    },
    addEventListeners() {
      document.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          console.log('end of page');
          this.iNumberOfElem = this.generateItems({ start: this.iNumberOfElem, maxElem: this.iNumberOfElem + 100 });
        }
      })
    }
  };
  FizzBuzz.init();
})();