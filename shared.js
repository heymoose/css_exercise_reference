var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var removeOpenClassListenerElements = [backdrop];
var ctaButton = document.querySelector('.main-nav__item--cta');

if (modalNoButton) {
    removeOpenClassListenerElements.push(modalNoButton);
}

console.dir(backdrop);

selectPlanButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
});

removeOpenClassListenerElements.forEach(button => {
    button.addEventListener('click', () => {
        if (modal) {
            modal.classList.remove('open');
        }

        backdrop.classList.remove('open');
        mobileNav.classList.remove('open');
    });
});

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

ctaButton.addEventListener('animationstart', event => {
    console.log('Animation started', event);
});

ctaButton.addEventListener('animationend', event => {
    console.log('Animation ended', event);
});

ctaButton.addEventListener('animationiteration', event => {
    console.log('Animation iteration', event);
});