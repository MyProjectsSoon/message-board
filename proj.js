var http = require('http');
var url = require('url');
var fs = require('fs');
const path = require("node:path");
const express = require("express");
const app = express();
//serving static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const aboutRouter = require('./routes/aboutRouter');

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/about",aboutRouter);
app.use("/", indexRouter);

//use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
  res.render("about");
});


/*
app.get('/', function (req, res) {
  
  
    
  
    
    
//without EJS and routes
/*    var filename="." +"/index.html";
      fs.readFile(filename, function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        } 
    
        res.writeHead(200, {'Content-Type': 'text/html'});
      
        res.write(data);
    
        return res.end();
      });
})*/

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

/*
app.get('/about', function (req, res) {
  
  var filename="." +"/about.html";
    
    
    
      fs.readFile(filename, function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        } 
    
        res.writeHead(200, {'Content-Type': 'text/html'});
      
        res.write(data);
    
        return res.end();
      });
})
*/


// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

/*
app.get('/contact-me', function (req, res) {
  
  var filename="." +"/contact-me.html";
    
    
    
      fs.readFile(filename, function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        } 
    
        res.writeHead(200, {'Content-Type': 'text/html'});
      
        res.write(data);
    
        return res.end();
      });
})
*/


// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});


/*
app.get("*", (req, res) => {
  res.send("* is a great way to catch all otherwise unmatched paths, e.g. for custom 404 error handling.");
});
app.get("/messages", (req, res) => {
  res.send("This route will not be reached because the previous route's path matches first.");
});
*/


//Nodejs way of creating server
/*http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "";

if (q.pathname=='/')
{
    filename="." +"/index.html";
}
else
{
    filename ="." + q.pathname;
}

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 

    res.writeHead(200, {'Content-Type': 'text/html'});
  
    res.write(data);

    return res.end();
  });

  console.log(q.pathname);
  
}).listen(8080);*/

