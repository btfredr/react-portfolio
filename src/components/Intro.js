const Intro = () => {
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
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Intro;
