import { useState } from "react";
import './Componente2.css';

export default function Componente2() {
    const [figura, setFigura] = useState('Circulo');
    const handleClick = () => {
        figura === 'Circulo' ? setFigura('Cuadrado') : setFigura('Circulo');
    }
    
    return <div className= "Componente2">
        <button className ={figura} onClick={handleClick}></button>
    </div>
}
