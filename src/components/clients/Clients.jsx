import { useEffect, useState } from "react";
import Axios from "axios";
import "../products/products.css";
import OffCanvas from "../sidebar/OffCanvas";
import { useSelector } from "react-redux";

import { Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Navigate, useNavigate } from "react-router-dom";

function Clients() {
  const [clients, setClients] = useState([]);
  const [showMenu, setShowMenu] = useState(true);
  const [count, setCount] = useState(0);

  const admin = useSelector((state) => state.admin);

  const config = {
    headers: {
      Authorization: "Bearer " + admin.token,
    },
  };

  useEffect(() => {
    async function getClients() {
      const response = await Axios.get(
        `${process.env.REACT_APP_API_URL}/api/users`,
        config
      );
      setClients(response.data);
    }
    getClients();
  }, [count]);

  async function deleteUser(userId) {
    await Axios.delete(
      `${process.env.REACT_APP_API_URL}/api/user/${userId}`,
      config
    );
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div className={`content${showMenu ? " with-margin" : ""}`}>
        <OffCanvas show={showMenu} setShow={setShowMenu} />
        <div className="products-card">
          <div className="header-container ">
            <strong>Clients</strong>
            {/* <button className="btn-new-product">New product</button> */}
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
                {clients.map((client) => {
                  return (
                    <tr key={client._id} className="align-middle">
                      <td>
                        <img
                          className="product-img"
                          src={
                            (`${process.env.REACT_APP_API_URL}/images/${client.image}`,
                            config)
                          }
                        />
                      </td>
                      <td>{client.firstname}</td>
                      <td>{client.lastname}</td>
                      <td>
                        <div className="edit-delete-icons">
                          <BiEdit />
                          <div
                            className="p-1"
                            onClick={() => {
                              deleteUser(client._id);
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
      </div>
    </>
  );
}

export default Clients;
