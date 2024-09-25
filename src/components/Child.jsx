import PropTypes from 'prop-types'

const Child = (props) => {
  const handleChangeName = () => {
    const newName = prompt("Ingresa un nuevo nombre: ");
    if (newName) {
      props.setName(newName);
    }
  }

  return (
    <div>
      <h1>Child</h1>
      <p>Nombre Actual: {props.name}</p>
      <button className='btn btn-primary' onClick={handleChangeName}>Cambiar Nombre</button>
    </div>
  )
};

Child.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
};

export default Child