const express = require("express");
const morgan = require("morgan");
//const cors = require("cors");

const router = require("./routes/tasks.routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());


// Routes
app.use(router)

// handling errors
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
});

app.listen(5000);
console.log("Server on port 5000");