const ham = document.querySelector('#ham-btn');
const hamClose = document.querySelector('#close-menu');
const content = document.querySelector('.cover-all');
const menuList = document.querySelector('.ham-menu');
let restOfPage = document.querySelectorAll('.toggle-section');
const menuItems = document.querySelectorAll('.menu-item');

function hamDisplay() {
  content.classList.toggle('blend-mode');
  menuList.classList.toggle('keep');
  for (let i = 0; i < restOfPage.length; i += 1) {
    restOfPage[i].classList.toggle('keep');
  }
}
ham.addEventListener('click', hamDisplay);
menuItems.forEach((item) => {
  item.addEventListener('click', hamDisplay);
});

hamClose.addEventListener('click', hamDisplay);

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
const pop = document.querySelector('.mobile-popup');
const mainPart = document.querySelector('.main-pop');
const mobileClosePop = document.querySelector('#close-mobile-pop');
const mobilePopStacks = document.querySelector('.mobile-pop-stacks');

const cardObject1 = {
  one: {
    title: 'AG SUMMIT',
    info: ['AGRICULTURE', 'SUMMIT', '2023'],
    image: 'images/real-work-d-1.png',
    mobiledesc0: 'A web application based on informing propertive deligate about course of program of an upcomming summit',
    mobileGit0: 'https://github.com/toyman640/Agro-Summit.git',
    mobileLive0: 'https://toyman640.github.io/Agro-Summit/',
  },
  two: {
    title: 'Budget App.',
    info: ['KOWOPE', 'FINANCE', 'BUDGET'],
    image: 'images/real-word-d-2(fix).PNG',
    mobiledesc1: ' Create a mobile-view-only web application where users can sign up, establish budget categories, and log expenses corresponding to each category.',
    mobileGit1: 'https://github.com/toyman640/budget-app.git',
    mobileLive1: 'https://toyman640.github.io/Agro-Summit/',
  },
  three: {
    title: 'Meal Recipe',
    info: ['MEALS', 'INGREDIENTS', 'LIKES'],
    image: 'images/real-word-d-3.PNG',
    mobiledesc2: ' Develop a desktop webpage that consumes an API, presenting users with a variety of international dishes along with their corresponding ingredients. Users can interact by liking meals and leaving comments for each meal',
    mobileGit2: 'https://github.com/toyman640/Javascript-Capstone-project.git',
    mobileLive2: 'https://toyman640.github.io/Javascript-Capstone-project/dist/',
  },
  four: {
    title: 'Farm hub',
    info: ['Census', 'Chart', 'Records'],
    image: 'images/real-word-d-4(main).PNG',
    mobiledesc3: 'Create a Python-based web application designed to manage and track essential data related to animal populations. The application will facilitate the recording of animal population metrics, including mortality and births, while also maintaining detailed records for various departments involved in the management of these populations.',
    mobileGit3: 'https://github.com/toyman640/farmapp.git',
    mobileLive3: 'https://toyman640.pythonanywhere.com/',
  },
};

function handleBackground() {
  content.classList.toggle('blend-mode');
  pop.classList.toggle('hide-pop');
  for (let i = 0; i < restOfPage.length; i += 1) {
    restOfPage[i].classList.toggle('keep');
  }
}

const mainTittle = cardObject1.one.title;
const deskUl1 = cardObject1.one.info[0];
const deskUl2 = cardObject1.one.info[1];
const deskUl3 = cardObject1.one.info[2];
const deskimage1 = cardObject1.one.image;
const mobileDescribe0 = cardObject1.one.mobiledesc0;
const mobileGithub0 = cardObject1.one.mobileGit0;
const { mobileLive0 } = cardObject1.one;

function popUp() {
  mainPart.children[0].children[0].innerHTML = mainTittle;
  mainPart.children[1].children[0].innerHTML = deskUl1;
  mainPart.children[1].children[2].innerHTML = deskUl2;
  mainPart.children[1].children[4].innerHTML = deskUl3;
  mainPart.children[2].src = deskimage1;
  mainPart.children[3].innerHTML = mobileDescribe0;
  mainPart.children[5].children[0].href = mobileLive0;
  mainPart.children[5].children[1].href = mobileGithub0;
  mobilePopStacks.innerHTML = '';
  mobilePopStacks.innerHTML += `<button class="pop-stacks">HTML</button>
  <button class="pop-stacks">CSS</button>
  <button class="pop-stacks">JavaScript</button>`;
  handleBackground();
}
popButton.addEventListener('click', popUp);

mobileClosePop.addEventListener('click', handleBackground);

