import { useEffect, useState } from "react";
import Axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await Axios.get("http://localhost:3001/api/categories");
      setCategories(response.data);
    }
    getCategories();
  }, []);

  return (
    <>
      <button className="btn btn-light">New category</button>
      {categories.map((categorie) => {
        return (
          <ul className="list-unstyled">
            <li>{categorie.name}</li>
          </ul>
        );
      })}
    </>
  );
}

export default Categories;
