import { useState } from "react";

const StudentsList = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const add = () => {
    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: age,
      }),
    });
  };

  return (
    <>
      <h1>Add Students</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button onClick={add}>Envoyer</button>
    </>
  );
};

export default StudentsList;
