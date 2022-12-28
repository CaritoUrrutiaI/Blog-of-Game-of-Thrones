import React, { useEffect, useState } from "react";
import Card from "./card";
 
export const CardIndex = () => {
    const [character, setCharacter] = useState([])

    useEffect(() => {
		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		};

		fetch("https://thronesapi.com/", requestOptions)
			.then(response => response.json())
			.then(result => setCharacter(result))
			.catch(error => console.log('error', error));
	})
    return (
        <div class="container text-center">
            <div class="row context-fluid align-items-start">
                {character.map((value, index)=>{
                    // if (value.gender =="f"){

                    return (
                        <div class="col-3">
                            <Card title={value.name} description="descripcion" imageUrl=""/>
                        </div>  
                    )
                })}
            </div>
        </div>
    );
};

// value, está el contenido del elemento del arreglo (unidad) enhanceManualRouteObjects. "id":1 con toda la información que tiene dentro (name, gender, etc)
// index, numero de vuelta que esta haciendo react comenzando desde cero
