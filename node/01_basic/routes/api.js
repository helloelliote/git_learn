var express = require("express");
var router = express.Router();
var users = require("./users");

// Query String
router.get("/users/:userId/books/:bookId", function (req, res, next) {
  console.log("GET QueryString:\n" + JSON.stringify(req.params));
  res.send(req.params);
});

// Send Result
router.get("/users", function (req, res, next) {
  var result = {
    name: "박영근",
    age: 25,
  };
  res.send(result);
});

// Receive Data
router.post("/users", function (req, res, next) {
  var body = req.body;
  res.send(body);
});

// API refactoring & next()
router.get("/admin/:id", users.auth, users.adminGet);

// Status Code & JSON
router.post("/admin", function (req, res, next) {
  res.status(403).json({ message: "접근 권한이 없습니다." });
});

module.exports = router;
