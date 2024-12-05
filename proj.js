
const path = require("node:path");
const express = require("express");
const app = express();
//serving static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));



const indexRouter = require("./routes/indexRouter");
const newRouter = require('./routes/newRouter');


app.use("/", indexRouter);
app.use("/new", newRouter);
//to use post from form
app.use(express.urlencoded({ extended: true }));


//use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});




