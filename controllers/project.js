'use strict'

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy la Home'
        });
    },

    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el metodo TEST del controller project.js'
        });
    }
};

module.exports = controller;