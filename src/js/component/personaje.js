import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


export const Personaje = () => {
    const [personaje, setPersonaje] = useState([])
    let { id } = useParams();
    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Characters/"+ id)
            .then(response => response.json())
            .then(result => setPersonaje(result))
            .catch(error => console.log('error', error));
    }, [])
    return (
        <div className="container text-center">
            <h1>Componente {personaje.name}</h1>
        </div>
    );
    };