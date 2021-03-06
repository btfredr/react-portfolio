import IntroPicture from "../images/soundcloud.jpg";

const Intro = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Fredrik Fordelsen</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        front-end developer
      </p>
      <img src={IntroPicture} alt="Introduction" className="intro__img" />
    </section>
  );
};

export default Intro;
