import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../register/register.css";

function FormProducts() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/categories`,
          {
            headers: {
              Authorization: "Bearer " + process.env.REACT_APP_ADMIN_TOKEN,
            },
          }
        );
        setCategoryList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const createProductHandler = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/product`,
      {
        name,
        description,
        price,
        image,
        category,
      },

      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + process.env.REACT_APP_ADMIN_TOKEN,
        },
      }
    );
    console.log(response.data);
  };
  return (
    <div className="register-container">
      <div>
        <h2>New product</h2>
        <form
          id="productform"
          className="register-card"
          onSubmit={(event) => {
            event.preventDefault();
            createProductHandler();
            navigate("/products");
          }}
        >
          <label className="label" htmlFor="">
            Product Name
          </label>
          <input
            className="input"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            id=""
          />
          <label className="label" htmlFor="">
            Description
          </label>
          <textarea
            className="input"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <label className="label" htmlFor="">
            Price
          </label>
          <input
            className="input"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="tel"
          />
          <label className="label" htmlFor="">
            Product Image
          </label>
          <input
            className="input"
            onChange={(event) => setImage(event.target.files[0])}
            type="file"
          />
          <label className="label" htmlFor="">
            Product category
          </label>
          <select
            form="productform"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {categoryList.map((category) => {
              return (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <button className="button-submit">Add a product</button>
        </form>
      </div>
    </div>
  );
}

export default FormProducts;
