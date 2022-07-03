import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./products.css";
import { Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";

function Products() {
	const [products, setProducts] = useState([]);
	const [checked, setChecked] = useState(true);

	const toggleProductHandler = async (productId) => {
		const response = await Axios.delete(
			`http://localhost:3001/api/products/${productId}`
		);
	};

	useEffect(() => {
		async function getProducts() {
			const response = await Axios.get("http://localhost:3001/api/products");
			setProducts(response.data);
		}
		getProducts();
	}, []);

	return (
		<>
			<div className='content'>
				<div className='products-card'>
					<div className='header-container '>
						<strong>Products</strong>
						<Link to='/newproduct'>
							<button className='btn-new-product'>New product</button>
						</Link>
					</div>
					<div className='table-products-container'>
						<Table hover>
							<thead>
								<tr>
									<th></th>
									<th>TITLE</th>
									<th>PRICE</th>
									<th>STOCK</th>
									<th>ACTIONS</th>
									<th>AVAILABLE</th>
								</tr>
							</thead>
							<tbody>
								{products.map((product) => {
									return (
										<>
											<tr key='id' className='align-middle'>
												<td>
													<img
														className='product-img'
														src={`http://localhost:3001/images/${product.image}`}
														alt='product'
													/>
												</td>
												<td>{product.name}</td>
												<td>{product.price}</td>
												<td>{product.stock}</td>
												<td>
													<div className='edit-delete-icons'>
														<BiEdit />
													</div>
												</td>
												<td>
													<div>
														<input
															defaultChecked={checked}
															type='checkbox'
															onChange={() => {
																// product.available = !product.available;
																toggleProductHandler(product._id);
																setChecked(!checked);
																console.log(product.available);
															}}
														/>
													</div>
												</td>
											</tr>
										</>
									);
								})}
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		</>
	);
}

export default Products;
