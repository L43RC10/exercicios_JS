let btn01 = document.querySelector('#btn01');
let btn02 = document.querySelector('#btn02');

function msg(e){
    console.log(e);
}

btn01.addEventListener('click', msg);

btn02.addEventListener('click', function(event){
    console.log(event);
});