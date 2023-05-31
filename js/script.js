const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0);
})


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('burger-cross');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('burger-cross');
    navbar.classList.remove('active');
}
