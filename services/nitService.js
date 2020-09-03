const mysqlConn = require('../db/connection');

exports.findAll = (result) => {
    mysqlConn.query('SELECT * FROM rtu LIMIT 100', (err, results) => {
        if (err) {
            result(err, null);
            return;
        }
        // eslint-disable-next-line consistent-return
        return result(null, results);
    });
};

exports.findByNIT = (nit, result) => {
    mysqlConn.query(`SELECT * FROM rtu WHERE nit =${nit}`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    });
};
