'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

//mongoose guarda el nombre de la entidad 'Project' quitando la 
//mayuscula y agregando el plural a la palabra result: 'projects'
module.exports = mongoose.model('Project', ProjectSchema);