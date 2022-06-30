import "./App.css";

import { Routes, Route } from "react-router-dom";
import OffCanvas from "./components/sidebar/OffCanvas";
import OffCanvasOptions from "./components/sidebar/OffCanvasOptions";
// import options from "./components/sidebar/options";
import Login from "./components/login/Login";
import options from "./components/sidebar/options";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main /> 
              
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
      </Routes>
    </div>
  );
}

export default App;
