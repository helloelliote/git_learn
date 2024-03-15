var path = require("path");

module.exports = {
  entry: "./public/javascripts/map.js",
  mode: "development",
  output: {
    filename: "map.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
