import React, { useEffect, useState } from "react";
import Card from "./card";

export const ContinentIndex = () => {
    const [continents, setContinents] = useState([])

    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Continents")
            .then(response => response.json())
            .then(result => setContinents(result))
            .catch(error => console.log('error', error));
    }, [])
    
    return (
        <div className="container text-center">
            <div className="row context-fluid align-items-start">
                {console.log(continents)}
                {continents.map((value, index) => {
                    return (
                        <div key={index} className="col-3">
                            <Card title={value.name} buttonUrl={"/continentes/" + value.id} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

// value, está el contenido del elemento del arreglo (unidad) enhanceManualRouteObjects. "id":1 con toda la información que tiene dentro (name, gender, etc)
// index, numero de vuelta que esta haciendo react comenzando desde cero
