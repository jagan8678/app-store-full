import { Link } from 'react-router-dom';
import "./footer.css"


function Footer() {
  
  return (
    <div className="container-fluid" 
    style={{
      backgroundImage:'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg")'
    }}>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="foot-item">
            <Link className="nav-link " to="/" exact>Home</Link>
          </li>
          <li className="foot-item">
            <Link className="nav-link " to="/about">About</Link>
          </li>
          <li className="foot-item">
            <Link className="nav-link " to="/list">List</Link>
          </li>
        </ul>
        <div data-testid="footer-content">
          <p className="text-center" >© 2024 APPSTORE</p>
        </div>
        
      </footer>
    </div>
  );
}

export default Footer;



