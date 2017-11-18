// importação do módulo do framework Express
var express = require('express');

// importação do módulo do Consign
var consign = require('consign');

// importação do módulo do body-parser
var bodyParser = require('body-parser');

// importação do módulo do Express validator
var expressValidator = require('express-validator');

// inicialização do Express
var app = express();

// configuração do EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

// configuração do middleware express.static
app.use(express.static('./app/public'));

// configuração do middleware Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

// configuração do middleware Express validador
app.use(expressValidator());

// efetua auto-load das rotas, models e controllers para o objeto 'app'
consign()
    .include('app/routes')
    //.then('app/models')
    .then('app/controllers')
    .into(app);

// exportação do objeto 'app' (Express)
module.exports = app;