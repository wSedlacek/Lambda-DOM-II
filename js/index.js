// Your code goes here
const nav = document.querySelector('.main-navigation');
const home = document.querySelector('.home');
const header = document.querySelector('.intro');
const imgs = document.querySelectorAll('img');
const btns = document.querySelectorAll('.btn');

window.addEventListener('load', e => (header.innerHTML = ''));
window.addEventListener('resize', e => (nav.style.color = 'red'));

nav.addEventListener('mouseenter', e => console.log('I am watching you.'));
nav.addEventListener('mouseleave', e => console.log('Wait.... come back!!!'));
nav.addEventListener('wheel', e => (nav.style.color = 'pink'));

home.addEventListener('selectstart', e => {
  home.style.backgroundColor = 'red';
  home.style.color = 'black';
  alert('NO TOUCHING!!');
});

imgs.forEach(img => {
  img.addEventListener('copy', e => alert('Hey! No stealing our photos!'));
  img.addEventListener('drag', e => alert('NO! THIS PHOTO IS OURS!'));
});

btns.forEach(btn => {
  btn.addEventListener('click', e => alert('Our Services have bene shutdown. Check back later.'));
  btn.addEventListener('mouseover', e => (btn.style.backgroundColor = 'red'));
});
