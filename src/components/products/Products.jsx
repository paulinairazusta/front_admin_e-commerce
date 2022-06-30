import { useEffect, useState } from "react";
import Axios from "axios";

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
    <>
      <button className="btn btn-light">New product</button>
      {products.map((product) => {
        return (
          <ul className="list-unstyled">
            <li>{product.name}</li>
          </ul>
        );
      })}
    </>
  );
}

export default Products;
