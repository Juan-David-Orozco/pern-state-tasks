const express = require("express");
const morgan = require("morgan");
//const cors = require("cors");

const router = require("./routes/tasks.routes");

const app = express();

app.use(morgan("dev"));

// Routes
app.use(router);

app.listen(5000);
console.log("Server on port 5000");