const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => res.send("about"));


module.exports = newRouter;