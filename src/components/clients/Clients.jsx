import { useEffect, useState } from "react";
import Axios from "axios";
import "../products/products.css";

import { Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

function Clients() {
  const [clients, setClients] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_ADMIN_TOKEN,
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
  }, []);

  return (
    <>
      <div className="content">
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

export default Clients;
