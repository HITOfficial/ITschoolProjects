console.log('connected');
const images= document.getElementsByClassName('full-screen-image');
const exit = document.getElementsByClassName('close');
const refresh = document.getElementsByClassName('Nutte');
// const strapp = document.getElementByClassName('strap');
randomNumber = Math.floor(Math.random()*6); // liczba całkowita z przedziału 0-4
let x = 4;
actualDate= new Date();
exit[0].addEventListener('click', function(){
    console.log(this);
    this.parentNode.style.display = 'none';
});

refresh[0].addEventListener('click', function() {
    location.reload();
});

function pickImg () {
    setTimeout(function(){
    images[0].src ="images/"+ randomNumber +".jpg"; 
    console.log(randomNumber);
    randomNumber = Math.floor(Math.random()*4);
    pickImg();
    }, 9000);
}
window.onload = pickImg();


// function randomIMG () {
//     images[0].src = "images/"+
// }