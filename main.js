
let text2 = document.querySelector('.text2');
let index = 0;
let text = 'front end devloper';

setInterval(myfunction, 150);
function myfunction(){
    text2.textContent = text.slice(0, index++);
    if(index > text.length){
        index = 0;
    }
}

// var typed2 = new Typed('.text2', {
//     strings: ['freelencer', 'and content writter'],
//     typeSpeed: 150,
//     backSpeed: 10,
//     loop: true
//   });
