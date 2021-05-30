import { useState } from "react";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

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
          <a href="#home" className="nav__link">
            Home
          </a>

          <a href="#experience" className="nav__link">
            Experience
          </a>

          <a href="#projects" className="nav__link">
            Projects
          </a>

          <a href="#aboutMe" className="nav__link">
            About Me
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
