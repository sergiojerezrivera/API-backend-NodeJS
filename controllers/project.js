'use strict'

var Project = require('../models/project');

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
    },

    saveProject: function(req, res){
        var project = new Project();

        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored)=> {
            if(err) return res.status(500).send({
                message: 'error al guardar el documento'
            });

            if(!projectStored) return res.status(404).send({
                message: 'No se ha podido guardar el project'
            });

            return res.status(200).send({project: projectStored});
        });
        
    },

    getProject: function(req, res){
        var projectId = req.params.id;

        if(projectId == null) return res.status(500).send({message: 'Error al devolver datos'});

        Project.findById(projectId, (err, project)=>{
            if(err) return res.status(500).send({message: 'Error al devolver datos'});

            if(!project) return res.status(404).send({message: 'El proyecto no existe'});

            return res.status(200).send({
                project
            });
        });
    },

    getProjects: function(req, res) {

        //se pueden hacer reglas o filtrar info haciendo:
        //Project.find({year:2019}).exec //filtra por anio
        //Project.find({}).sort('-year').exec //ordena de mayor a menor
        Project.find({}).exec((err, projects) =>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

            if(!projects) return res.status(404).send({message: 'No hay proyectos que mostrar.'});

            return res.status(200).send({projects});
        });
       
    },

    updateProject: function(req, res) {
        var projectId = req.params.id;

        var update = req.body;

        //me actuliza en BD el dato y con ({new:true} me actualiza el listado en consola)
        Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated)=>{
            if(err) return res.status(500).send({message: 'Error al actualizar'});
            if(!projectUpdated) return res.status(404).send({message: 'No existe el proyecto a actualizar.'});
            return res.status(200).send({project: projectUpdated});
        });
    },

    deleteProject: function(req, res) {
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, deletedProject)=>{
            if(err) return res.status(500).send({message: 'Error al Eliminar registro.'});
            if(!deletedProject) return res.status(404).send({message: 'No existe el proyecto a eliminar.'});
            
            return res.status(200).send({project: deletedProject});
        });
    }
};

module.exports = controller;