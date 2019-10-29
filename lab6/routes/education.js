const express = require("express");
const router = express.Router();
const education = require("../data/education.json");

router.get("/", (req, res) => {
    // try {
      res.json(education);
    // } 
    // catch (error)
    // {
    //   res.status(404).json({ message: "Page not found" });
    // }
  });

module.exports = router;