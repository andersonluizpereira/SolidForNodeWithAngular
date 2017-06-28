var mysql      = require('mysql');
var config = require('config');

var connection = mysql.createConnection({
    host : config.get('base.host'),
    port : config.get('base.port'),
    user : config.get('base.user'),
    password : config.get('base.password'),
    database : config.get('base.database')
});

connection.connect();

module.exports = connection;
