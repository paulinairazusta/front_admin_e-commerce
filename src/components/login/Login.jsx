import { useState } from "react";
import Axios from "axios";
import "../register/register.css";
import { storeAdminInfo } from "../../redux/adminSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_ADMIN_TOKEN,
    },
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await Axios.post(
      `${process.env.REACT_APP_API_URL}/admin/login`,
      {
        email: { email },
        password: { password },
      },
      config
    );
    dispatch(storeAdminInfo({ adminInfo: response.data }));
    setEmail("");
    setPassword("");
    navigate("/");
  };

  return (
    <>
      <div className="register-container">
        <div>
          <h2>Welcome back!</h2>
          <p className="register-subtitle">
            Sign in to your account to continue.
          </p>
          <form onSubmit={handleLogin} className="register-card">
            <img
              className="user-avatar"
              src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
              alt=""
            />
            <label className="label" htmlFor="">
              Email
            </label>
            <input
              className="input"
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <label className="label" htmlFor="">
              Password
            </label>
            <input
              className="input"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            <button className="button-submit" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
