const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 8000;
app.use(express.static("public"));

app.listen(port, () => {
  console.log("Lancement effectué");
});

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home", {
    langue: req.params.lang,
    pageTitle: "Bienvenue",
    img: "./img/drapeauFR.png",
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.use(express.urlencoded({ extended: true }));
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("login ok");
});

app.get("/:lang?", (req, res) => {
  switch (req.params.lang) {
    case "fr":
      res.render("home", {
        langue: req.params.lang,
        pageTitle: "Bienvenue",
        img: "./img/drapeauFR.png",
      });
      break;
    case "en":
      res.render("home", {
        langue: req.params.lang,
        pageTitle: "Welcome",
        img: "./img/drapeauUSA.png",
      });
      break;
    case "es":
      res.render("home", {
        langue: req.params.lang,
        pageTitle: "Bienvenida",
        img: "./img/drapeauES.png",
      });
      break;
    case "ru":
      res.render("home", {
        langue: req.params.lang,
        pageTitle: "Добро пожаловать",
        img: "./img/drapeauRU.png",
      });
      break;
    default:
      res.render("home");
  }
});
