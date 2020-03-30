// connection parameters to cleardb
// module.exports = {
//     HOST       : "eu-cdbr-west-02.cleardb.net",
//     USER       : "bb41f4f25964da",
//     PASSWORD   : "cedf756e",
//     DB         : "heroku_32a735a0b851266",
//     dialect    : "mysql",
//     pool       : {
//         max    : 5,
//         min    : 0,
//         acquire: 30000,
//         idle   : 10000
//     }
// };

module.exports = {
        HOST       : "eu-cdbr-west-02.cleardb.net"||"localhost",
        USER       : "bb41f4f25964da"||"root",
        PASSWORD   : "cedf756e"|| "password",
        DB         : "heroku_32a735a0b851266"||"nodejsVueMysqlApp",
        dialect    : "mysql",
        pool       : {
            max    : 5,
            min    : 0,
            acquire: 30000,
            idle   : 10000
        }
    };