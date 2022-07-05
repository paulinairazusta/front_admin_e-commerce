import { useEffect, useState } from "react";
import Axios from "axios";
import "../products/products.css";
import OffCanvas from "../sidebar/OffCanvas";

import { Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

function Clients() {
  const [clients, setClients] = useState([]);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    async function getClients() {
      const response = await Axios.get("http://localhost:3001/api/users");
      setClients(response.data);
    }
    getClients();
  }, []);

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
                  {/* <th></th> */}
                  <th>FIRST NAME</th>
                  <th>LAST NAME</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => {
                  return (
                    <tr key={client._id} className="align-middle">
                      {/* <td>
                        <img
                          className="product-img"
                          src={`http://localhost:3001/images/${client.image}`}
                        />
                      </td> */}
                      <td>{client.firstname}</td>
                      <td>{client.lastname}</td>
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

      {/* {clients.map((client) => {
        return (
          <ul className="list-unstyled" key={client._id}>
            <li>
              {client.firstname} {client.lastname}
            </li>
          </ul>
        );
      })} */}
    </>
  );
}

export default Clients;
