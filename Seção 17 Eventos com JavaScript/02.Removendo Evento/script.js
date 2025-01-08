let btn01 = document.querySelector('#btn01');
let btn02 = document.querySelector('#btn02');

function msg(){
    console.log('clicou em mim!')
}

btn01.addEventListener('click', msg);

btn02.addEventListener('click', ()=>{
    btn01.removeEventListener('click',msg)
});