var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// File download (로고)
router.get("/logo", function (req, res, next) {
  res.download("./apple_logo.jpg", "애플_로고_이미지.jpg");
});

module.exports = router;
