import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Fav = () => {
	const { store, actions } = useContext(Context);

	const handleRemoveFavorite = (item) => {
		actions.removeFavorite(item);
	};

	const handleFavoriteClick = (favorite) => {
		const targetPath = `/details/${favorite.type}/${favorite.uid}`;
		if (location.pathname !== targetPath) {
			navigate(targetPath);
		}
	};

	return (
		<div className="dropdown">
			<button className="btn btn-outline-warning dropdown-toggle"
				type="button"
				id="favoritesDropdown"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				Favorites
			</button>
			<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
				{store.favorites.length > 0 ? (
					store.favorites.map((favorite, index) => (
						<li className="d-flex align-content-between" key={index}>
							<Link
								className="dropdown-item"
								onClick={() => handleFavoriteClick(favorite)}>
								{favorite.name}
							</Link>
							<span
								onClick={() => handleRemoveFavorite(favorite)}
								className="text-danger ms-2"
							>
								<i className="fas fa-trash-alt"></i>
							</span>
						</li>
					))
				) : (
					<li className="dropdown-item">No favorites added</li>
				)}
			</ul>
		</div>
	);
};
