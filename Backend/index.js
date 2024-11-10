const express = require("express");
const routes = require("./routes/handleRoutes");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/v1", routes);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});