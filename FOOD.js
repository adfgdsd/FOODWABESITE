let Home =document.querySelector('.Home')
let About =document.querySelector('.About')
let service =document.querySelector('.service')
let blog =document.querySelector('.blog')
let text =document.querySelector('.text')

let real_About =document.querySelector('.real_About')
let buy =document.querySelector('.buy')
let contact =document.querySelector('.contact')

let all =document.querySelector('#all')
let two =document.querySelector('#two')
let three =document.querySelector('#three')
let four =document.querySelector('#four')

all.addEventListener("click",()=>{
    Home.style.display="flex"
    About.style.display="flex"
    service.style.display="flex"
    blog.style.display="flex"
    text.style.display="flex"

    real_About.style.display="none"
    buy.style.display="none"
    contact.style.display="none"
})

two.addEventListener("click",()=>{
    Home.style.display="none"
    About.style.display="none"
    service.style.display="none"
    blog.style.display="none"
    text.style.display="none"

    real_About.style.display="flex"
    buy.style.display="none"
    contact.style.display="none"
})


three.addEventListener("click",()=>{
    Home.style.display="none"
    About.style.display="none"
    service.style.display="none"
    blog.style.display="none"
    text.style.display="none"

    real_About.style.display="none"
    buy.style.display="flex"
    buy.classList.add('active');
    contact.style.display="none"
})


four.addEventListener("click",()=>{
    Home.style.display="none"
    About.style.display="none"
    service.style.display="none"
    blog.style.display="none"
    text.style.display="none"

    real_About.style.display="none"
    buy.style.display="none"
    contact.style.display="flex"
})


let menu =document.querySelector('#menu');
let ul =document.querySelector('#ul');
menu.addEventListener("click",()=>{
    ul.classList.toggle('actiove');
})

const myFunction=(x)=> {
    x.classList.toggle("fa-times");
}