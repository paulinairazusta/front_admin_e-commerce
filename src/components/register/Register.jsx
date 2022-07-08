import { useState } from "react";
import OffCanvas from "../sidebar/OffCanvas";
import { useSelector } from "react-redux";

import Axios from "axios";

import "./register.css";

function Register() {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const admin = useSelector((state) => state.admin);

	const config = {
		headers: {
			Authorization: "Bearer " + admin.token,
		},
	};
	const [showMenu, setShowMenu] = useState(true);

	const handleRegister = async (event) => {
		event.preventDefault();

		await Axios.post(
			`${process.env.REACT_APP_API_URL}/admin/register`,
			{
				firstname: firstname,
				lastname: lastname,
				email: email,
				password: password,
			},
			config
		);
	};
	return (
		<>
			<div className={`content${showMenu ? " with-margin" : ""}`}>
				<OffCanvas show={showMenu} setShow={setShowMenu} />
				<div>
					<h3>Register new admin</h3>
					{/* <p className="register-subtitle">Register a new admin.</p> */}
					<form onSubmit={handleRegister} className='register-card'>
						<label className='label' htmlFor=''>
							Name
						</label>
						<input
							className='input'
							type='text'
							value={firstname}
							onChange={(event) => setFirstname(event.target.value)}
							placeholder='Jane'
							required
						/>
						<label className='label' htmlFor=''>
							Last Name
						</label>
						<input
							className='input'
							type='text'
							value={lastname}
							onChange={(event) => setLastname(event.target.value)}
							placeholder='Doe'
							required
						/>

						<label className='label' htmlFor=''>
							Email
						</label>
						<input
							className='input'
							type='text'
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							placeholder='example@example.com'
							required
						/>
						<label className='label' htmlFor=''>
							Password
						</label>
						<input
							className='input'
							type='password'
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							placeholder='Password'
							required
						/>
						<button className='button-submit' type='submit'>
							Register
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Register;
