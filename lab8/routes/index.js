const resultRoutes = require("./result");
const formRoutes = require("./form");
const path = require("path");

const constructorMethod = app => {
  app.use("/result", resultRoutes);
  app.use("/", formRoutes);
//   app.get("/about", (req, res) => {
//     res.sendFile(path.resolve("static/about.html"));
//   });

//   app.use("*", (req, res) => {
//     res.redirect("/");//?
//   });
// };

app.use("*", (req, res) => 
  {
    res.status(404).json({ error: "Page not found" });
  });
};

module.exports = constructorMethod;