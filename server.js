const expresss = require('express');
const app = expresss();
const bodyParser = require('body-parser');
const router = require("./routes");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./swagger.json");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", router)

module.exports = app;
