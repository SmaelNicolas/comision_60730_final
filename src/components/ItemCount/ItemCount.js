import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCount } from "../hooks/useCount";
import "./itemCount.css";

export const ItemCount = ({ prod }) => {
	const { count, decrement, increment, addToCart } = useCount();
	const [prodAdded, setProdAdded] = useState(false);

	return (
		<div className="container--itemCount">
			{!prodAdded && (
				<>
					<div className="container--itemCount--buttons">
						<button
							className="itemCount--button"
							onClick={decrement}>
							➖
						</button>
						<span className="itemCount--count">{count}</span>
						<button
							className="itemCount--button"
							onClick={increment}>
							➕
						</button>
					</div>
					<button
						className="itemCount--buttonCart"
						onClick={() => addToCart(prod, setProdAdded)}>
						Agregar al 🛒
					</button>
				</>
			)}
			{prodAdded && (
				<div className="container--itemCount--buttons">
					<Link className="itemCount--button" to="/">Seguir Comprando</Link>
					<Link className="itemCount--button" to="/cart"> Ir al Carrito </Link>
				</div>
			)}
		</div>
	);
};