const mainTittle2 = cardObject1.two.title;
const desk2Ul1 = cardObject1.two.info[0];
const desk2Ul2 = cardObject1.two.info[1];
const desk2Ul3 = cardObject1.two.info[2];
const desk2image1 = cardObject1.two.image;
const mobileDescribe1 = cardObject1.two.mobiledesc1;
const mobileGithub1 = cardObject1.two.mobileGit1;
const { mobileLive1 } = cardObject1.two;

function popUp1() {
  handleBackground();
  mainPart.children[0].children[0].innerHTML = mainTittle2;
  mainPart.children[1].children[0].innerHTML = desk2Ul1;
  mainPart.children[1].children[2].innerHTML = desk2Ul2;
  mainPart.children[1].children[4].innerHTML = desk2Ul3;
  mainPart.children[2].src = desk2image1;
  mainPart.children[3].innerHTML = mobileDescribe1;
  mainPart.children[5].children[0].href = mobileLive1;
  mainPart.children[5].children[1].href = mobileGithub1;
  mobilePopStacks.innerHTML = '';
  mobilePopStacks.innerHTML += `<button class="pop-stacks">HTML</button>
  <button class="pop-stacks">CSS</button>
  <button class="pop-stacks">JavaScript</button><button class="pop-stacks">Ruby on rails</button>`;
}

popButton1.addEventListener('click', popUp1);

const mainTittle3 = cardObject1.three.title;
const desk3Ul1 = cardObject1.three.info[0];
const desk3Ul2 = cardObject1.three.info[1];
const desk3Ul3 = cardObject1.three.info[2];
const desk3image1 = cardObject1.three.image;
const mobileDescribe2 = cardObject1.three.mobiledesc2;
const mobileGithub2 = cardObject1.three.mobileGit2;
const { mobileLive2 } = cardObject1.three;
mobilePopStacks.innerHTML += '';
mobilePopStacks.innerHTML += `<button class="pop-stacks">HTML</button>
  <button class="pop-stacks">CSS</button>
  <button class="pop-stacks">JavaScript</button><button class="pop-stacks">Webpack</button>`;

function popUp2() {
  handleBackground();
  mainPart.children[0].children[0].innerHTML = mainTittle3;
  mainPart.children[1].children[0].innerHTML = desk3Ul1;
  mainPart.children[1].children[2].innerHTML = desk3Ul2;
  mainPart.children[1].children[4].innerHTML = desk3Ul3;
  mainPart.children[2].src = desk3image1;
  mainPart.children[3].innerHTML = mobileDescribe2;
  mainPart.children[5].children[0].href = mobileLive2;
  mainPart.children[5].children[1].href = mobileGithub2;
}

popButton2.addEventListener('click', popUp2);

const mainTittle4 = cardObject1.four.title;
const desk4Ul1 = cardObject1.four.info[0];
const desk4Ul2 = cardObject1.four.info[1];
const desk4Ul3 = cardObject1.four.info[2];
const desk4image1 = cardObject1.four.image;
const mobileDescribe3 = cardObject1.four.mobiledesc3;
const mobileGithub3 = cardObject1.four.mobileGit3;
const { mobileLive3 } = cardObject1.four;

function popUp3() {
  handleBackground();
  mainPart.children[0].children[0].innerHTML = mainTittle4;
  mainPart.children[1].children[0].innerHTML = desk4Ul1;
  mainPart.children[1].children[2].innerHTML = desk4Ul2;
  mainPart.children[1].children[4].innerHTML = desk4Ul3;
  mainPart.children[2].src = desk4image1;
  mainPart.children[3].innerHTML = mobileDescribe3;
  mainPart.children[5].children[0].href = mobileLive3;
  mainPart.children[5].children[1].href = mobileGithub3;
  mobilePopStacks.innerHTML = '';
  mobilePopStacks.innerHTML += `<button class="pop-stacks">HTML</button>
  <button class="pop-stacks">CSS</button>
  <button class="pop-stacks">JavaScript</button><button class="pop-stacks">Django</button>`;
}

popButton3.addEventListener('click', popUp3);

mobileClosePop.addEventListener('click', handleBackground);

// DESKTOP POPUP CODE

const deskPop1 = document.querySelector('#desk-btn-1');
const deskPop2 = document.querySelector('#desk-btn-2');
const deskPop3 = document.querySelector('#desk-btn-3');
const deskPop4 = document.querySelector('#desk-btn-4');
// const restPage = document.querySelectorAll('.for-desktop');
const deskPop = document.querySelector('.desktop-pop');
const popContent = document.querySelector('.desk-main-pop');
const stacksSection = document.querySelector('.deskpop-stacks-button');

