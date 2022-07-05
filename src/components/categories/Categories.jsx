import { useEffect, useState } from "react";
import Axios from "axios";
import "./categories.css";

import "../products/products.css";
import OffCanvas from "../sidebar/OffCanvas";

import { Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

function Categories() {
  const config = {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_ADMIN_TOKEN,
    },
  };
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    async function getCategories() {
      const response = await Axios.get(
        `${process.env.REACT_APP_API_URL}/api/categories`,
        config
      );
      setCategories(response.data);
    }
    getCategories();
  }, []);

  async function handleCreate(event) {
    // event.preventDefault(); Se lo comenté porque creo que en este caso sí conviene que recargue la página así cuando se recarga ya aparece la categoría nueva. Si no, no aparece y hay que recargar a mano.
    await Axios.post(
      `${process.env.REACT_APP_API_URL}/create/category`,
      {
        name: categoryName,
      },
      config
    );
  }

  return (
    <div className={`content${showMenu ? " with-margin" : ""}`}>
      <OffCanvas show={showMenu} setShow={setShowMenu} />
      {/* <div className="content"> */}
      <div className="products-card">
        <form action="" onSubmit={handleCreate}>
          <input
            type="text"
            value={categoryName}
            onChange={(event) => setCategoryName(event.target.value)}
          />
          <button type="submit">Create category</button>
        </form>
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
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Categories;
