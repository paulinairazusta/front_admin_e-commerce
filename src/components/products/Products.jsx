import { useEffect, useState } from "react";
import Axios from "axios";
import "./products.css";
import { Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await Axios.get("http://localhost:3001/api/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <div className="content">
      <div className="products-card">
        <div className="header-container ">
          <strong>Products</strong>
          <button className="btn-new-product">New product</button>
        </div>
        <div className="table-products-container">
          <Table hover>
            <thead>
              <tr>
                <th></th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                console.log(product.image);
                return (
                  <>
                    <tr key="id" className="align-middle">
                      <td>
                        <img
                          className="product-img"
                          src={`http://localhost:3001/images/${product.image}`}
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                        <div className="edit-delete-icons">
                          <BiEdit />
                          <RiDeleteBinLine />
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Products;
