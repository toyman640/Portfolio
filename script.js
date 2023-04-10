let ham = document.querySelector('#ham-btn');
let content = document.querySelector('.first-section');
let menuList = document.querySelector('.rogue')
let restOfPage = document.querySelectorAll('.toggle-section')
ham.addEventListener('click', function(event) {
    content.classList.toggle('blend-mode')
    menuList.classList.toggle('invisible')
    for (let i=0; i<restOfPage.length; i++){
        restOfPage[i].classList.toggle('invisible')
    }
    
    
})
restOfPage = document.querySelectorAll('.toggle-section')
let closeButton = document.querySelector('#close_button');
closeButton.addEventListener('click', function(event) {
    content.classList.toggle('blend-mode')
    menuList.classList.toggle('invisible')
    for (let i=0; i<restOfPage.length; i++){
        restOfPage[i].classList.toggle('invisible')

    }
    
})
