// Database Connections

const MySQL = require('mysql');
if(process.env.JAWSDB_URL){
	burgers= MySQL.createConnection(process.env.JAWSDB_URL);
}
else{
var burgers = MySQL.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db"
});
};

// var burgers = MySQL.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "root",
// 	database: "burgers_db"
// });

var allConnections = {
	'burgers_db' : burgers
};

module.exports = allConnections;