import {Link} from "react-router-dom";
import { useAuth } from "../../context/providers/AuthContext";


const Navbar = () => {

  const {isLoggedIn} = useAuth();
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            E-commerce
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Cart
                </a>
              </li>
              {
                isLoggedIn ? (
                  <li className="nav-item">
                <Link className="nav-link" to="/products/new">
                  New Product
                </Link>
              </li>
                ) : (
                  <li className="nav-item">
                <Link className="nav-link" to="/auth/signup">
                  Registrarse
                </Link>
              </li>
                )
              }
           
          
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
