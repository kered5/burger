// APP ORM
const connection = require('./connection').burgers_db;

var tableName = "burgers";

var orm = {
  // Get all burgers from DB
  selectAll: function(callback){
    
    var queryString = 'SELECT * FROM ' + tableName;
    
    connection.query(queryString, function(err, result) {

      callback(result);

    });
  },
  // Add new burger to db
  insertOne: function(burgerName, callback){
    // Query 
    var queryString = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    // Default value of false 
    var burgerDevoured = false;
    
    connection.query(queryString, [burgerName, burgerDevoured], function(err, result) {
      if(err) console.log(err);
      
      callback(result);

    });
  },
  // Update a burger
  updateOne: function(burgerId, callback){
    
    var queryString = "UPDATE " + tableName + " SET devoured=1 WHERE id=?";

    connection.query(queryString, [burgerId], function(err, result) {
      if(err) console.log(err);

      callback(result);

    });
  }
}


module.exports = orm;