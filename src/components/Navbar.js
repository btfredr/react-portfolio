import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <div className="nav__links">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#aboutMe">About</a>
        </div>
      </div>
      <div className="nav__right">Fredrik Fordelsen</div>
    </nav>
  );
};

export default Navbar;
