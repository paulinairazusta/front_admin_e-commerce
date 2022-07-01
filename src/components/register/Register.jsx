import { useState } from "react";
import Axios from "axios";
import "./register.css";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await Axios.post("http://localhost:3001/admin/register", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    });

    console.log(response.data);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleRegister} className="form">
        <label htmlFor="firstname">Firstname</label>
        <input
          id="firstname"
          type="text"
          value={firstname}
          onChange={(event) => setFirstname(event.target.value)}
        ></input>
        <label htmlFor="lastname">Lastname</label>
        <input
          id="lastname"
          type="text"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
