let ham = document.querySelector('#ham-btn');
let content = document.querySelector('.blend-mode');
ham.addEventListener('click', function(event) {
    document.querySelector('.blend-mode').classList.toggle
    ham.classList.toggle(content);
    console.log('click');
})

