const ham = document.querySelector('#ham-btn');
const content = document.querySelector('.first-section');
const menuList = document.querySelector('.rogue');
let restOfPage = document.querySelectorAll('.toggle-section');

function hamDisplay() {
  content.classList.toggle('blend-mode');
  menuList.classList.toggle('invisible');
  for (let i = 0; i < restOfPage.length; i += 1) {
    restOfPage[i].classList.toggle('invisible');
  }
}
ham.addEventListener('click', hamDisplay);

const listItems = document.querySelectorAll('.ham-li');
restOfPage = document.querySelectorAll('.toggle-section');
function hamLinks() {
  content.classList.toggle('blend-mode');
  menuList.classList.toggle('invisible');
  for (let i = 0; i < restOfPage.length; i += 1) {
    restOfPage[i].classList.toggle('invisible');
  }
}
for (let j = 0; j < listItems.length; j += 1) {
  hamLinks();
  listItems[j].addEventListener('click', hamLinks);
}