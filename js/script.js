const headerBurger = document.querySelector('.header_burger')
const headerMenuItem = document.querySelectorAll('.header_menu-item')
const body = document.querySelector('body')


headerBurger.addEventListener ('click', () => {
    body.classList.toggle('active')
});
headerMenuItem.forEach((el) => {
    el.addEventListener('click', () => {
        body.classList.toggle('active')
    })
});

