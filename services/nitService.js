const mysqlConn = require("../db/connection");

exports.findAll = (result) => {
    mysqlConn.query("SELECT * FROM rtu LIMIT 100", function(err, results, fields) {
        if(err) {
            result(null, err);
            return;
        }
        return result(null, results);
    });
}

exports.findByNIT = (nit, result) => {
    mysqlConn.query(`SELECT * FROM rtu WHERE nit =${nit}`, (err, res) => {
        if(err) {
            result(err, null);
            return;
        }
        result(null, res);
    });
}
