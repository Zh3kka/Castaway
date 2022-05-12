const burger = document.querySelector('.burger');
const burgerSpan = document.querySelector('.burger span');

burger.addEventListener('click', () => {
    burgerSpan.classList.toggle('active');
})

