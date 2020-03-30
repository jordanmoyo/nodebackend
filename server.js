const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

//connection to the database
const db = require("./app/models");
 db.sequelize.sync({ force: true })
// .then(() => {
//     console.log("Drop and re-sync db.");
// });

const app = express();


var corsOptions = {
    origin: "https://tutorial-demo/client/public/build/.herokuapp.com" || 'http://localhost:8080'
};

app.use(cors(corsOptions));

//To use helmet for Request and Response Encryption
app.use(helmet()); 

//to use body parser on the request body of content json
app.use(bodyParser.json());

//to use body parser on the request body of content url encoded
app.use(bodyParser.urlencoded({ extended : true }));

//lets creat a Simple 
app.get("/",(req, res) => {
    res.json({message: "Welcome to Jordans App"});
});

require("./app/routes/tutorial.routes")(app);

//Lets set a port number for the app to listern on
const PORT = process.env.PORT || 3000;


if( process.env.NODE_ENV === "production" ){
    app.use(express.static('client/dist'));

    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, 'client','dist','index.html')); 
    });
}


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});