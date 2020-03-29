const db        = require("../models");
const Tutorial  = db.turtorials;
const Op        = db.Sequelize.Op;

//Creat and Save a new tutorial
exports.create = (req, res) => {
    
    //lets validate the request
    if (!req.body.title){
        res.status(400).send({
            message:"Content can't be empty!"
        });
        return;
    }

    //lets Create a Tutorial
    const tutorial = {
        title        : req.body.title,
        description  : req.body.description,
        published    : req.body.published ? req.body.published : false
    };

    //console.log(tutorial);

    //Save Tutorial
    Tutorial.create(tutorial)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "Some errors occured whille creating the Tutorial."
        });
    });

};

//Retreive all tutorial from database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {title: { [Op.like]: `%${title}%`} } : null;

    Tutorial.findAll({ where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some errors occurred while retrieving tutorials."
            });
        });
};

// Find a Single Tutorial with a title
exports.findByTitle = (req, res) => {
    const title = req.params.title;
    var condition = title ? {title: { [Op.like]: `%${title}%`} } : null;

    Tutorial.findAll({ where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some errors occurred while retrieving tutorials."
            });
        });
};

// Find a Single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some errors ocurred while shearching for the tutorial with id: " + id
            });
        });
    

};

//Update a tutorial by its is in th request
exports.update = (req, res) => {
    const id = req.params.id;
    
    Tutorial.update(req.body,{ where: {id: id}})
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Tutorial was updated successfully."
                });
            }
            else{
                res.send({
                   message: `Cannot update Turtorial with id: ${id} or the tutorial dont exist or the req.body is empty` 
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message : err.message || `Error Updating Tutorial with id: ${id}`
            });
        });

};

//Delete a Tutorial with a specific id in the reaquest
exports.delete = (req, res) => {
    const id = req.params.id;

    Tutorial.destroy({ where: {id: id}})
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Tutorial was deleted successfully."
                });
            }
            else{
                res.send({
                   message: `Cannot delete Turtorial with id: ${id} or the tutorial dont exist or the req.body is empty` 
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message : err.message || `Error deleting Tutorial with id: ${id}`
            });
        });

};

//Delete all Turtorail from the database
exports.deleteAll = (req, res) => {
    const id = req.params.id;

    Tutorial.destroy({ where: {}})
        .then(num => {
            
            res.send({
                message: `${num} Tutorials were successfully deleted.`
            });
            
        })
        .catch(err => {
            res.status(500).send({
                message : err.message || `Error occurred whille deleting all Tutorials`
            });
        });

};

//Find all Publishes Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: {published: true}})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some errors occurred while retrieving Published tutorials."
        });
    });
};