const FourComponent = () => {
  const handleClicked = (e, name) => {
    alert("Has hecho click en el boton, " + name);
  };

  const handleDoubleClicked = () => {
    alert("Has hecho doble click");
  };

  const handleMouseEnter = (e) => {
    console.log("Has entrado a la caja");
  };

  const handleMouseLeave = (e) => {
    console.log("Has salido de la caja");
  };

  const handleMouse = (e, action) => {
    console.log(`Has ${action} de la caja`);
  };

  const handleInsideInput = (e) => {
    console.log("Estas dentro del input, escribe tu nombre!!");
  };

  const handleOutsideInput = (e) => {
    console.log("Estas fuera del input, Adios!!");
  };

  return (
    <div>
      <h1>FourComponent</h1>
      <div>
        <button
            className="btn btn-danger"
            onClick={() => {
              alert("Hola, soy un evento click");
            }}
        >
          Haz Click
        </button>
      </div>

      <div>
        <button 
          className="btn btn-success" 
          onClick={e => handleClicked(e, "Ines")}
        >
          ¡Aqui tambien haz click!
        </button>
      </div>

      <button
        className="btn btn-info"
        onDoubleClick={handleDoubleClicked}
      > 
        Haz doble click!!
      </button>

      <div 
        id="box1"
        className="mt-4"
        onMouseEnter={e => handleMouseEnter(e)}
        onMouseLeave={e => handleMouseLeave(e)}
      >
        <p>Pasa el mouse por encima!!</p>      
      </div>

      <div
        id="box2"
        className="mt-4"
        onMouseEnter={e => handleMouse(e, "entrado a")}
        onMouseLeave={e => handleMouse(e, "salido de")}
      >
      </div>

      <div className="mt-4">
        <input 
          type="text"
          onFocus={e => handleInsideInput(e)}
          onBlur={e => handleOutsideInput(e)}
        />
      </div>
    </div>
  )
}

export default FourComponent