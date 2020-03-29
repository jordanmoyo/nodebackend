module.exports = app => {
     const tutorials = require("../controllers/tutorial.controller");
     var router = require("express").Router();

     //Create a new router 
     router.post("/", tutorials.create);

     //Retrieve all tutorials
     router.get("/",tutorials.findAll);

     //Retrieve tutorials with title 
     router.get(`/{title}`,tutorials.findByTitle);

     //Retrieving all Published Tutorials
     router.get("/published", tutorials.findAllPublished);

     //Retrieving a single tutorial with an id
     router.get("/:id", tutorials.findOne);

     //Update tutorial with id
     router.put("/:id", tutorials.update);

     //Delete a tutorial with id
     router.delete("/:id", tutorials.delete);

     //Delete All tutorials
     router.delete("/", tutorials.deleteAll);

     app.use('/api/tutorials', router);
};