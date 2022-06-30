import { useState, useEffect } from "react";
import Axios from "axios";

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
      {admins.map((admin) => {
        return (
          <ul key={admin._id}>
            <li>
              {admin.firstname} {admin.lastname}
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default Admins;
