let ham = document.querySelector('#ham-btn');
let content = document.querySelector('.first-section');
ham.addEventListener('click', function(event) {
    content.classList.toggle('blend-mode')
    console.log('click');
})

