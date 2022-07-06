import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OffCanvas from "../sidebar/OffCanvas";
import { useDispatch } from "react-redux";

import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./products.css";
import { Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { storeProduct } from "../../redux/productSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const admin = useSelector((state) => state.admin);

  const toggleProductHandler = async (productId, isAvailable) => {
    const response = await Axios.delete(
      `${process.env.REACT_APP_API_URL}/product`,
      { data: { productId, isAvailable: checked } }
    );
  };

  const config = {
    headers: {
      Authorization: "Bearer " + admin.token,
    },
  };

  useEffect(() => {
    async function getProducts() {
      const response = await Axios.get(
        `${process.env.REACT_APP_API_URL}/api/products`,
        config
      );
      setProducts(response.data);
      dispatch(storeProduct({ products: response.data }));
    }

    getProducts();
  }, []);

  return (
    <>
      <div className={`content${showMenu ? " with-margin" : ""}`}>
        <OffCanvas show={showMenu} setShow={setShowMenu} />
        <div className="products-card">
          <div className="header-container ">
            <strong>Products</strong>
            <Link to="/newproduct">
              <button className="btn-new-product">New product</button>
            </Link>
          </div>
          <div className="table-products-container">
            <Table hover>
              <thead>
                <tr>
                  <th></th>
                  <th>TITLE</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>ACTIONS</th>
                  <th>AVAILABLE</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product._id} className="align-middle">
                      <td>
                        <img
                          className="product-img"
                          src={`https://tkyarzymrutnhhccfvhu.supabase.co/storage/v1/object/public/images/${product.image}`}
                          alt="product"
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                      <td>
                        <div className="edit-delete-icons">
                          <BiEdit
                            onClick={() => {
                              navigate(`/edit/${product._id}`);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <div>
                          <input
                            defaultChecked={checked}
                            type="checkbox"
                            onChange={() => {
                              toggleProductHandler(product._id);
                              setChecked(!checked);
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
