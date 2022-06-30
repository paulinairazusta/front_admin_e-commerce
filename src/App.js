import "./App.css";

import { Routes, Route } from "react-router-dom";
import OffCanvas from "./components/sidebar/OffCanvas";
// import options from "./components/sidebar/options";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <OffCanvas
              name="Enable body scrolling"
              scroll={true}
              backdrop={false}
            />
          }
        />
        {/* <Route path="profile" element={<></>} /> */}
        <Route path="login" element={<Login />} />
        {/* <Route path="register" element={<></>} /> */}
      </Routes>
    </div>
  );
}

export default App;
