import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="text-center mt-5">
    <h1>Blog Game of Thrones!</h1>
    <div className="row">
      <div className="card text-bg-dark">
        <img
          src="https://super-ficcion.com/wp-content/uploads/2021/03/VN5VKR2DFBDJVNMLZAF7EESSHY.jpg"
          alt="Game of thrones characters"
        />
		<div className="card-img-overlay">
			<Link to="/personajes">
			<button className="btn btn-warning">
				Personajes Game of Thrones
			</button>
			</Link>
		</div>
      </div>
      <div>
        <div className="card text-bg-dark">
          <img
            src="https://elordenmundial.com/wp-content/uploads/2022/08/mapa-juego-de-tronos.png"
            className="card-img"
          />
          <div className="card-img-overlay">
            <Link to="/continentes">
              <button className="btn btn-warning">
                Continentes Game of Thrones
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
