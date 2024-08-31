import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../components/Context/AuthContext';

function Menu() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: 'black' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Appstore</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/list">List</Link>
            </li>
            {user?.role === 'admin' && (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/add">Add</Link>
              </li>
            )}
          </ul>
          <div className="d-flex ms-auto">
            {!user ? (
              <>
                <Link className="btn btn-primary me-2" to="/login">Login</Link>
                <Link className="btn btn-success" to="/register">Register</Link>
              </>
            ) : (
              <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
