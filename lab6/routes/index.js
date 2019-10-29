const aboutRoutes = require("./about");
const educationRoutes = require("./education");
const storyRoutes = require("./story");

const constructorMethod = app => 
{
  app.use("/about", aboutRoutes);
  app.use("/education", educationRoutes);
  app.use("/story", storyRoutes);

  app.use("*", (req, res) => 
  {
    res.status(404).json({ error: "Page not found" });
  });
};

module.exports = constructorMethod;
//reference from lecture code