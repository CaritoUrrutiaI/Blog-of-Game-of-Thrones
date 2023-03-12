import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


export const Personaje = () => {
    const [personaje, setPersonaje] = useState({})
    let { id } = useParams();
    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Characters/" + id)
            .then(response => response.json())
            .then(data => setPersonaje(data))
            .catch(error => console.log('error', error));
    }, [])
    return (
        <div className="container text-center">
            <img src={personaje?.imageUrl} />
            <h1>{personaje?.fullName}</h1>
            <h2>{personaje?.title}</h2>
            <h2>{personaje?.family}</h2>
        </div>
    );
};