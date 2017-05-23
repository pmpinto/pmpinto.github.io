(() => {
    // SETUP
    let now = new Date();

    this.elements = {
        body: document.querySelector('body'),
        logo: document.querySelector('.logo'),
        toggles: document.getElementsByClassName('js-toggleNightMode')
    };


    // FUNCTIONS
    const toggleNightMode = (element) => {
        if (element.classList.contains('night-mode')) {
            element.classList.remove('night-mode');
        } else {
            element.classList.add('night-mode');
        }
    };


    // EVENTS
    this.elements.logo.addEventListener('dblclick', () => {
        toggleNightMode(this.elements.body);
    }, false);

    for (var i = this.elements.toggles.length - 1; i >= 0; i--) {
        this.elements.toggles[i].addEventListener('click', (event) => {
            event.preventDefault();
            toggleNightMode(this.elements.body);
        }, false);
    }


    // RUNTIME
    if (now.getHours() >= 20 || now.getHours() <= 7) {
        toggleNightMode(this.elements.body);
    }

})();
