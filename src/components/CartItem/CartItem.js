import { useContext } from "react";

import { CartContext } from "../../contex/CartContext";
import "./cartItem.css";

export const CartItem = ({ id, img, title, quantity, price }) => {
	const { removeProduct } = useContext(CartContext);

	return (
		<>
			<div className="ItemOnCartContainerProductImgContainer">
				<img
					className="ItemOnCartContainerProductImg"
					src={img}
					alt="producto a comprar"
				/>
			</div>
			<div className="ItemOnCartContainerProductInfo">
				<p className="ItemOnCartContainerProductTitle">{title}</p>
				<p className="ItemOnCartContainerProductPrecio">
					Price : US$ {price}
				</p>
				<p className="ItemOnCartContainerProductCantidad">
					Quantity : {quantity}
				</p>
				<p className="ItemOnCartContainerProductPrecio">
					Total Product : US$ {(price * quantity).toFixed(2)}
				</p>
			</div>
			<div className="ItemOnCartContainerProductDelete">
				<div
					className="ItemOnCartContainerProductDeleteIcon"
					onClick={() => removeProduct(id)}>
					❌
				</div>
			</div>
		</>
	);
};
