let lista = document.createElement('ul');


for(i = 0; i < 5; i++){
    
    let item = document.createElement('li');
    let texto = document.createTextNode(`texto da lista exe.12 ${i}`);
    item.appendChild(texto);

    lista.appendChild(item);

}

let container = document.getElementById('container-principal');

container.appendChild(lista);