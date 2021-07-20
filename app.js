window.onload = function () {
    let preLoader = document.getElementById('preloader');
    let page  = document.getElementById('main-page');

    preLoader.style.display = 'none';
    page.style.display = 'block';

}

window.addEventListener('scroll' , function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 0);
})


function toggle () {
    let header = document.querySelector('header');
    header.classList.toggle('active');
}
