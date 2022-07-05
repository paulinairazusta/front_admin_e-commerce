import Axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import OrderModal from "./OrderModal";
import "./orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(false);

  const config = {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_ADMIN_TOKEN,
    },
  };

  useEffect(() => {
    async function getOrders() {
      const response = await Axios.get(
        `${process.env.REACT_APP_API_URL}/api/orders`,
        config
      );
      setOrders(response.data);
    }
    getOrders();
  }, []);

  return (
    <div className="content">
      <div className="products-card">
        <div className="table-products-container">
          <Table hover>
            <thead>
              <tr>
                <th>ORDER ID</th>
                <th>DATE</th>
                <th>CLIENT</th>
                <th>ADDRESS</th>
                <th>STATUS</th>
                <th>TOTAL PRICE</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                return (
                  <tr
                    key={order._id}
                    className="align-middle order"
                    onClick={() => setCurrentOrder(order)}
                  >
                    <td>{order._id}</td>
                    <td>{order.date}</td>
                    <td>
                      {order.user.firstname} {order.user.lastname}
                    </td>
                    <td>{order.user.address}</td>

                    <td>{order.status}</td>
                    <td>${order.totalPrice}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <OrderModal
            currentOrder={currentOrder}
            setCurrentOrder={setCurrentOrder}
          />
        </div>
      </div>
    </div>
  );
}

export default Orders;
