const expresss = require('express');

const app = expresss();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const router = require('./routes');

const swaggerDocument = require('./swagger.json');

app.use(cors());
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);

module.exports = app;
