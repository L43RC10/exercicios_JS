let el = document.querySelector('#titulo-principal');

console.log(`largura: ${el.offsetWidth}`); //considera as bordas
console.log(`altura: ${el.offsetHeight}`); //considera as bordas

console.log(`largura: ${el.clientWidth}`); //considera as bordas
console.log(`altura: ${el.clientHeight}`); //considera as bordas