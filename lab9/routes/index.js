//reference from my lab8 code

const path = require("path");

const constructorMethod = app => {
    app.use("/", (req, res)=>{
        res.render("form",{title: "The Best Palindrome Checker in the World!"});//
    });
    app.use("*", (req, res) => 
    {
        res.status(404).json({ error: "Page not found" });
    });
};

module.exports = constructorMethod;