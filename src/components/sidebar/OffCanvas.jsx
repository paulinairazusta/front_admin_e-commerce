import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { BiUserPlus, BiCategoryAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { GiCakeSlice } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { RiBillLine } from "react-icons/ri";
import "./offcanvas.css";

function OffCanvas({ name, ...props }) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        {name}
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="side-menu"
      >
        <Offcanvas.Header closeButton className="side-menu">
          <Link to="/" className="link">
            <Offcanvas.Title className="offcanvas-title">
              AdminKit
            </Offcanvas.Title>
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body className="side-menu">
          <span className="list">Pages</span>
          <ul className="list">
            <li>
              <Link to="/" className="link">
                <GoSettings /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="profile" className="link">
                <AiOutlineUser /> Profile
              </Link>
            </li>

            <li>
              <Link to="login" className="link">
                <FiLogIn /> Sign In
              </Link>
            </li>
            <li>
              <Link to="register" className="link">
                <BiUserPlus /> Sign Up
              </Link>
            </li>
          </ul>
          <span className="list">Admin tools</span>
          <ul className="list">
            <li>
              <Link to="users" className="link">
                <HiUsers /> Users
              </Link>
            </li>
            <li>
              <Link to="products" className="link">
                <GiCakeSlice /> Products
              </Link>
            </li>

            <li>
              <Link to="categories" className="link">
                <BiCategoryAlt /> Categories
              </Link>
            </li>
            <li>
              <Link to="orders" className="link">
                <RiBillLine /> Orders
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;

// function Example() {
//   return (
//     <>
//       {options.map((props, idx) => (
//         <OffCanvasExample key={idx} {...props} />
//       ))}
//     </>
//   );
// }

// render(<Example />);
