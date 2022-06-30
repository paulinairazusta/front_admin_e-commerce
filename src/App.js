import "./App.css";

import { Routes, Route } from "react-router-dom";
import OffCanvasOptions from "./components/sidebar/OffCanvasOptions";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Products from "./components/products/Products";
import Categories from "./components/categories/Categories";
import Clients from "./components/clients/Clients";
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
            </>
          }
        />
        {/* <Route path="profile" element={<></>} /> */}
        <Route path="register" element={<Register />} />
        <Route
          path="login"
          element={
            <>
              <OffCanvasOptions />
              <Login />
            </>
          }
        />
        <Route
          path="products"
          element={
            <>
              <OffCanvasOptions />
              <Products />
            </>
          }
        />
        <Route
          path="categories"
          element={
            <>
              <OffCanvasOptions />
              <Categories />
            </>
          }
        />
        <Route
          path="clients"
          element={
            <>
              <OffCanvasOptions />
              <Clients />
            </>
          }
        />

        <Route
          path="admins"
          element={
            <>
              <OffCanvasOptions />
              <Admins />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
