const { Router } = require("express");
const express = require("express");
const app = express();
const path = require("node:path");
const newRouter = require("./newRouter");

const indexRouter = Router();

//to use post from form
indexRouter.use(express.urlencoded({ extended: true }));

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];


  indexRouter.get('/', function (req, res) {
    res.render("index",{messages:messages});
  });

    indexRouter.post('/new', function (req, res) {
      res.redirect("/");
    messages.push({ text: req.body.name, user: req.body.message, added: new Date() });
    });


module.exports = indexRouter;
