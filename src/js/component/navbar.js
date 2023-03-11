import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	// const {store,actions}=useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://logospng.org/download/game-of-thrones/logo-game-of-thrones-256.png" /></span>
			</Link>
			<Link to= "/personajes">
				<button className="btn btn-warning">Personajes Game of Thrones</button>
			</Link>
			<Link to= "/continentes">
				<button className="btn btn-warning">Continentes Game of Thrones</button>
			</Link>
			<div className="dropdown">
  				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mis Favoritos ♡</button>
				  <ul className="dropdown-menu">
                {/* {store.favoritos.map((value,index)=>{
		         return (
                      <li key={index} className="dropdown-item">
		                      {value.name}
                           <i className="fas fa-trash-alt" 
		                   onClick= {()=>{
			                  actions.deleteFav(value.id);
			              }}></i> 
		             </li> 
				)})} */}
              </ul>
			</div>
		</nav>
	);
};
