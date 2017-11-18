// Importar as configurações do servidor
var app = require('./config/server');

// parametrizar a porta de escuta
var server = app.listen(3000, function () {
    console.log('Servidor online');
});

// permite que o socket.io escute na mesma porta
// disponibilizada pelo NodeJS para o Express
var io = require('socket.io').listen(server);

// criando conexão por websocket
io.on('connection', function (socket) {
    console.log('Usuário conectou.');

    socket.on('disconnect', function () {
        console.log('Usuário desconectou.');
    });
});