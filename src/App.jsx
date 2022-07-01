import "./App.css";

import { Routes, Route } from "react-router-dom";
import OffCanvasOptions from "./components/sidebar/OffCanvasOptions";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Main from "./components/dashboard/Main";
import Products from "./components/products/Products";
import Categories from "./components/categories/Categories";
import Clients from "./components/clients/Clients";
import Admins from "./components/admins/Admins";
import FormProducts from "./components/products/FormProducts";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Main />
						</>
					}
				/>
				{/* <Route path="profile" element={<></>} /> */}
				<Route path='register' element={<Register />} />
				<Route
					path='login'
					element={
						<>
							<OffCanvasOptions />
							<Login />
						</>
					}
				/>
				<Route
					path='products'
					element={
						<>
							<OffCanvasOptions />
							<Products />
						</>
					}
				/>
				<Route
					path='categories'
					element={
						<>
							<OffCanvasOptions />
							<Categories />
						</>
					}
				/>
				<Route
					path='clients'
					element={
						<>
							<OffCanvasOptions />
							<Clients />
						</>
					}
				/>

				<Route
					path='admins'
					element={
						<>
							<OffCanvasOptions />
							<Admins />
						</>
					}
				/>
				<Route
					path='newproduct'
					element={
						<>
							<OffCanvasOptions /> <FormProducts />
						</>
					}></Route>
			</Routes>
		</div>
	);
}

export default App;
