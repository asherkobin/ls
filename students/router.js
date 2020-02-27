const studentsRouter = require("express").Router();

studentsRouter.get("/", (req, res) => {
  res.status(200).json(["Asher", "Luis"]);
});

module.exports = studentsRouter;
