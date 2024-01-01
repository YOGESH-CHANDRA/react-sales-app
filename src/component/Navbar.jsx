import { NavLink } from "react-router-dom";
import "./Navbar.css";

// Navbar or header

const Navbar = () => {
  return (
    <div className="navbar bg-primary ">
      <nav className="navbar navbar-expand-lg  w-100">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <b>SALES APP</b>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <NavLink className="nav-link " aria-current="page" to="/">
                ADD SALES
              </NavLink>
              <NavLink className="nav-link " to="/top5sales">
                TOP 5 SALES
              </NavLink>
              <NavLink className="nav-link " to="/todaystotalrevenue">
                TODAY'S TOTAL REVENUE
              </NavLink>
              <NavLink className="nav-link " to="/login">
                LOGIN
              </NavLink>
              <NavLink className="nav-link " to="/register">
                REGISTER
              </NavLink>
              <NavLink className="nav-link logout" to="/login">
                LOGOUT
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
