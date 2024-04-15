import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className="containerNav">
			<Link to="/">
				<div>🍀</div>
			</Link>
			<ul className="containerNav--ul">
				<Link className="containerNav--ul--li" to="category/keyboard">
					Teclados
				</Link>
				<Link className="containerNav--ul--li" to="category/headset">
					Headsets
				</Link>
				<Link className="containerNav--ul--li" to="category/mouse">
					Mouse Pads
				</Link>
			</ul>
			<CartWidget />
		</nav>
	);
};
