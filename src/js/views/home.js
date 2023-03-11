import React from "react";
import "../../styles/home.css";
import Card from "../component/card";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Blog Game of Thrones!</h1>
		<div className="row">
			<Card/>
			<Card/>
		</div>
		
	</div>

);
