import logoyou from '../public/you-tube-logo-06.svg'; 
import './fondo.css'


const Boton = () => {
  const handleClick = () => {
    window.location.href = 'https://teams.microsoft.com/l/meetup-join/19:meeting_OTk5YWZmMzUtMGU5ZS00YjhmLWIyNDYtNDBiYjNlNzc1YzMw@thread.v2/0?context=%7B%22Tid%22:%222ff255e1-ae00-44bc-9787-fa8f8061bf68%22,%22Oid%22:%22d5890890-c623-424f-9cf8-d6730b9e7a57%22%7D'; // Cambia la URL a la que desees
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
