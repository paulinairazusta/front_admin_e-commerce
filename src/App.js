import "./App.css";

import { Routes, Route } from "react-router-dom";
import OffCanvas from "./components/sidebar/OffCanvas";
import OffCanvasOptions from "./components/sidebar/OffCanvasOptions";
// import options from "./components/sidebar/options";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Admins from "./components/admins/Admins";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <OffCanvasOptions />
            </>
          }
        />
        {/* <Route path="profile" element={<></>} /> */}
        <Route
          path="login"
          element={
            <>
              <OffCanvasOptions />
              <Login />
            </>
          }
        />
        {/* <Route path="register" element={<></>} /> */}
        <Route
          path="admins"
          element={
            <>
              <OffCanvasOptions />
              <Admins />
            </>
          }
        />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
