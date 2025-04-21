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

// add o evento de click aos boxes
for(let i = 0; i < boxes.length; i++){
    
    // quando alguem clica na caixa
    boxes[i].addEventListener("click", function(){
        if(player1 == player2) {
            // x
        } else {
            // o
        }
    })
}