// connection parameters to cleardb
module.exports = {
    HOST       : "remotemysql.com",
    USER       : "KOq48HunCq",
    PASSWORD   : "dCv8UZFjgP",
    DB         : "KOq48HunCq",
    dialect    : "mysql",
    pool       : {
        max    : 5,
        min    : 0,
        acquire: 30000,
        idle   : 10000
    }
};

// module.exports = {
//         HOST       : "eu-cdbr-west-02.cleardb.net"||"localhost",
//         USER       : "bb41f4f25964da"||"root",
//         PASSWORD   : "cedf756e"|| "password",
//         DB         : "heroku_32a735a0b851266"||"nodejsVueMysqlApp",
//         dialect    : "mysql",
//         pool       : {
//             max    : 5,
//             min    : 0,
//             acquire: 30000,
//             idle   : 10000
//         }
//     };