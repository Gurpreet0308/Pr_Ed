const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();

app.engine("pug", require("pug").__express);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(compression());

app.use("/", (req, res, next) => {
  res.render("homepage");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server started at 3000");
});
