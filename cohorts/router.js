const cohortsRouter = require("express").Router();
const DB = require("./model");

cohortsRouter.get("/", async (req, res) => {
  const allCohorts = await DB.all();
  
  res.status(200).json(allCohorts);
})

module.exports = cohortsRouter;