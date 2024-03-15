module.exports = {
  getUserBooks: function (req, res, next) {
    console.log("GET QueryString:\n" + JSON.stringify(req.params));
    res.send(req.params);
  },

  userGet: function (req, res, next) {
    var result = {
      name: "박영근",
      age: 25,
    };
    res.send(result);
  },

  userPost: function (req, res, next) {
    var body = req.body;
    res.send(body);
  },

  auth: function (req, res, next) {
    if (req.params.id === "1") {
      next();
    } else {
      res.status(400).json({ message: "등록되지 않은 사용자입니다." });
    }
  },

  adminGet: function (req, res, next) {
    res.json({ admin: "박영근" });
  },

  adminPost: function (req, res, next) {
    res.status(403).json({ message: "접근 권한이 없습니다." });
  },
};
