// connection parameters to cleardb
module.exports = {
    HOST       : "eu-cdbr-west-02.cleardb.net",
    USER       : "b0bd0280d926ca",
    PASSWORD   : "f15d6787",
    DB         : "heroku_33682a2b2e0ab67",
    dialect    : "mysql",
    pool       : {
        max    : 5,
        min    : 0,
        acquire: 30000,
        idle   : 10000
    }
};

//module.exports = {
    //     HOST       : "localhost",
    //     USER       : "root",
    //     PASSWORD   : "password",
    //     DB         : "nodejsVueMysqlApp",
    //     dialect    : "mysql",
    //     pool       : {
    //         max    : 5,
    //         min    : 0,
    //         acquire: 30000,
    //         idle   : 10000
    //     }
    // };