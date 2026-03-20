require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyparser = require('body-parser');

//Tipo De Servidor Qie Realizaremos
const http = require('http');

//Iniciar Y Configurar Express
const app = express();

//Log Mostrar Informacion En Consola
app.use(logger('dev'));

//Parsear Las Entradas De Solicitud De Datos
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended:false }));

//Configurar Las Rutas De Bienvenida Al Servidor
app.get('/', (req, res)=> res.status(200).send({
    message: 'Bienvenido Al La API REST De Compras.'
}))
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;