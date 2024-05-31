// for loader
window.addEventListener('load', function () {
    // Hide the preloader when the page is fully loaded
    var preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
});
  
// for navbar 
const mainmenu = document.querySelector('.mainmenu');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');
const home1 = document.querySelector('.home1')
const about1 = document.querySelector('.about1')
const project1 = document.querySelector('.project1')
const contact1 = document.querySelector('.contact1')

openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);
home1.addEventListener('click',close);
about1.addEventListener('click',close);
project1.addEventListener('click',close);
contact1.addEventListener('click',close);

function show(){
    mainmenu.style.display ='flex';
    mainmenu.style.top = '0';
}
function close(){
    mainmenu.style.top = '-100%';
}


// for contact 
document.getElementById("contactform").addEventListener("submit", function(event) {
    alert("Message sent successfully!");
})