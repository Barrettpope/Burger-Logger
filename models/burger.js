const orm = require("../config/orm");

const burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", callback);
    },
    insertOne: function (burgerInput, callback) {
        orm.insertOne(burgerInput, callback);
    },
    updateOne: function (id, callback) {
        orm.updateOne(id, callback);
    }
};

module.exports = burger;