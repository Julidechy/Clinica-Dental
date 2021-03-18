const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOpened = document.querySelector('.menu-opened');
const menuClosed = document.querySelector('.menu-closed');

mobileBtn.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('open');
    if (mobileMenu.classList.contains('open')){
        menuOpened.classList.remove('block');
        menuOpened.classList.add('hidden');
        menuClosed.classList.remove('hidden');
        menuClosed.classList.add('block');
    } else{
        menuOpened.classList.remove('hidden');
        menuOpened.classList.add('block');
        menuClosed.classList.remove('block');
        menuClosed.classList.add('hidden');
    }
});