import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://wme-gep-drupal-hbo-prod.s3.amazonaws.com/content/dam/hbodata/series/game-of-thrones/series_logos_game-of-thrones.jpg" /></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
			<div class="dropdown">
  				<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites♡</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Hello</a></li>
				</ul>
			</div>
		</nav>
	);
};
