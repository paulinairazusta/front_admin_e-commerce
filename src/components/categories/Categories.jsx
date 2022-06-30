import { useEffect, useState } from "react";
import Axios from "axios";
import "./categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    async function getCategories() {
      const response = await Axios.get(`http://localhost:3001/api/categories`);
      setCategories(response.data);
    }
    getCategories();
  }, []);

  async function handleCreate(event) {
    // event.preventDefault(); Se lo comenté porque creo que en este caso sí conviene que recargue la página así cuando se recarga ya aparece la categoría nueva. Si no, no aparece y hay que recargar a mano.
    await Axios.post("http://localhost:3001/create/category", {
      name: categoryName,
    });
  }

  return (
    <>
      <button className="btn btn-light">New category</button>
      <form action="" onSubmit={handleCreate}>
        <input
          type="text"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
        />
        <button type="submit">Create category</button>
      </form>

      {categories.map((category) => {
        return (
          <ul className="list-unstyled" key={category._id}>
            <li>{category.name}</li>
          </ul>
        );
      })}
    </>
  );
}

export default Categories;
