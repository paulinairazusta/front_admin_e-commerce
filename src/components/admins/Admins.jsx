import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useSelector } from "react-redux";

import "../products/products.css";
import OffCanvas from "../sidebar/OffCanvas";

import { Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

function Admins() {
  const [showMenu, setShowMenu] = useState(true);
  const [admins, setAdmins] = useState([]);
  const admin = useSelector((state) => state.admin);

  const config = {
    headers: {
      Authorization: "Bearer " + admin.token,
    },
  };

  useEffect(() => {
    async function getAdmins() {
      const response = await Axios.get(
        `${process.env.REACT_APP_API_URL}/api/admins`,
        config
      );
      setAdmins(response.data);
    }

    getAdmins();
  }, []);
  return (
    <>
      <div className={`content${showMenu ? " with-margin" : ""}`}>
        <OffCanvas show={showMenu} setShow={setShowMenu} />
        <div className="products-card">
          <div className="header-container ">
            <strong>Admins</strong>
            <Link to="/register">
              <button className="btn-new-product">New admin</button>
            </Link>
          </div>
          <div className="table-products-container">
            <Table hover>
              <thead>
                <tr>
                  <th></th>
                  <th>FIRST NAME</th>
                  <th>LAST NAME</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => {
                  return (
                    <tr key={admin._id} className="align-middle">
                      <td>
                        <img
                          src={
                            (`${process.env.REACT_APP_API_URL}/images/${admin.image}`,
                            config)
                          }
                          className="product-img"
                        />
                      </td>
                      <td>{admin.firstname}</td>
                      <td>{admin.lastname}</td>
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
    </>
  );
}

export default Admins;
