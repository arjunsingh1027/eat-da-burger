// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

const burger = {
    // select all function
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    // insert burger
    insertOne: function (burger_name, cb) {
        orm.insertOne("burgers", "burger_name", burger_name, function (res) {
            cb(res);
        });
    },

    // delete burger
    deleteOne: function(condition, cb){
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        });
    },

    // update burger
    updateOne: function(condition, id, cb){
        orm.updateOne("burgers", condition, id, function(res){
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
