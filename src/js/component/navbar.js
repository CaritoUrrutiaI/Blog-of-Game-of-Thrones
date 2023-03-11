import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://logospng.org/download/game-of-thrones/logo-game-of-thrones-256.png" /></span>
			</Link>
			<Link to= "/personajes">
				<button className="btn btn-warning">Personajes Game of Thrones</button>
			</Link>
			<Link to= "/familias">
				<button className="btn btn-warning">Familias Game of Thrones</button>
			</Link>
			<div className="dropdown">
  				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mis Favoritos ♡</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Hello</a></li>
				</ul>
			</div>
		</nav>
	);
};
