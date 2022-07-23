import "./Header.css";
import Logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="" className="navbar-brand">
            <img src={Logo} alt="logo" width="50" height="50" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2 mx-2">
                <Link to="" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="about" className="nav-link">
                  About Library
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link to="rules" className="nav-link">
                  Rules&Regulations
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="pricecard" className="nav-link">
                  Price Card
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button className="btn  mx-2 my-2 my-sm-0" type="submit">
                <Link to="signup" className="text-decoration-none">
                  Signup
                </Link>
              </button>
              <button className="btn mx-2 my-2 my-sm-0" type="submit">
                <Link to="login" className="text-decoration-none">
                  Login
                </Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
