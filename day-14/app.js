const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users-router");

// routing system
// static file serving mechanism
const app = express();

// app config
app.set("view engine", "pug");
app.set("views", "./views");

// HTTP: Request - Response

// Will serve the static files on the specified directory
app.use(express.static("public"));
// The middleware will be applied to any location in the page because no directory specification
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Will apply the middleware layer to the specified route
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.render("index");
});

// How th get parameters
app.get("/users/:userId/books/:bookId", function(req, res) {
  res.send(req.body);
  console.log(req.body);
});

app.use((_req, res) => {
  res.send("not found!");
});

app.listen(8080, () => {
  console.log("server up and running");
});
