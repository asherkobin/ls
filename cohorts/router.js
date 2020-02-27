const cohortsRouter = require("express").Router();

cohortsRouter.get("/", (req, res) => {
  res.status(200).json(
    [
      "Web26",
      "UX28"
    ]
  );
})

module.exports = cohortsRouter;