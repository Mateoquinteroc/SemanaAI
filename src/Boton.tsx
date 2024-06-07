
const Boton = () => {
  const handleClick = () => {
    window.location.href = 'https://www.youtube.com/@CentroDeCienciaFJC/streams'; // Cambia la URL a la que desees
  };

  const buttonStyle = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    padding: '10px 20px',
    backgroundColor: '#c4302b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 1000,
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      Life
    </button>
  );
};

export default Boton;
