import { Modal, Button } from "react-bootstrap";

function OrderModal({ currentOrder, setCurrentOrder }) {
  return (
    <Modal show={currentOrder} onHide={() => setCurrentOrder(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Order Nº {currentOrder._id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currentOrder &&
          currentOrder.products.map((product) => {
            return (
              <p key={product._id}>
                {product.quantity} {product.name} ${product.price}
              </p>
            );
          })}
        <p>Total price: ${currentOrder.totalPrice}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setCurrentOrder(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderModal;
