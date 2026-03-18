const previousOperaationText = document.querySelector("#previous-operation");
const currentOperaationText = document.querySelector("#current-operations");
const buttons = document.querySelectorAll("#buttons-container button");

class Caculator {

}

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        console.log(value);
    });
});