const express    = require('express');
const exphbs     = require('express-handlebars')
const app        = express();
const path       = require('path');
const db         = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O Express esta rodando na porta ${PORT}`)
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

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

// jobs routes
app.use('/jobs', require('./routes/rotas_jobs'));