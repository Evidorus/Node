const StudentsList = (props) => {
  return (
    <>
      <h1 className='textCenter'>Liste des étudiants</h1>
      {props.students.map((student) => {
        return (
          <div className='textCenter'>
            <p>Nom : {student.nom}</p>
            <p>Age : {student.age} ans</p>
            <hr/>
          </div>
        );
      })}
    </>
  );
};

export default StudentsList;
