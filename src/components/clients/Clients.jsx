import { useEffect, useState } from "react";
import Axios from "axios";

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function getClients() {
      const response = await Axios.get("http://localhost:3001/api/users");
      setClients(response.data);
    }
    getClients();
  }, []);

  return (
    <>
      {clients.map((client) => {
        return (
          <ul className="list-unstyled" key={client._id}>
            <li>
              {client.firstname} {client.lastname}
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default Clients;
