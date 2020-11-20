const navbtn = document.getElementById('navbtn');
const nav_bar = document.getElementById('navbar');
const body = document.querySelector('body');

navbtn.addEventListener('click', nav);

function nav() {
  nav_bar.classList.toggle('active');
  body.classList.toggle('active');
}

function onloads() {
  if (window.innerWidth > 900) {
    nav_bar.classList.add('active');
    body.classList.add('active');
  }
  if (window.innerWidth < 900) {
    nav_bar.classList.remove('active');
    body.classList.remove('active');
  }
}
window.addEventListener('resize', onloads);
window.onloadeddata(onloads());
