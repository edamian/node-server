const expresss = require('express');
const app = expresss();
const bodyParser = require('body-parser');
const router = require("./routes");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./swagger.json");

app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
    res.send('Hi');
});

app.use("/api", router)

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
