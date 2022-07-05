import { logout } from "../../redux/adminSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { BiUserPlus, BiCategoryAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
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

  // function FollowFunctional() {
  //   const [follow, setFollow] = React.useState(true)
  //   return <h2 onClick={()=> setFollow(!follow)}>{follow ? "Follow" : "Unfollow"}</h2>
  // }

  return (
    <>
      <Button variant="light" onClick={toggleShow} className="me-2">
        {show ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
      </Button>

      <Offcanvas
        className="side-menu"
        show={show}
        onHide={handleClose}
        name="Enable body scrolling"
        scroll
        backdrop={false}
        {...props}
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
              <Link to="/profile" className="link">
                <AiOutlineUser /> Profile
              </Link>
            </li>

            <li>
              <Link to="/login" className="link">
                <FiLogIn /> Sign In
              </Link>
            </li>
            <li>
              <Link to="/register" className="link">
                <BiUserPlus /> Sign Up
              </Link>
            </li>
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
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/products");
            }}
          >
            Logout
          </button>
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
