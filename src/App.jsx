import "./App.css";

import { Routes, Route } from "react-router-dom";
import OffCanvas from "./components/sidebar/OffCanvas";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Main from "./components/dashboard/Main";
import Products from "./components/products/Products";
import Categories from "./components/categories/Categories";
import Clients from "./components/clients/Clients";
import Orders from "./components/orders/Orders";
import Admins from "./components/admins/Admins";
import FormProducts from "./components/products/FormProducts";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
        {/* <Route path="profile" element={<></>} /> */}
        <Route
          path="register"
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="categories"
          element={
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          }
        />
        <Route
          path="clients"
          element={
            <ProtectedRoute>
              <Clients />
            </ProtectedRoute>
          }
        />
        <Route
          path="orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="admins"
          element={
            <ProtectedRoute>
              <Admins />
            </ProtectedRoute>
          }
        />
        <Route
          path="newproduct"
          element={
            <ProtectedRoute>
              <FormProducts />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
