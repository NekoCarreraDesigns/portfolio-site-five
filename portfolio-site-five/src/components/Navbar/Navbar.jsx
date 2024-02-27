import "./Navbar.css";
import {Link} from "react-router-dom"
import { GiPalmTree } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className='page-nav'>
      <Link className='nav-link' to='/'>
        Home
      </Link>
      {"  "}
      <Link className='nav-link' to='/projects'>
        Projects
      </Link>
      {"  "}
      <Link className='nav-link' to='/contact'>
        Contact
      </Link>
      <div className='circle'>
        <p className='circle-text'>
          <GiPalmTree /> Neko Carrera Designs <GiPalmTree />
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
