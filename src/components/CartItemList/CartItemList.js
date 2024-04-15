import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contex/CartContext";
import { CartItem } from "../CartItem/CartItem";
import "./cartItemList.css";

export const CartItemList = () => {
	const { cart, totalCartValue, emptyCart } = useContext(CartContext);
    
	return (
		<div className="ItemOnCartContainerList">
			{cart.map((product) => (
				<div
					key={product.id + "onCart"}
					className="ItemOnCartContainerProduct">
					<CartItem
						id={product.id}
						img={product.img}
						title={product.title}
						quantity={product.quantity}
						price={product.price}
					/>
				</div>
			))}
			<div className="TotalCartPrice">Total Cart : ${totalCartValue}</div>
			<button className="EmptyCartButton" onClick={emptyCart}>
				Vaciar Carrito
			</button>
			<Link to="/checkout" className="FinishCartButton">
				Terminar Compra
			</Link>
		</div>
	);
}

