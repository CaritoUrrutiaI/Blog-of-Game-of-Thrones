import React, { useEffect, useState } from "react";
import Card from "./card";

export const CardIndex = () => {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Characters")
            .then(response => response.json())
            .then(result => setCharacter(result))
            .catch(error => console.log('error', error));
    }, [])
    
    return (
        <div className="container text-center">
            <div className="row context-fluid align-items-start">
                {console.log(character)}
                {character.map((value, index) => {
                    return (
                        <div key={index} className="col-3">
                            <Card title={value.fullName} description="descripcion" imageUrl="" buttonUrl={"/personajes/"+ value.id} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

// value, está el contenido del elemento del arreglo (unidad) enhanceManualRouteObjects. "id":1 con toda la información que tiene dentro (name, gender, etc)
// index, numero de vuelta que esta haciendo react comenzando desde cero
