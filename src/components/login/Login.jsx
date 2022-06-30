import { useState } from "react";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await Axios.post("http://localhost:3001/admin/login", {
      email: { email },
      password: { password },
    });
    console.log(response.data);
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <p>Poné tu email</p>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <p>Poné tu contraseña</p>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Dale!</button>
      </form>
    </>
  );
}

export default Login;
