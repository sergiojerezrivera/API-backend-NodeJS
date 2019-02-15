'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Archivos de rutas


//middlewares metodo que ejecuta antes de un controlador
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//CORS


//Rutas


//Exportar
module.exports = app;