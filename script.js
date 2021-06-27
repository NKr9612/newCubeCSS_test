const cube = document.querySelector('.cube');

const buttonFront = document.querySelector('.buttonContainer__rotate-front');
const buttonRight = document.querySelector('.buttonContainer__rotate-right');
const buttonBack = document.querySelector('.buttonContainer__rotate-back');
const buttonLeft = document.querySelector('.buttonContainer__rotate-left');
const buttonTop = document.querySelector('.buttonContainer__rotate-top');
const buttonBottom = document.querySelector('.buttonContainer__rotate-bottom');


const myVideo = document.querySelector('.myVideo');

myVideo.loop = false;
myVideo.muted = true;
myVideo.playsInline = true;
myVideo.controls = true;



const buttons = document.querySelectorAll('button');


const clearEveryClass = () =>{
        if(cube.classList.contains('show-front') || cube.classList.contains('show-right') || cube.classList.contains('show-back') || cube.classList.contains('show-left') || cube.classList.contains('show-top') || cube.classList.contains('show-bottom') ){
            cube.classList.remove('show-front');
            cube.classList.remove('show-right');
            cube.classList.remove('show-back');
            cube.classList.remove('show-left');
            cube.classList.remove('show-top');
            cube.classList.remove('show-bottom');
        }
}


buttonFront.addEventListener('click', ()=>{
  clearEveryClass();
  cube.classList.add('show-front');
})
buttonRight.addEventListener('click', ()=>{
    clearEveryClass();
    cube.classList.add('show-right');
  })
  buttonBack.addEventListener('click', ()=>{
    clearEveryClass();
    cube.classList.add('show-back');
  })
  buttonLeft.addEventListener('click', ()=>{
    clearEveryClass();
    cube.classList.add('show-left');
  })
  buttonTop.addEventListener('click', ()=>{
    clearEveryClass();
    cube.classList.add('show-top');
  })
  buttonBottom.addEventListener('click', ()=>{
    clearEveryClass();
    cube.classList.add('show-bottom');
  })