const deskObject1 = {
  first: {
    title0: 'AG SUMMIT',
    info0: ['AGRICULTURE', 'SUMMIT', '2025'],
    image0: 'images/real-work-d-1.png',
    dsec0: 'A web application based on informing propertive deligate about course of program of an upcomming summit. A responsive webpage with a simple layout',
    gitLink0: 'https://github.com/toyman640/Agro-Summit.git',
    liveLink0: 'https://toyman640.github.io/Agro-Summit/',
  },
  second: {
    titleA: 'Budget Application',
    infoA: ['KOWOPE', 'FINANCE', 'BUDGET'],
    imageA: 'images/real-word-d-2(fix).PNG',
    dsec1: 'Create a mobile-view-only web application where users can sign up, establish budget categories, and log expenses corresponding to each category.',
    gitLink1: 'https://github.com/toyman640/budget-app.git',
    liveLink1: 'https://kowope.onrender.com/',
  },
  third: {
    titleB: 'Meal Recipe',
    infoB: ['MEALS', 'INGREDIENTS', 'LIKES AND COMMENTS'],
    imageB: 'images/real-word-d-3.PNG',
    dsec2: 'Create a mobile-view-only web application where users can sign up, establish budget categories, and log expenses corresponding to each category.',
    gitLink2: 'https://github.com/toyman640/Javascript-Capstone-project.git',
    liveLink2: 'https://toyman640.github.io/Javascript-Capstone-project/dist/',
  },
  fourth: {
    titleC: 'Farm hub',
    infoC: ['Census', 'Chart', 'Records'],
    imageC: 'images/real-word-d-4(main).PNG',
    dsec3: 'Create a mobile-view-only web application where users can sign up, establish budget categories, and log expenses corresponding to each category.',
    gitLink3: 'https://github.com/toyman640/farmapp.git',
    liveLink3: 'https://toyman640.pythonanywhere.com/',
  },
};

const deskTitle1 = deskObject1.first.title0;
const deskinfoA = deskObject1.first.info0[0];
const deskinfoB = deskObject1.first.info0[1];
const deskinfoC = deskObject1.first.info0[2];
const deskImage1 = deskObject1.first.image0;
const dsecDescribe = deskObject1.first.dsec0;
const seeLive0 = deskObject1.first.liveLink0;
const seeGit0 = deskObject1.first.gitLink0;

function deskToggle() {
  content.classList.toggle('blend-mode-desk');
  deskPop.classList.toggle('hide-desk-pop');
  for (let c = 0; c < restOfPage.length; c += 1) {
    restOfPage[c].classList.toggle('hide-other-part');
  }
}

function oneButton() {
  popContent.children[0].children[0].innerHTML = deskTitle1;
  popContent.children[1].children[0].innerHTML = deskinfoA;
  popContent.children[1].children[2].innerHTML = deskinfoB;
  popContent.children[1].children[4].innerHTML = deskinfoC;
  popContent.children[2].src = deskImage1;
  popContent.children[3].children[0].innerHTML = dsecDescribe;
  popContent.children[3].children[1].children[1].href = seeLive0;
  popContent.children[3].children[1].children[2].href = seeGit0;
  stacksSection.innerHTML = '';
  stacksSection.innerHTML += `<button class="deskpop-stacks">HTML</button>
  <button class="deskpop-stacks">CSS</button>
  <button class="deskpop-stacks">JavaScript</button>`;
  deskToggle();
}

deskPop1.addEventListener('click', oneButton);

const deskTitle2 = deskObject1.second.titleA;
const deskinfoD = deskObject1.second.infoA[0];
const deskinfoE = deskObject1.second.infoA[1];
const deskinfoF = deskObject1.second.infoA[2];
const deskImage2 = deskObject1.second.imageA;
const dsecDescribe1 = deskObject1.second.dsec1;
const seeLive1 = deskObject1.second.liveLink1;
const seeGit1 = deskObject1.second.gitLink1;

function twoButton() {
  popContent.children[0].children[0].innerHTML = deskTitle2;
  popContent.children[1].children[0].innerHTML = deskinfoD;
  popContent.children[1].children[2].innerHTML = deskinfoE;
  popContent.children[1].children[4].innerHTML = deskinfoF;
  popContent.children[2].src = deskImage2;
  popContent.children[3].children[0].innerHTML = dsecDescribe1;
  popContent.children[3].children[1].children[1].href = seeLive1;
  popContent.children[3].children[1].children[2].href = seeGit1;
  stacksSection.innerHTML = '';
  stacksSection.innerHTML += `<button class="deskpop-stacks">HTML</button>
  <button class="deskpop-stacks">CSS</button>
  <button class="deskpop-stacks">JavaScript</button>
  <button class="deskpop-stacks">Ruby on rails</button>`;
  deskToggle();
}

