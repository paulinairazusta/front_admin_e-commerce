import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import "./categories.css";

function OrderModal({ show, setShow }) {
  const [categoryName, setCategoryName] = useState("");

  const handleClose = () => setShow(false);
  const admin = useSelector((state) => state.admin);

  const config = {
    headers: {
      Authorization: "Bearer " + admin.token,
    },
  };

  async function handleCreate(event) {
    // event.preventDefault(); Se lo comenté porque creo que en este caso sí conviene que recargue la página así cuando se recarga ya aparece la categoría nueva. Si no, no aparece y hay que recargar a mano.
    await Axios.post(
      `${process.env.REACT_APP_API_URL}/create/category`,
      {
        name: categoryName,
      },
      config
    );
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create category</Modal.Title>
      </Modal.Header>
      <form action="" onSubmit={handleCreate}>
        <Modal.Body className="category-modal">
          <input
            type="text"
            value={categoryName}
            onChange={(event) => setCategoryName(event.target.value)}
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
