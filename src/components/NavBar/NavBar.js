import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo";
import "../NavBar/NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container" id="navbar">
      <div className="row">
        <div className="col-6">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>
                <Logo/>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/Diamond Rings"}>
                      Diamond
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/Emerald Rings"}>
                      Emerald
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/Ruby Rings"}>
                      Ruby
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-6 d-flex justify-content-end  align-items-center">
         <Link to="/cart"><CartWidget /></Link> 
        </div>
      </div>
    </div>
  );
};


export default NavBar 