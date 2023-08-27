import { useState } from "react";

export default function Componente1() {
    const [edad, setEdad] = useState(0);
    const handleClick = () => {
        setEdad(edad + 1);
    }
    
    return <div className= "Componente">
        <h1>Mi edad {edad}</h1>
        <button onClick={handleClick}>Dame click</button>
    </div>
}
