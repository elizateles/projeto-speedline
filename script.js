
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})



let typed = new Typed(".mostra-texto", {
    strings: ["Suape."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});

