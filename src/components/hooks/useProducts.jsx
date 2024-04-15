import { useEffect, useState } from "react";
import { products2 } from "./data";

export const useTest = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(products2);
			}, 3000);
		}).then((data) => {
			setData(data);
		});
	}, []);

	return { data };
};
