import { Modal, Button, Table } from "react-bootstrap";

function OrderModal({ currentOrder, setCurrentOrder }) {
  if (currentOrder) {
    return (
      <Modal show={currentOrder} onHide={() => setCurrentOrder(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Dolcetto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="margin-left mb-2">User details</h5>
          <ul className="user-container">
            <li className="margin-left list-item">
              {" "}
              Name: {currentOrder.user.firstname} {currentOrder.user.lastname}
            </li>
            <li className="margin-left list-item">
              Address: {currentOrder.user.address}
            </li>
            <li className="margin-left list-item">
              Email: {currentOrder.user.email}
            </li>
            <li className="margin-left list-item">
              Phone: {currentOrder.user.phone}
            </li>
          </ul>

          <h5 className="mt-4 mb-2 margin-left">Order details</h5>
          <Table hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {currentOrder.products.map((product) => {
                return (
                  <tr key={currentOrder._id}>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>${product.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <p className="total-price">Total price: ${currentOrder.totalPrice}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setCurrentOrder(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default OrderModal;
