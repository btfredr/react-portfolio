import { useState } from "react";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <nav className="nav">
        <h3 className="logo">Fredrik Fordelsen</h3>
        <NavLinks />
        <MobileNav />
      </nav>
    </>
  );
};

export default Nav;
