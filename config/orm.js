// Import MySQL connection.
const connection = require("./connection.js");
const util = require("util");

const orm = {
    selectAll: function (table, cb) {
        return connection.query('SELECT * FROM ??', [table], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    insertBurger: function (table, columnName, burger_name, cb) {
        const query = 'INSERT INTO ?? (??) VALUES (?)';

        connection.query(
            query,
            [table, columnName, burger_name],
            function (err, data) {
                if (err){
                    throw err;
                }
                cb(data);
            }
        );
    },

    updateBurger: function (table, condition, id, cb) {
        const query = 'UPDATE ?? SET eaten = ? WHERE id = ?';

        connection.query(
            query,
            [table, condition, id],
            function (err, data) {
                if (err){
                    throw err;
                }
                cb(data);
            }
        );
    },

    deleteBurger: function (table, id, cb){
        const query = 'DELETE FROM ?? WHERE id = ?';

        connection.query(query, [table, id], cb);
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
