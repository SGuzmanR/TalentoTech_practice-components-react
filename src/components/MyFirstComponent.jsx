const MyFirstComponent = () => {
  const name = "Inés María Oliveros";
  const github_profile = "https://github.com/inesmariao";
  const student = {
    name: "Sergio",
    last_name: "Guzman",
    mobile: "3000000000",
    linkedin_profile: "https://www.linkedin.com/in/sergio-g-308737295/",
  };

  return (
    <>
      <div>MyFirstComponent</div>
      <div className="container mt-4">
        <h1>Temas de React</h1>
        <ul>
          <li>Componentes</li>
          <li>Eventos</li>
          <li>Estados Hooks</li>
          <li>Props</li>
        </ul>
      </div>

      <div className="container py-2 px-4">
        <h1>Datos del Docente</h1>
        <p>Nombre: <strong>{name}</strong></p>
        <p>Github: <strong>{github_profile}</strong></p>
      </div>

      <div className="container py-2 px-4">
        <h1>Datos del Estudiante</h1>
        <p>Nombre: <strong>{student.name}</strong></p>
        <p>Apellido: <strong>{student.last_name}</strong></p>
        <p>Telefono: <strong>{student.mobile}</strong></p>
        <p>Perfil de Linkedin <a href={student.linkedin_profile}>Aqui</a></p>
      </div>

      <div className="container pt-2 mt-2">
        <h1>Objeto Completo</h1>
        <pre>{JSON.stringify(student)}</pre>
      </div>
    </>
  );
};

export default MyFirstComponent