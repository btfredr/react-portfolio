import Meg from "../images/meg.jpg";

const About = () => {
  return (
    <div className="container__about">
      <section className="aboutMe" id="aboutMe">
        <h2 className="section__title section__title--aboutMe">Who am I?</h2>
        <p className="section__subtitle section__subtitle--aboutMe">
          Front-End Developer based in Norway
        </p>

        <div className="aboutMe__content">
          <p>
            I'm currently 20 years old and studying Front-End Development at
            Noroff in Bergen. Among what I've been learning are languages like
            HTML, CSS, and JavaScript. If you're interested in going more in
            depth into my previous projects, you can find them on this page or
            on my GitHub account.
          </p>
          <p>
            If you'd ask me to describe myself, I would say that I'm a
            goal-oriented person, who is willing to learn new things. While I
            may not be an expert yet, I'm definitely looking for a workplace
            where I can grow as a developer and expand my knowledge.
          </p>
          <p>
            Do I fit the description of who you're looking to hire? Visit the
            contact section of this page if you want to get in touch with me.
          </p>
        </div>

        <img src={Meg} alt="image of me" className="aboutMe__img" />
      </section>
    </div>
  );
};

export default About;
