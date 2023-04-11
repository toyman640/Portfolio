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

const popButton = document.querySelector('#button-1');
const popButton1 = document.querySelector('#button-2');
const popButton2 = document.querySelector('#button-3');
const popButton3 = document.querySelector('#button-4');
const pop = document.querySelector('#work-1');
const mainPart = document.querySelector('.pop-main');

const cardObject1 = {
  one: {
    title: 'Tonic',
    info: ['CANOPY', 'Back End Dev', '2015'],
    image: 'images/works-1.svg',
  },
  two: {
    title: 'Multi-Post Stories',
    info: ['CANOPY', 'Back End Dev', '2015'],
    image: 'images/works-2.svg',
  },
  three: {
    title: 'Tonic',
    info: ['CANOPY', 'Back End Dev', '2015'],
    image: 'images/works-3.svg',
  },
  four: {
    title: 'Multi-Post Stories',
    info: ['CANOPY', 'Back End Dev', '2015'],
    image: 'images/works-4.svg',
  },
};

function handleBackground() {
  content.classList.toggle('blend-mode');
  pop.classList.toggle('invisible-pop');
  for (let i = 0; i < restOfPage.length; i += 1) {
    restOfPage[i].classList.toggle('invisible-pop');
  }
}

const mainTittle = cardObject1.one.title;
const deskUl1 = cardObject1.one.info[0];
const deskUl2 = cardObject1.one.info[1];
const deskUl3 = cardObject1.one.info[2];
const deskimage1 = cardObject1.one.image;

function popUp() {
  mainPart.children[1].innerHTML = mainTittle;
  mainPart.children[2].children[0].innerHTML = deskUl1;
  mainPart.children[2].children[2].innerHTML = deskUl2;
  mainPart.children[2].children[4].innerHTML = deskUl3;
  mainPart.children[3].src = deskimage1;
  handleBackground();
}
popButton.addEventListener('click', popUp);

const mainTittle2 = cardObject1.two.title;
const desk2Ul1 = cardObject1.two.info[0];
const desk2Ul2 = cardObject1.two.info[1];
const desk2Ul3 = cardObject1.two.info[2];
const desk2image1 = cardObject1.two.image;

function popUp1() {
  handleBackground();
  mainPart.children[1].innerHTML = mainTittle2;
  mainPart.children[2].children[0].innerHTML = desk2Ul1;
  mainPart.children[2].children[2].innerHTML = desk2Ul2;
  mainPart.children[2].children[4].innerHTML = desk2Ul3;
  mainPart.children[3].src = desk2image1;
}

popButton1.addEventListener('click', popUp1);

const mainTittle3 = cardObject1.three.title;
const desk3Ul1 = cardObject1.three.info[0];
const desk3Ul2 = cardObject1.three.info[1];
const desk3Ul3 = cardObject1.three.info[2];
const desk3image1 = cardObject1.three.image;

function popUp2() {
  handleBackground();
  mainPart.children[1].innerHTML = mainTittle3;
  mainPart.children[2].children[0].innerHTML = desk3Ul1;
  mainPart.children[2].children[2].innerHTML = desk3Ul2;
  mainPart.children[2].children[4].innerHTML = desk3Ul3;
  mainPart.children[3].src = desk3image1;
}

popButton2.addEventListener('click', popUp2);

const mainTittle4 = cardObject1.four.title;
const desk4Ul1 = cardObject1.four.info[0];
const desk4Ul2 = cardObject1.four.info[1];
const desk4Ul3 = cardObject1.four.info[2];
const desk4image1 = cardObject1.four.image;

function popUp3() {
  handleBackground();
  mainPart.children[1].innerHTML = mainTittle4;
  mainPart.children[2].children[0].innerHTML = desk4Ul1;
  mainPart.children[2].children[2].innerHTML = desk4Ul2;
  mainPart.children[2].children[4].innerHTML = desk4Ul3;
  mainPart.children[3].src = desk4image1;
}

popButton3.addEventListener('click', popUp3);

const popClose = document.querySelector('.pop-close');

function popCloseButton() {
  handleBackground();
}

popClose.addEventListener('click', popCloseButton);