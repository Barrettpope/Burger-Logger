const connection = require("./connection")

let orm = {

    selectAll: function (tableInput, callback) {
        let queryString = "SELECT * FROM ?"
        connection.query(queryString, [tableInput],
            function (err, result) {
                if (err) throw err;
                callback(result);
            });
    },

    insertOne: function (burgerInput, callback) {
        const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,false)";
        connection.query(queryString, [burgerInput], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    updateOne: function (id, callback) {
        const queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.quuery(queryString, [id], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    }

};

module.exports = orm;