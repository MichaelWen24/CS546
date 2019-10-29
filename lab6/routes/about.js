const express = require("express");
const router = express.Router();
const about = require("../data/about.json");

router.get("/", (req, res) => {
    // try {
      res.json(about);
    // } 
    // catch (error)
    // {
    //   res.status(404).json({ message: "Page not found" });
    // }
  });

module.exports = router;