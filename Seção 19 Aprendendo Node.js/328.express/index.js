let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send('Primeira rota com Express');
});

app.get('/teste', function(req, res) {
    res.send('testando outra rota');
});

app.get('/db', function(req, res) {
    res.send('link para o Data Base');
});

app.listen(3000, function(){
    console.log('A aplicação esta funcionando na porta 3000');
})