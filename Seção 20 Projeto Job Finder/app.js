const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O Express esta rodando na porta ${PORT}`)
});


// db connection
db
.authenticate()
.then(() => {
    console.log("Conectado com sucesso");
})
.catch(err => {
    HTMLFormControlsCollection.log(`Ocorreu um erro ao conectar = ${err}`)
});

// rotes
app.get('/', (req, res) => {
    res.send('Esta funcionando... 1');
});