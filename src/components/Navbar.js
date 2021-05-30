import { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header>
      <div class="logo">
        <h3 class="logo__item">Fredrik Fordelsen</h3>
      </div>
      <button class="toggleNav" onClick={() => setOpenNav(!openNav)}>
        <span class="hamburger"></span>
      </button>
      <nav class="nav">
        <ul class={openNav ? "nav-open" : ""}>
          <li class="nav__item">
            <a href="#home" class="nav__link">
              Home
            </a>
          </li>
          <li class="nav__item">
            <a href="#experience" class="nav__link">
              Experience
            </a>
          </li>
          <li class="nav__item">
            <a href="#projects" class="nav__link">
              Projects
            </a>
          </li>
          <li class="nav__item">
            <a href="#aboutMe" class="nav__link">
              About me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
