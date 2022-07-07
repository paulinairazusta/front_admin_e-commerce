import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./products.css";
import { useSelector } from "react-redux";
import axios from "axios";

function FormEditProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const product = useSelector((state) =>
    state.product.find((item) => item._id === params.id)
  );
  const admin = useSelector((state) => state.admin);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [featured, setFeatured] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const editProductHandler = async () => {
    await axios.patch(
      "http://localhost:3001/api/product",
      {
        id: product._id,
        name,
        description,
        featured,
        price,
        stock,
        image,
        category,
      },
      config
    );
  };
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
  }, [admin.token]);
  return (
    <div className="register-container form-product">
      <div>
        <form
          id="productform"
          className="register-card"
          onSubmit={(event) => {
            event.preventDefault();
            editProductHandler();
            navigate("/products");
          }}
        >
          {" "}
          <h2 className="mb-4">Edit product</h2>
          <label className="label" htmlFor="name">
            Product Name
          </label>
          <input
            className="input"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            id="name"
          />
          <label className="label" htmlFor="description">
            Description
          </label>
          <textarea
            className="input"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            id="description"
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
          <label className="label" htmlFor="stock">
            Product Stock
          </label>
          <input
            className="input"
            type="number"
            id="stock"
            onChange={(event) => setStock(event.target.value)}
            value={stock}
          />
          <label className="label" htmlFor="featured">
            Featured
          </label>
          <select
            id="featured"
            onChange={(e) => {
              setFeatured(e.target.value);
            }}
          >
            <option value="false">Choose</option>
            <option value="true">True</option>
            <option value="false">False</option>
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
          <button className="button-submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default FormEditProduct;
