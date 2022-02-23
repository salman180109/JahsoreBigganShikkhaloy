
const links = document.querySelector('.links');
const menu = document.querySelector('.menu');
var isLinkOpen = 0;

menu.addEventListener('click', ()=> {
    if(isLinkOpen == 0) {
        menu.innerHTML = 'close';
        links.style.right = '0';
        isLinkOpen++;
    }
    else {
        menu.innerHTML = 'menu';
        links.style.right = '-60vw';
        isLinkOpen--;
    }
})