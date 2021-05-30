import BreakingBad from "../images/breakingbad.png";
import Hulu from "../images/hulu.svg.png";
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
          href="https://holidaze.fredrikfordelsen.no"
          target="_blank"
          rel="noreferrer"
          className="portfolio__item"
        >
          <img src={Holidaze} alt="Holidaze" className="portfolio__image" />
        </a>

        <a
          href="https://breakingbad.fredrikfordelsen.no"
          target="_blank"
          rel="noreferrer"
          className="portfolio__item"
        >
          <img
            src={BreakingBad}
            alt="Breaking Bad database"
            className="portfolio__image"
          />
        </a>

        <a
          href="https://hulu-clone-rust.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="portfolio__item"
        >
          <img src={Hulu} alt="Hulu Clone" className="portfolio__image" />
        </a>

        <a
          href="https://spacex.fredrikfordelsen.no"
          target="_blank"
          rel="noreferrer"
          className="portfolio__item"
        >
          <img src={SpaceX} alt="SpaceX logo" className="portfolio__image" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
