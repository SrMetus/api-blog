import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<main>
			<div className="container">
				<div className="image-container">
					<Link to="/characters">
						<img src="https://cdn.pixabay.com/photo/2021/06/17/22/55/rick-and-morty-6344804_1280.jpg" alt="Characters" className="image" />
						<div className="text-overlay">
							<h2>Characters</h2>
						</div>
					</Link>
				</div>
				<div className="image-container">
					<Link to="/locations">
						<img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/06/rick-morty-2381623.jpg" alt="Location" className="image" />
						<div className="text-overlay">
							<h2>Locations</h2>
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
