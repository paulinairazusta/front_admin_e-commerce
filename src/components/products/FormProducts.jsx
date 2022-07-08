import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../register/register.css";

function FormProducts() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(1);
  const [featured, setFeatured] = useState(false);
  const [image, setImage] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");

  const admin = useSelector((state) => state.admin);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/category`,
          {
            headers: {
              Authorization: "Bearer " + admin.token,
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
        featured,
        stock,
        image,
        category,
      },

      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + admin.token,
        },
      }
    );
  };
  return (
    <div className="register-container form-product">
      <div>
        <form
          id="productform"
          className="register-card"
          onSubmit={(event) => {
            event.preventDefault();
            createProductHandler();
            navigate("/products");
          }}
        >
          <h2 className="mb-4">New product</h2>
          <label className="label" htmlFor="">
            Product Name
          </label>
          <input
            className="input"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            id=""
            required
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
            required
          ></textarea>
          <label className="label" htmlFor="">
            Price
          </label>
          <input
            className="input"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="number"
            required
          />
          <label className="label" htmlFor="stock">
            Product Stock
          </label>
          <input
            className="input"
            type="number"
            id="stock"
            onChange={(event) => setStock(event.target.value)}
            value={stock}
            required
          />
          <label htmlFor="featured">Featured</label>
          <select
            id="featured"
            onChange={(e) => {
              setFeatured(e.target.value);
            }}
            required
          >
            <option value="">Choose</option>
            <option value="false">False</option>
            <option value="true">True</option>True
          </select>
          <label className="label" htmlFor="">
            Product Image
          </label>
          <input
            className="input"
            onChange={(event) => setImage(event.target.files[0])}
            type="file"
            required
          />
          <label className="label" htmlFor="">
            Product category
          </label>
          <select
            form="productform"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            required
          >
            <option value="">Choose</option>
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
