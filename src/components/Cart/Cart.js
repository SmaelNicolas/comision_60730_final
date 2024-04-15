import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contex/CartContext";
import { CartItemList } from "../CartItemList/CartItemList";

export const Cart = () => {
	const { cartQuantity } = useContext(CartContext);

	if (cartQuantity === 0)
		return (
			<div className="MessageCartEmpty">
				Carrito Vacio 🤔 <br />{" "}
				<Link className="MessageCartEmptyButton" to="/">
					Ir a comprar
				</Link>
			</div>
		);

	return <CartItemList />;
};
