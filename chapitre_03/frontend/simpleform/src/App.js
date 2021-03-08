import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StudentsList from "./components/StudentsList";
import AddStudents from "./components/AddStudents";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setStudents(response);
      });
  }, []);

  return (
    <BrowserRouter>
      <h1>Bonjour</h1>
      <h2>C'est la homepage</h2>
      <Switch>
        <Route path="/" exact>
          <StudentsList students={students} />
        </Route>
        <Route path="/add" exact>
          <AddStudents />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
