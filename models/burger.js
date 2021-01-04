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
    insertBurger: function (burger_name, cb) {
        orm.insertBurger("burgers", "burger_name", burger_name, function (res) {
            cb(res);
        });
    },

    // delete burger
    deleteBurger: function(id, cb){
        orm.deleteBurger("burgers", id, cb);
    },

    // update burger
    updateBurger: function(condition, id, cb){
        orm.updateBurger("burgers", condition, id, function(res){
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
