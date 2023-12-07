const body = document.querySelector('.body')
const puntero = document.querySelector('.puntero')
const puntero2 = document.querySelector('.puntero2')
const divContact = document.querySelector('.div--contact')
const nav = document.querySelector('.nav')
const footer__right = document.querySelector('.footer__right')
let divContactGrande = false
const ladoPuntero = 70
const ladoPunteroGrande = 90
puntero.style.width = ladoPuntero + "px"
puntero.style.height = ladoPuntero + "px"
puntero.style.borderRadius = ladoPuntero + "px"
puntero2.style.borderRadius = ladoPuntero + "px"



body.addEventListener('mousemove', (e) =>{
    const lado = divContactGrande ? ladoPunteroGrande : ladoPuntero
    puntero.style.top = (e.pageY - (ladoPuntero / 2)) + "px"
    puntero.style.left = (e.pageX - (ladoPuntero / 2)) + "px"
})

divContact.addEventListener('mouseover', () => {
    puntero.style.width = ladoPunteroGrande + "px"
    puntero.style.height = ladoPunteroGrande + "px"
    divContactGrande = true;
})

divContact.addEventListener('mouseout', () => {
    puntero.style.width = ladoPuntero + "px"
    puntero.style.height = ladoPuntero + "px"
    
})

nav.addEventListener('mouse', () => {
    nav.style.width = ladoPunteroGrande + "px"
    nav.style.height = ladoPunteroGrande + "px"
    divContactGrande = true;
})

nav.addEventListener('mouseo', () => {
    nav.style.width = ladoPuntero + "px"
    nav.style.height = ladoPuntero + "px"
    
})

footer__right.addEventListener('mousef', () => {
    footer__right.style.width = ladoPunteroGrande + "px"
    footer__right.style.height = ladoPunteroGrande + "px"
    divContactGrande = true;
})

footer__right.addEventListener('mousefoo', () => {
    footer__right.style.width = ladoPuntero + "px"
    footer__right.style.height = ladoPuntero + "px"
    
})
