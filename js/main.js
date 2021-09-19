const menuBtn = document.querySelector  ('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
//get an array of items not just one item
const navItems = document.querySelectorAll('.menu-nav_item');

let showMenu = false;
menuBtn.addEventListener ('click',toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        showMenu = true;
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach( (item) =>  {
            item.classList.add ('open');
        });
    } else {
        hamburger.classList.remove('open');
        showMenu = false;
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach((item) => {
            item.classList.remove('open');
        });
    }
}