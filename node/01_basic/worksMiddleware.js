var worksMiddleware = {
  workOne: function (req, res, next) {
    // Create data suitable for console.table
    var tableData = [
      { name: "박영근", 사번: 101 },
      { name: "이종민", 사번: 102 },
      { name: "최준하", 사번: 200 },
    ];
    console.table(tableData);
    next();
  },

  workTwo: function (req, res, next) {
    console.log("2번 작업 시작...");
    res.send("2번 작업 결과");
  },

  workThree: function (req, res) {
    console.error("3번 작업 시작...");
    res.send("3번 작업 결과");
  },
};

module.exports = worksMiddleware;
