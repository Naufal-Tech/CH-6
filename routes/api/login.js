const express = require("express");
const router = express.Router();

//Login Local Password
router.post("/", (req, res) => {
  if (req.body.username === "naufal" && req.body.password === "naufal") {
    res.render("dashboard");
  } else {
    res.render("loginfailed");
  }
});

module.exports = router;
