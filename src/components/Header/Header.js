import "./Header.css";
import Logo from "../../assets/image/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={Logo} alt="logo" width="50" height="50" />
          </a>
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
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link">About Library</a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link">Rules&Regulations</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link">Price Card</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button className="btn mx-2 my-2 my-sm-0" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