deskPop2.addEventListener('click', twoButton);

const deskTitle3 = deskObject1.third.titleB;
const deskinfoG = deskObject1.third.infoB[0];
const deskinfoH = deskObject1.third.infoB[1];
const deskinfoI = deskObject1.third.infoB[2];
const deskImage3 = deskObject1.third.imageB;
const dsecDescribe2 = deskObject1.third.dsec2;
const seeLive2 = deskObject1.third.liveLink2;
const seeGit2 = deskObject1.third.gitLink2;

function threeButton() {
  popContent.children[0].children[0].innerHTML = deskTitle3;
  popContent.children[1].children[0].innerHTML = deskinfoG;
  popContent.children[1].children[2].innerHTML = deskinfoH;
  popContent.children[1].children[4].innerHTML = deskinfoI;
  popContent.children[2].src = deskImage3;
  popContent.children[3].children[0].innerHTML = dsecDescribe2;
  popContent.children[3].children[1].children[1].href = seeLive2;
  popContent.children[3].children[1].children[2].href = seeGit2;
  stacksSection.innerHTML = '';
  stacksSection.innerHTML += `<button class="deskpop-stacks">HTML</button>
  <button class="deskpop-stacks">CSS</button>
  <button class="deskpop-stacks">JavaScript</button>
  <button class="deskpop-stacks">Webpack</button>`;
  deskToggle();
}

deskPop3.addEventListener('click', threeButton);

const deskTitle4 = deskObject1.fourth.titleC;
const deskinfoJ = deskObject1.fourth.infoC[0];
const deskinfoK = deskObject1.fourth.infoC[1];
const deskinfoL = deskObject1.fourth.infoC[2];
const deskImage4 = deskObject1.fourth.imageC;
const dsecDescribe3 = deskObject1.fourth.dsec3;
const seeLive3 = deskObject1.fourth.liveLink3;
const seeGit3 = deskObject1.fourth.gitLink3;

function fourButton() {
  popContent.children[0].children[0].innerHTML = deskTitle4;
  popContent.children[1].children[0].innerHTML = deskinfoJ;
  popContent.children[1].children[2].innerHTML = deskinfoK;
  popContent.children[1].children[4].innerHTML = deskinfoL;
  popContent.children[2].src = deskImage4;
  popContent.children[3].children[0].innerHTML = dsecDescribe3;
  popContent.children[3].children[1].children[1].href = seeLive3;
  popContent.children[3].children[1].children[2].href = seeGit3;
  stacksSection.innerHTML = '';
  stacksSection.innerHTML += `<button class="deskpop-stacks">HTML</button>
  <button class="deskpop-stacks">CSS</button>
  <button class="deskpop-stacks">JavaScript</button>
  <button class="deskpop-stacks">Django</button>`;
  deskToggle();
}

deskPop4.addEventListener('click', fourButton);

// end desktop pop-up

const deskPopClose = document.querySelector('#desk-pop-close');

function deskCloseButton() {
  deskToggle();
}

deskPopClose.addEventListener('click', deskCloseButton);

const mail = document.querySelector('#email');
const message = document.querySelector('.validation-message');
const formButton = document.querySelector('#form-sub');
const divMessage = document.querySelector('.div-msg');

function mailChecker(event) {
  const mailInfo = mail.value;
  if (mailInfo !== mailInfo.toLowerCase()) {
    divMessage.classList.remove('invisible');
    message.innerHTML = 'Please, use lower case for email input';
    event.preventDefault();

    setTimeout(() => {
      divMessage.classList.add('invisible');
    }, 5000);
  }
}

formButton.addEventListener('click', mailChecker);

// const nameInput = document.querySelector('#name1');
// const emailInput = document.querySelector('#email1');
// const msgInput = document.querySelector('#message1');

// if (localStorage.length !== 0) {
//   nameInput.value = JSON.parse(localStorage.getItem('obj')).name;
//   emailInput.value = JSON.parse(localStorage.getItem('obj')).email;
//   msgInput.value = JSON.parse(localStorage.getItem('obj')).msg;
// }
// function populateStorage() {
//   const obj = { name: nameInput.value, email: emailInput.value, msg: msgInput.value };
//   localStorage.setItem('obj', JSON.stringify(obj));
// }

// nameInput.onchange = populateStorage;
// emailInput.onchange = populateStorage;
// msgInput.onchange = populateStorage;