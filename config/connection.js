// Database Connections
//const Promises = require('bluebird');
const MySQL = require('mysql');

//Promises.promisifyAll(require("mysql/lib/Connection").prototype);
//Promises.promisifyAll(require("mysql/lib/Pool").prototype);

var burgers = MySQL.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db"
});

var allConnections = {
	'burgers_db' : burgers
};

module.exports = allConnections;