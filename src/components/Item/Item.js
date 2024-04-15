import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

export const Item = ({ producto }) => {
	return (
		<div className="card">
			<h3 className="card--title">{producto.title}</h3>
			<img
				className="card--img"
				src={producto.img}
				alt={producto.title}
			/>
			<div className="card--price">$ {producto.price}</div>
			<Link to={`/item/${producto.id}`}>
				<button className="card--more">Ver Mas</button>
			</Link>
		</div>
	);
};
