// Import MSQL connection
var connection = require("../config/connection.js");

// variable to set object relational mapping(orm)
var orm = {
    // function to select burgers from the list
    selectAll: function(tableName, cb) {
        var queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // function to add a burger from user input
    insertOne: function (tableName, cols, vals, cb) {
        var queryString = `INSERT INTO ${tableName} (${cols}) VALUES ('${vals}');`;
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            } 
            cb(result);
        });
    },
    // function to update if the burger has been devoured or not
    updateOne: function (colVal, id, cb) {
        var queryString = `UPDATE burgers SET devoured='1' WHERE ${colVal}=${id}`;
        connection.query(queryString, [id], function(err, result){
            if (err) {
                throw err;
            } 
            cb(result);
        });
    }
}
module.exports = orm;