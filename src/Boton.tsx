import logoyou from '../public/you-tube-logo-06.svg'; 
import './fondo.css'


const Boton = () => {
  const handleClick = () => {
    window.location.href = 'https://www.youtube.com/@CentroDeCienciaFJC/streams'; // Cambia la URL a la que desees
  };


  return (
    <div className="butonContainer">
      <button className="buttonStyle" onClick={handleClick}>
        <img  className="logoyou" src={logoyou} />
      Live
      </button>
    </div>
  );
};

export default Boton;
