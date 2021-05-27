const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section__title section__title--projects">Projects</h2>
      <p className="section__subtitle section__subtitle--projects">
        Some of the projects I've previously worked on:
      </p>

      <div className="portfolio">
        <a
          href="http://tasks.fredrikfordelsen.no/semester-project/index.html"
          target="_blank"
          className="portfolio__item"
        >
          <img
            src="./images/numetry-logo-clean.png"
            alt="Eduplaytion Numetry logo"
            classNameName="portfolio__image"
          />
        </a>

        <a
          href="http://breakingbad.fredrikfordelsen.no"
          target="_blank"
          className="portfolio__item"
        >
          <img
            src="./images/breakingbad.png"
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
            src="./images/site-icon.png"
            alt="Flower Power logo"
            className="portfolio__image"
          />
        </a>

        <a
          href="http://spacex.fredrikfordelsen.no"
          target="_blank"
          className="portfolio__item"
        >
          <img
            src="./images/share.jpg"
            alt="SpaceX logo"
            className="portfolio__image"
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
