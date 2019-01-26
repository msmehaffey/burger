var connection = require ("./connection");

var orm = {
     selectAll: function(cb) {
         connection.query("SELECT * FROM burgers;", function(err, result) {
             if (err) {
                 throw err;
             }
             cb(result);
         });
     },
     insertOne: function(val, cb) {
         var queryString = "INSERT INTO burgers(burger_name) VALUES('" + val + "')";
         connection.query(queryString, function(err, result) {
             if (err) {
                 throw err;
             }
             cb(result)
         });
     },
     updateOne: function(id, cb) {
         var queryString = "UPDATE burgers SET devoured=1 WHERE id=" + id + ";"
         connection.query(queryString, function(err, result) {
             if (err) {
                 throw err;
             }
             cb (result);
         });
     },

    deleteAll: function(cb) {
        connection.query("DELETE FROM burgers;", function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;