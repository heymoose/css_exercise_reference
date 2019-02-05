var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var removeOpenClassListenerElements = [backdrop];

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