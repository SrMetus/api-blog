import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/navbar.css";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleDelFavorite = (favId) => {
		actions.delFavorite(favId);
	}

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<Link to="/">
						<span>Rick And Morty</span>
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
							<li className="nav-item dropdown">
								<button className="nav-link dropdown-toggle btn btn-primary text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Favorites <span className="badge badge.dark text-bg-secundary rounded-pill">{store.favorite.length}</span>
								</button>
								<ul className="dropdown-menu">
									{store.favorite.map((item) => (
										<div key={item.id}>
											<Link to={`/single/${item.id}`}>
												<li className="dropdown-item">{item.name}</li>
											</Link>
											<button className="btn btn-danger btn-sm" onClick={() => handleDelFavorite(item.id)}>
												<i className="fa-solid fa-coffee"></i>
											</button>
										</div>
									))}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
