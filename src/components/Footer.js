const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="logo">Fredrik Fordelsen</h3>
      <ul className="socialList">
        <li className="socialList__item">
          <a className="socialList__link" href="https://www.github.com/btfredr">
            <i className="fab fa-github-square"></i>
          </a>
        </li>
        <li className="socialList__item">
          <a
            className="socialList__link"
            href="https://www.facebook.com/btfredr"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>
        <li className="socialList__item">
          <a
            className="socialList__link"
            href="https://www.instagram.com/fredrikfordelsen"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
