const toggle = document.querySelector('.navbar .toggle');
const Tclose = document.querySelector('.navbar .close');
const Ul = document.querySelector('.navbar ul');
const Uli = document.querySelectorAll('.navbar ul li');
toggle.addEventListener('click', function(){
    toggle.classList.toggle('active')
    Ul.classList.toggle('active')
    Tclose.classList.toggle('active')
})
Tclose.addEventListener('click', function(){
    toggle.classList.toggle('active')
    Ul.classList.toggle('active')
    Tclose.classList.toggle('active')
})

for (let i = 0; i < Uli.length; i++) {
    Uli[i].addEventListener('click', function(){
        toggle.classList.toggle('active')
        Ul.classList.toggle('active')
        Tclose.classList.toggle('active')
    })
}