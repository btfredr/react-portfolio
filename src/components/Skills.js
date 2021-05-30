import { Button } from "@material-ui/core";

const Skills = () => {
  return (
    <section className="my-skills" id="experience">
      <h2 className="section__title section__title--skills">What I do</h2>
      <div className="skills">
        <div className="skill">
          <h3 className="skill__title">Design and development</h3>
          <p className="skill__content">
            I've been learning HTML, CSS and JavaScript, as well as some brief
            experience with frameworks like React, NextJS, Tailwind CSS and
            Bootstrap.
          </p>
          <p className="skill__content">
            Seeing as I’m currently studying to become a Front-End Developer,
            design also a part of my project in addition to coding
          </p>
        </div>

        <div className="skill">
          <h3 className="skill__title">E-Commerce</h3>
          <p className="skill__content">
            In addition to traditional coding, I’ve done some brief work with
            E-Commerce.
          </p>
          <p className="skill__content">
            My previous semester project at Noroff was to create an E-Commerce
            website with a CMS backend system, which was Strapi in this case.
          </p>
        </div>

        <div className="skill">
          <h3 className="skill__title">WordPress</h3>
          <p className="skill__content">
            Another project I worked on during my Front-End Development course
            was to make a website based off WordPress.
          </p>
          <p className="skill__content">
            If you’re interested in taking a closer look at this in particular,
            feel free to visit the Flower Power website listed below.
          </p>
        </div>
      </div>

      <Button>
        <a href="#projects" className="skillsBtn">
          My Work
        </a>
      </Button>
    </section>
  );
};

export default Skills;
