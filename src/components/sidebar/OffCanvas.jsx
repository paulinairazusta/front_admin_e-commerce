import { logout } from "../../redux/adminSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
} from "react-icons/ai";
import { BiCategoryAlt, BiMenuAltLeft } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import { GiCakeSlice } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { RiBillLine, RiAdminLine } from "react-icons/ri";

import "./offcanvas.css";

function OffCanvas({ name, show, setShow, ...props }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [hide, setHide] = useState(true);

  const handleClose = () => {
    setShow(false);
  };
  const toggleShow = () => {
    setShow((s) => !s);
    // setHide(!hide);
  };
  return (
    <>
      <div className="admin-nav">
        <button onClick={toggleShow} >
          {<BiMenuAltLeft />}
        </button>
        <div className="admin-nav-user-info">
          <img src="https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" alt="" />
          <span>Admin</span>
        </div>
      </div>

      <Offcanvas
        className="side-menu"
        show={show}
        onHide={handleClose}
        name="Enable body scrolling"
        scroll
        backdrop={false}
        {...props}
      >
        <Offcanvas.Header className="side-menu">
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
              <Link to="/profile" className="link">
                <AiOutlineUser /> Profile
              </Link>
            </li>

            {/* <li>
              <Link to="/login" className="link">
                <FiLogIn /> Sign In
              </Link>
            </li>
            <li>
              <Link to="/register" className="link">
                <BiUserPlus /> Sign Up
              </Link>
            </li> */}
          </ul>
          <span className="list">Admin tools</span>
          <ul className="list">
            <li>
              <Link to="/products" className="link">
                <GiCakeSlice /> Products
              </Link>
            </li>

            <li>
              <Link to="/categories" className="link">
                <BiCategoryAlt /> Categories
              </Link>
            </li>
            <li>
              <Link to="/orders" className="link">
                <RiBillLine /> Orders
              </Link>
            </li>
            <li>
              <Link to="/clients" className="link">
                <HiUsers /> Clients
              </Link>
            </li>
            <li>
              <Link to="/admins" className="link">
                <RiAdminLine /> Admins
              </Link>
            </li>
          </ul>
          <ul className="list-logout">
            <li>
              <div
                className="link logout-button"
                onClick={() => {
                  dispatch(logout());
                  navigate("/products");
                }}
              >
                <FiLogOut /> Logout
              </div>
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
