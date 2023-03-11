import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const Continente = () => {
    const [continent, setContinent] = useState([])
    let { id } = useParams();

    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Continents/"+ id)
            .then(response => response.json())
            .then(result => setContinent(result))
            .catch(error => console.log('error', error));
    }, [])
    
    return (
        <div className="container text-center">
            <h1>{continent.name}</h1>
        </div>
    );
};
