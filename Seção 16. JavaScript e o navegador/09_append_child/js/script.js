let novoElemento = document.createElement('p');
let texto = document.createTextNode('Algum texto box');

novoElemento.appendChild(texto);

let p = document.querySelector('#paragrafo-box');
let pai = p.parentNode;

pai.appendChild(novoElemento);