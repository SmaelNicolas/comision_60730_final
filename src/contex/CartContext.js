import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartQuantity, setCartQuantity] = useState(0);
	const [totalCartValue, setTotalCartValue] = useState(0);

	const addProduct = (prod, count) => {
		console.log(count);
		const isInCart = cart.find((itemInCart) => itemInCart.id === prod.id);
		console.log(isInCart);

		if (isInCart) {
			isInCart.quantity = isInCart.quantity + count;
			setCart([...cart]);
		} else {
			setCart([...cart, { ...prod, quantity: count }]);
		}
	};

	const removeProduct = (idToDelete) => {
		setCart(cart.filter((prod) => prod.id !== idToDelete));
	};

	const totalPrice = () => {
		setTotalCartValue(
			cart
				.reduce(
					(totalP, prod) => totalP + prod.price * prod.quantity,
					0
				)
				.toFixed(2)
		);
	};

	const quantityItems = () => {
		setCartQuantity(
			cart.reduce((totalQ, prod) => totalQ + prod.quantity, 0)
		);
	};

	const emptyCart = () => {
		setCart([]);
	};

	useEffect(() => {
		quantityItems();
		totalPrice();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cart]);

	return (
		<CartContext.Provider
			value={{
				cart,
				addProduct,
				removeProduct,
				totalPrice,
				quantityItems,
				emptyCart,
				cartQuantity,
				totalCartValue,
			}}>
			{children}
		</CartContext.Provider>
	);
};
