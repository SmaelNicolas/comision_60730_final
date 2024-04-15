import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { CartProvider } from "./contex/CartContext";

function App() {


	return (
		<div className="App">
			<CartProvider>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route
							path="/"
							element={
								<ItemListContainer bienvenida="Hola Coder" />
							}
						/>
						<Route
							path="category/:idCategory"
							element={
								<ItemListContainer bienvenida="Hola Coder" />
							}
						/>
						<Route
							path="item/:idItem"
							element={<ItemDetailContainer />}
						/>
						<Route path="/coder" element={<>Coder</>} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />


						<Route
							path="*"
							element={<>No hay ruta para ese path</>}
						/>
					</Routes>

					{/* <ItemListContainer bienvenida="Hola Coder" /> */}
				</BrowserRouter>
			</CartProvider>
		</div>
	);
}

export default App;
