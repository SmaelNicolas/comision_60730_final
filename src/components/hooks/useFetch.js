import { useEffect, useState } from "react";

export const useFetch = (URL) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [URL]);

	return { data };
};
