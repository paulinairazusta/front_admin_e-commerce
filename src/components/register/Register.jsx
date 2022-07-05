import { useState } from "react";
import OffCanvas from "../sidebar/OffCanvas";

import Axios from "axios";

import "./register.css";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMenu, setShowMenu] = useState(true);

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await Axios.post("http://localhost:3001/admin/register", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    });
  };
  return (
    <>
      <div className={`content${showMenu ? " with-margin" : ""}`}>
        <OffCanvas show={showMenu} setShow={setShowMenu} />
        <div>
          <h3>Register new admin</h3>
          {/* <p className="register-subtitle">Register a new admin.</p> */}
          <form onSubmit={handleRegister} className="register-card">
            <label className="label" htmlFor="">
              Name
            </label>
            <input
              className="input"
              type="text"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              placeholder="Jane"
            />
            <label className="label" htmlFor="">
              Last Name
            </label>
            <input
              className="input"
              type="text"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              placeholder="Doe"
            />

            <label className="label" htmlFor="">
              Email
            </label>
            <input
              className="input"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="example@example.com"
            />
            <label className="label" htmlFor="">
              Password
            </label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
            <button className="button-submit" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
