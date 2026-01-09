// DECLARAÇÃO DE VARIAVEIS
const question = document.querySelector("#question");
const answerBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

// Perguntas

const questions = [
  {
    "question": "PHP foi desenvolvido para qual fim?",
    "answers": [
      {
        "answer": "back-end",
        "correct": true
      },
      {
        "answer": "front-end",
        "correct": false
      },
      {
        "answer": "Sistema operacional",
        "correct": false
      },
      {
        "answer": "Banco de dados",
        "correct": false
      },
    ]
  },
  {
    "question": "Uma forma de declarar variável em JavaScript:",
    "answers": [
      {
        "answer": "$var",
        "correct": false
      },
      {
        "answer": "var",
        "correct": true
      },
      {
        "answer": "@var",
        "correct": false
      },
      {
        "answer": "#let",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual o seletor de id no CSS?",
    "answers": [
      {
        "answer": "#",
        "correct": true
      },
      {
        "answer": ".",
        "correct": false
      },
      {
        "answer": "@",
        "correct": false
      },
      {
        "answer": "/",
        "correct": false
      },
    ]
  },
]

// SUBSTITUIÇÃO DO QUIZZ PARA PRIMEIRA PERGUNTA
function init(){
  // CRIAR PRIMEIRA PERGUNTA
  createQuestion(0);
}

// CRIA UMA PERGUNTA
function createQuestion(i){

  // LIMPAR QUESTÃO ANTERIOR  
  const oldButtons = answerBox.querySelectorAll("button");

  oldButtons.forEach(function(btn){
    btn.remove();
  });

  // ALTERAR TEXTO DA PERGUNTA
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // INSERE AS ALTERNATIVAS
  questions[i].answers.forEach(function(answer, i){

    // CRIA TEMPLATE DO BOTÃO DO QUIZZ
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer["answer"];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // REMOVER HIDE E TEMPLATE CLASS
      answerTemplate.classList.remove("hide");
      answerTemplate.classList.remove("answer-template");

    // INSERIR ALTERNATIVA NA TELA
    answerBox.appendChild(answerTemplate);

    // INSERIR UM EVENTO DE CLICK NO BOTÃO
    answerTemplate.addEventListener("click", function(){
      console.log(this);
    });

  });

  // INCREMENTAR O NUMERO DA QUESTÃO
  actualQuestion++;

}

// INICIALIZAÇÃO DO QUIZZ


init();