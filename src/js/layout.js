import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Continentes } from "./views/continentes";
import { Personajes } from "./views/personajes";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { DetallePersonaje } from "./views/detallepersonaje";
import { DetalleContinente } from "./views/detallecontinente";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/personajes" element={<Personajes />} />
							<Route path="/continentes" element={<Continentes />} />
							<Route path="/personajes/:id" element={<DetallePersonaje />} />
							<Route path="/continentes/:id" element={<DetalleContinente />} />
							<Route path="/demo" element={<Demo />} />
							<Route path="/single/:theid" element={<Single />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
