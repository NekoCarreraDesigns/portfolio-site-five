import "./Navbar.css";
import { GiPalmTree } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className='page-nav'>
      <a className='nav-link' href='/'>
        Home
      </a>
      {"  "}
      <a className='nav-link' href='/projects'>
        Projects
      </a>
      {"  "}
      <a className='nav-link' href='/contact'>
        Contact
      </a>
      <div className='circle'>
        <p className='circle-text'>
          <GiPalmTree /> Neko Carrera Designs <GiPalmTree />
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
