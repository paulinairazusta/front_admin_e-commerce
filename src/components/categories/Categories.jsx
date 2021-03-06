import { useEffect, useState } from "react";
import Axios from "axios";
import CategoryModal from "./CategoryModal";
import "./categories.css";
import { useSelector } from "react-redux";
import "../products/products.css";
import OffCanvas from "../sidebar/OffCanvas";
import { Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [count, setCount] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const admin = useSelector((state) => state.admin);

  const config = {
    headers: {
      Authorization: "Bearer " + admin.token,
    },
  };
  const deleteCategory = async (categoryId) => {
    await Axios.delete(
      `${process.env.REACT_APP_API_URL}/api/category/${categoryId}`,
      config
    );
    setCount((prev) => prev + 1);
  };
  //TODO: Agregar un input para cambiar el nombre de la categoria.
  const editCategory = async (categoryId) => {
    await Axios.patch(
      `${process.env.REACT_APP_API_URL}/api/category/${categoryId}`,
      config
    );
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    async function getCategories() {
      const response = await Axios.get(
        `${process.env.REACT_APP_API_URL}/api/category`,
        config
      );
      setCategories(response.data);
    }
    getCategories();
  }, [count]);

  return (
    <div className={`content${showMenu ? " with-margin" : ""}`}>
      <OffCanvas show={showMenu} setShow={setShowMenu} />
      {/* <div className="content"> */}
      <div className="products-card">
        <div className="header-container ">
          <strong>Categories</strong>
          <button className="btn-new-product" onClick={handleShow}>
            New category
          </button>
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
                        {/* <BiEdit
                          onClick={() => {
                            // editCategory(category._id);
                          }}
                        /> */}
                        <div
                          onClick={() => {
                            deleteCategory(category._id);
                          }}
                        >
                          <RiDeleteBinLine />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
      <CategoryModal
        show={show}
        setShow={setShow}
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default Categories;
