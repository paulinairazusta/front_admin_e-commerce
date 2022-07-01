import Axios from "axios";
import { useState, useEffect } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      const response = await Axios.get("http://localhost:3001/api/orders");
      setOrders(response.data);
      console.log(response.data);
    }
    getOrders();
  }, []);
  return (
    <>
      {orders.map((order) => {
        return (
          <ul>
            {order.productsNames.map((product) => {
              return <li>{product}</li>;
            })}
          </ul>
        );
      })}
    </>
  );
}

export default Orders;
