   // movable title
   let typed= new Typed(".designation",{
    strings:["Web Developer !" ,"React Developer !" ],
    typeSpeed:50,
    backSpeed:20,
    backDelay:1000,
    loop:true,
});




let sections = document.querySelectorAll('section');
let  navlinks= document.querySelectorAll('header nav a');

window.onscroll= () =>{
 sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navlinks.forEach(links => {
         links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    });
 };
});
};

// sticky navbar

let header = document.querySelector('header')

header.classList.toggle('sticky',window.scrollY > 100)

// toogle icon navbar

document.addEventListener('DOMContentLoaded', function () {
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});
 