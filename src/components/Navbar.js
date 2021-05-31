import { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  function toggleNav() {
    setOpenNav(!openNav);
  }

  return (
    <header className={openNav && "nav-open"}>
      <div className="logo">
        <h3 className="logo__item">Fredrik Fordelsen</h3>
      </div>
      <button className="toggleNav" onClick={toggleNav}>
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item" onClick={toggleNav}>
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item" onClick={toggleNav}>
            <a href="#experience" className="nav__link">
              Experience
            </a>
          </li>
          <li className="nav__item" onClick={toggleNav}>
            <a href="#projects" className="nav__link">
              Projects
            </a>
          </li>
          <li className="nav__item" onClick={toggleNav}>
            <a href="#aboutMe" className="nav__link">
              About me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
