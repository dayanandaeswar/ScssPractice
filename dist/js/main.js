const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

let show_menu = false;


menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
    if(!show_menu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item =>{
            item.classList.add('open');
        });
        show_menu = true;
    }else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item =>{
            item.classList.remove('open');
        })
        show_menu = false;
    }
}