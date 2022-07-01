import { useEffect, useState } from "react";
import Axios from "axios";
import "./categories.css";

import "../products/products.css";

import { Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    async function getCategories() {
      const response = await Axios.get(`http://localhost:3001/api/categories`);
      setCategories(response.data);
    }
    getCategories();
  }, []);

  async function handleCreate(event) {
    // event.preventDefault(); Se lo comenté porque creo que en este caso sí conviene que recargue la página así cuando se recarga ya aparece la categoría nueva. Si no, no aparece y hay que recargar a mano.
    await Axios.post("http://localhost:3001/create/category", {
      name: categoryName,
    });
  }

  return (
    <>
      <form action="" onSubmit={handleCreate}>
        <input
          type="text"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
        />
        <button type="submit">Create category</button>
      </form>

      <div className="content">
        <div className="products-card">
          <div className="header-container ">
            <strong>Categories</strong>
            <button className="btn-new-product">New category</button>
          </div>
          <div className="table-products-container">
            <Table hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>CATEGORY</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => {
                  return (
                    <>
                      <tr key={category._id} className="align-middle">
                        <td>{category._id}</td>
                        <td>{category.name}</td>
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

      {/* {categories.map((category) => {
        return (
          <ul className="list-unstyled" key={category._id}>
            <li>{category.name}</li>
          </ul>
        );
      })} */}
    </>
  );
}

export default Categories;
