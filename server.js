const express = require("express");
const studentsRoute = require("./routes/studentsRoute");
const logger = require("./middleware/logger");
const exhb = require("express-handlebars");
const path = require("path");

const app = express();

//init middleware
app.use(logger);

//setting static folder
// app.use(
//   express.static(path.join(__dirname, "public"))
// );

app.use("/api/v1/students", studentsRoute);

app.get("/api/v1/", (req, res) => {
  res.send("student list");
});

const lport = 5000;
app.listen(lport,