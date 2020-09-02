const nitService = require("../services/nitService");

exports.findAll = (req, res) => {
    nitService.findAll((err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message
            });
        } else {
            res.send(data);
        }
    });
}

exports.findByNIT = (req, res) => {
    nitService.findByNIT(req.params.nit, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message
            });
        } else {
            res.send(data);
        } 
    });
}
