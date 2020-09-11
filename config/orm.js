const connection = require("./connection")

let orm = {

    selectAll: function (tableInput) {
        let queryString = "SELECT * FROM ?"
        connection.query(queryString, tableInput),
            function (err, result) {
                if (err) throw err;
                console.log(result);
            };
    },

    insertOne: function () {

    },

    updateOne: function () {

    }

}

module.exports = orm;