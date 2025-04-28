let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adiciona o evento de click aos boxes
for(let i = 0; i < boxes.length; i++){
    
    // quando alguem clica na caixa
    boxes[i].addEventListener("click", function(){

        let elemento = checkElemento(player1, player2);

        // verifica se ja tem x ou o
        if(this.childNodes.length == 0){

            let cloneElemento = elemento.cloneNode(true);

            this.appendChild(cloneElemento);

            // computar jogada

            if(player1 == player2){
                player1++;
            } else {
                player2++;
            }

            // checa quem venceu
            checkWinCondition();

        }

    });
}

// ve quem vai jogar

function checkElemento(player1, player2){

    if(player1 == player2) {
        // x
        elemento = x;
    } else {
        // o
        elemento = o;
    }

    return elemento;

}

// Ver quem ganhou
function checkWinCondition(){
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){

            console.log('x venceu');

        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){

            console.log('o venceu');

        }

    }
}

// paramos no minuti 4:37 da aula 310

// Quer levar um soco na cara?