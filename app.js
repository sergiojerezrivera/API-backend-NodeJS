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
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Pagina de inicio</h1>"
    );
}); 

app.post('/test/:id', (req, res) => {
    console.log(req.body.nombre);
    console.log(req.query.web);
    console.log(req.params.id);
    res.status(200).send({
        message: "Hola Mundo desde mi API de NodeJS"
    });
}); 

//Exportar
module.exports = app;