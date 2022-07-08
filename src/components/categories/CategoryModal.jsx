import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import "./categories.css";

function OrderModal({ show, setShow, setCount }) {
  const [categoryName, setCategoryName] = useState("");

  const handleClose = () => setShow(false);
  const admin = useSelector((state) => state.admin);

  const config = {
    headers: {
      Authorization: "Bearer " + admin.token,
    },
  };

  async function handleCreate(event) {
    event.preventDefault();
    await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/category`,
      {
        name: categoryName,
      },
      config
    );
    setCount((prev) => prev + 1);
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="modal-category-title">
          Create category
        </Modal.Title>
      </Modal.Header>
      <form action="" onSubmit={handleCreate}>
        <Modal.Body className="category-modal">
          <input
            type="text"
            value={categoryName}
            onChange={(event) => setCategoryName(event.target.value)}
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="secondary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default OrderModal;
