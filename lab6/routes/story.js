const express = require("express");
const router = express.Router();
const story = require("../data/story.json");

router.get("/", (req, res) => {
    // try {
      res.json(story);
    // } 
    // catch (error)
    // {
    //   res.status(404).json({ message: "Page not found" });
    // }
  });

module.exports = router;