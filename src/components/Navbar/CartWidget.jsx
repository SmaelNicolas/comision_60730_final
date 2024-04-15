import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contex/CartContext";

export const CartWidget = () => {
	const { cartQuantity } = useContext(CartContext);
	return (
		<Link className="CartQuantity" to={"/cart"}>
			<div>{cartQuantity}🛒</div>
		</Link>
	);
};
