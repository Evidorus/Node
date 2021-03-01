const express = require("express");
const { request } = require("http");
const app = express();
const port = 8000;

app.listen(port, () => {
  console.log("Lancement effectué");
});

app.get("*", (req, res) => {
  res.send("Error 404");
});

app.get("/", (req, res) => {
    res.send("Homepage");
})

app.get("/:test", (req, res) => {
  switch (req.params.test) {
    case "en":
      res.send("Hello");
      break;
    case "fr":
      res.send("Salut");
      break;
    case "es":
      res.send("Hola");
      break;
    case "ru":
      res.send("Privet");
      break;
  }
});