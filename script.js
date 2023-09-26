let menu = document.querySelector('.js-hamburger');
let navlist = document.querySelector('.navlist');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};