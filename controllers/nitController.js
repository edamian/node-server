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
    let nit = req.params.nit;
    nitService.findByNIT(nit, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message
            });
        } else {
            res.send(data);
        } 
    });
}
