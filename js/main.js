
const menu_btn = document.querySelector('.hamburger');
const navigator = document.querySelector('.navigator');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    navigator.classList.toggle('is-active');
});