
var links = document.querySelector('.links');
var menu = document.querySelector('.menu');

menu.addEventListener('click', ()=> {
    links.classList.toggle('active');
    menu.classList.toggle('active');
})