const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const bodyParser = require("body-parser");
const app = express();
const port = 8000;

const debug = (req, res, next) => {
  console.log("j'ai eu une nouvelle requete", new Date());
  next();
}

// app.use(bodyParser.json());
app.use(cors())
app.use(debug)

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});

const students = [
  { nom: "Adam Nahar", age: 25 },
  { nom: "Ahmed", age: 25 },
  { nom: "Allan J", age: 25 },
  { nom: "Atif", age: 25 },
  { nom: "Bah", age: 25 },
  { nom: "Damir", age: 25 },
  { nom: "Mohamed", age: 25 },
  { nom: "Elisabeth Duong", age: 25 },
  { nom: "Ewa K", age: 25 },
  { nom: "Hadama Samassa", age: 25 },
  { nom: "Hassan", age: 25 },
  { nom: "Houra A", age: 25 },
  { nom: "Kitty B", age: 25 },
  { nom: "Mahmoudou Goumane", age: 25 },
  { nom: "Mosindo", age: 25 },
  { nom: "Nicolas Gallego", age: 25 },
  { nom: "Saurav Barua", age: 25 },
  { nom: "Sebastien N", age: 25 },
  { nom: "Thi Schenkel", age: 25 },
  { nom: "Yeshi Gangchen", age: 25 },
];

app.get("/students/:id?", (req, res) => {
  if (req.params.id) {
    res.json(students[req.params.id]);
  } else {
    res.json(students)
  }
});

app.get("/students/:id/name", (req, res) => {
  res.json(students[req.params.id].nom);
});
app.get("/students/:id/age", (req, res) => {
  res.json(students[req.params.id].age);
});

app.post("/students", (req, res) => {
  students.push(req.body);
  res.send("étudiant ajouté");
});

// app.put('/students/:id/name', (req, res) => {
//     students.push(req.body)
//     res.send('nom modifier')
// })

app.post("/students/:id/age", (req, res) => {
  students.push(req.body);
  res.send("age ajouté");
});
