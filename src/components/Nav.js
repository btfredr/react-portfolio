import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="logo">
        <h3 className="logo__item">Fredrik Fordelsen</h3>
      </div>

      <button className="toggleNav">
        <span className="menuBtn"></span>
      </button>

      <nav className="nav">
        <ul className="nav__list">
          <Link to="#home" className="nav__link">
            Home
          </Link>

          <Link to="#experience" className="nav__link">
            Experience
          </Link>

          <Link to="#projects" className="nav__link">
            Projects
          </Link>

          <Link to="#aboutMe" className="nav__link">
            About Me
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
