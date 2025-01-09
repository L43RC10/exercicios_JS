let btn01 = document.querySelector('#btn01');
let btn02 = document.querySelector('#btn02');
let p = document.querySelector('p');

function msg(e){
    console.log('Clicou no button');
    e.stopPropagation();
}

btn01.addEventListener('click', msg);

btn02.addEventListener('click', function(event){
    console.log(event);
});

p.addEventListener('click', function() {
    console.log('clicou no paragrafo');
});