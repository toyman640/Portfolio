let ham = document.querySelector('#ham-btn');
let content = document.querySelector('.first-section');
let menuList = document.querySelector('.rogue')
ham.addEventListener('click', function(event) {
    content.classList.toggle('blend-mode')
    menuList.classList.toggle('invisible')
    console.log('click');
})

