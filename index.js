const express = require('express');
const fetch = require("node-fetch");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

//routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/primateOrigins', (req, res) => {
  res.render('primateOrigins');
});

app.get('/earlyHominin', (req, res) => {
  res.render('earlyHominin');
});

app.get('/conclusion', (req, res) => {
  res.render('conclusion');
});

app.listen(3000, "127.0.0.1", () => {
  console.log('server started');
});
