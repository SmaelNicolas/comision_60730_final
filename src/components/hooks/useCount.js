import { useContext, useState } from "react";
import { CartContext } from "../../contex/CartContext";

export const useCount = () => {
	const [count, setCount] = useState(1);
	const {addProduct} = useContext(CartContext)

	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};
	const increment = () => {
		setCount(count + 1);
	};

	const addToCart = (prod, setProdAdded) => {
		setCount(1);
		// console.log(prod)
		addProduct(prod, count);
		setProdAdded(true)
	};

	return { count, decrement, increment, addToCart };
};
