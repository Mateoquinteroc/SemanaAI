import fondoprogramacion from '../public/Programacionsemana.png' 
import './fondo.css'


const Fondo = () => {
    return (
        <div className="container-fondo">
            <img src={fondoprogramacion} className="img-fondo" />
        </div>
    )
}

export default Fondo 