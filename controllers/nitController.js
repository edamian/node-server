const nitService = require('../services/nitService');

exports.findAll = (req, res) => {
    nitService.findAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        } else {
            res.send(data);
        }
    });
};

exports.findByNIT = (req, res) => {
    const { nit } = req.params;
    nitService.findByNIT(nit, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        } else if (data.length > 0) {
            res.send(data[0]);
        } else {
            res
                .status(404)
                .send({ message: 'Not found' });
        }
    });
};
