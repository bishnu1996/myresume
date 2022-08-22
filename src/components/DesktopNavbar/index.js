import "./style.css";
import Typography from "../Typography";
import { Link } from "react-router-dom";

const DesktopNavbar = (props) => {
  const getClassNames = () =>
    `app-desktop-nav ${props.className ? props.className : ""}`;
  return (
    <nav className={getClassNames()}>
      <ul>
        <li>
          <Typography type="H5" className="menu-font text-black">
            <Link to="/" className="nav-link">Home</Link>
          </Typography>
        </li>
        <li>
          <Typography type="H5" className="menu-font text-black">
            <Link to="about-us" className="nav-link">About Us</Link>
          </Typography>
        </li>
        <li>
          <Typography type="H5" className="menu-font text-black">
            <Link to="our-work" className="nav-link">Our Work</Link>
          </Typography>
        </li>
        <li>
          <Typography type="H5" className="menu-font text-black">
            <Link to="clients" className="nav-link">Clients</Link>
          </Typography>
        </li>
        <li>
          <Typography type="H5" className="menu-font text-black">
            <Link to="our-blogs" className="nav-link">Our Blogs</Link>
          </Typography>
        </li>
        <li>
          <Typography type="H5" className="menu-font text-black">
            <Link to="contact-us" className="nav-link"> Contact Us</Link>
          </Typography>
          <Typography type="H5" className="menu-font text-black">
            <Link to="login" className="nav-link"> Login</Link>
          </Typography>
          <Typography type="H5" className="menu-font text-black">
            <Link to="register" className="nav-link"> signup</Link>
          </Typography>
          
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
