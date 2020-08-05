    const express = require("express");
    const path = require("path");
    const compression = require("compression");
     
    const app = express();
     
    app.engine("pug", require("pug").__express);
     
    app.set("view engine", "pug");
    app.set("views", path.join(__dirname, "views"));
     
    app.use(compression());
     
    const router = express.Router();
     
    router.all("/", (req, res) => {
      console.log("hhhhhh");
      res.render("intro");
    });
     
    app.use("/", router);
     
    app.use(express.static(path.join(__dirname, "public")));
     
    const port = process.env.PORT || 3000;
     
    app.listen(port, () => {
      console.log("server started at 3000");
    });
     
