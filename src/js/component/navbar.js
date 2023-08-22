import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleDelFavorite = (id) => {
		actions.delFavorite(id);
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
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Favorites
								</a>
								<ul className="dropdown-menu">
									{store.favorite.map((item) => (
									<Link to={`/single/${item.id}`}>
									<li key={item.id}><a className="dropdown-item">{item.name}</a></li>
									</Link>
									<button key={item.id} className="btn btn-danger btn-sm" onClick={() => handleDelFavorite(item.id)}>
										Remove
									</button>
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
