const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:fredrikf2000@gmail.com" className="footer__link">
        fredrikf2000@gmail.com
      </a>
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
