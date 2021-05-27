import BreakingBad from "../images/breakingbad.png";
import FedUp from "../images/site-icon.png";
import SpaceX from "../images/share.jpg";
import Holidaze from "../images/Holidaze.JPG";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section__title section__title--projects">Projects</h2>
      <p className="section__subtitle section__subtitle--projects">
        Some of the projects I've previously worked on:
      </p>

      <div className="portfolio">
        <a
          href="http://holidaze.fredrikfordelsen.no"
          target="_blank"
          className="portfolio__item"
        >
          <img
            src={Holidaze}
            alt="Breaking Bad database"
            className="portfolio__image"
          />
        </a>

        <a
          href="http://breakingbad.fredrikfordelsen.no"
          target="_blank"
          className="portfolio__item"
        >
          <img
            src={BreakingBad}
            alt="Breaking Bad database"
            className="portfolio__image"
          />
        </a>

        <a
          href="http://fedup.fredrikfordelsen.no"
          target="_blank"
          className="portfolio__item"
        >
          <img
            src={FedUp}
            alt="Flower Power logo"
            className="portfolio__image"
          />
        </a>

        <a
          href="http://spacex.fredrikfordelsen.no"
          target="_blank"
          className="portfolio__item"
        >
          <img src={SpaceX} alt="SpaceX logo" className="portfolio__image" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
