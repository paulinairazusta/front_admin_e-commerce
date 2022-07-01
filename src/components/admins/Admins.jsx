import { useState, useEffect } from "react";
import Axios from "axios";

import "../products/products.css";

import { Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

function Admins() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    async function getAdmins() {
      const response = await Axios.get("//localhost:3001/api/admins");
      setAdmins(response.data);
    }

    getAdmins();
    console.log(admins);
  }, []);

  return (
    <>
      <div className="content">
        <div className="products-card">
          <div className="header-container ">
            <strong>Admins</strong>
            <button className="btn-new-product">New admin</button>
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
                    <>
                      <tr key={admin._id} className="align-middle">
                        <td>
                          <img
                            className="product-img"
                            src={`http://localhost:3001/images/${admin.image}`}
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
                    </>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      {/* {admins.map((admin) => {
        return (
          <ul key={admin._id}>
            <li>
              {admin.firstname} {admin.lastname}
            </li>
          </ul>
        );
      })} */}
    </>
  );
}

export default Admins;
