import axios from "axios";
import { useState } from "react";

function FormProducts() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [category, setCategory] = useState("");

	const createProductHandler = async () => {
		const response = await axios.post(`${process.env.API_URL}/api/product`, {
			name,
			description,
			price,
			image,
			category,
		});
		console.log(response.data);
	};
	return (
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					createProductHandler();
				}}>
				<label htmlFor=''>Product Name</label>
				<input
					value={name}
					onChange={(event) => setName(event.target.value)}
					type='text'
					id=''
				/>
				<label htmlFor=''>Description</label>
				<textarea
					value={description}
					onChange={(event) => setDescription(event.target.value)}
					id=''
					cols='30'
					rows='10'></textarea>
				<label htmlFor=''>Price</label>
				<input
					value={price}
					onChange={(event) => setPrice(event.target.value)}
					type='tel'
				/>
				<label htmlFor=''>Product Image</label>
				<input
					onChange={(event) => setImage(event.target.files[0].name)}
					type='file'
					id=''
				/>
				<label htmlFor=''>Product Category</label>
				<input
					value={category}
					onChange={(event) => setCategory(event.target.value)}
					type='text'
					id=''
				/>
				<button>Send</button>
			</form>
		</div>
	);
}

export default FormProducts;
