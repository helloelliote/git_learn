var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

// Common Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*
// Block or Next
app.use(function (req, res, next) {
  res.send("STOP");
  // next();
});
*/

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");

app.use("/", indexRouter);
app.use("/api", apiRouter);

// Custom Middleware (Custom Library)
var works = require("./worksMiddleware");
app.use("/work", works.workOne, works.workTwo, works.workThree);

module.exports = app;
