const headerBurger = document.querySelector('.header_burger')
const headerWrapperBurger = document.querySelector('.header_wrapper-burger')
const headerMenu = document.querySelector('.header_menu')
const body =  document.querySelector('body')
const headerMenuItem = document.querySelectorAll('.header_menu-item')
const headerLogo = document.querySelector('.header_logo')

headerBurger.addEventListener ('click', () => {
    headerBurger.classList.toggle('active');
    headerWrapperBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    // body.classList.toggle('lock')
});
headerMenuItem.forEach((el) => {
    el.addEventListener('click', () => {
        headerWrapperBurger.classList.remove('active');
        headerMenu.classList.remove('active');
        headerBurger.classList.remove('active');
        // body.classList.remove('lock');
    })
});
headerLogo.addEventListener('click', () => {
    headerWrapperBurger.classList.remove('active');
    headerMenu.classList.remove('active');
    headerBurger.classList.remove('active');
    // body.classList.remove('lock');
});
