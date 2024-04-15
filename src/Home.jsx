import Anchor from "./Anchor";

const Home = () => {
  return (
    <div className="container">
      <section>
        <div className="img-container">
          <img
            src="https://avatars.githubusercontent.com/u/19276818?v=4"
            alt="Gina in the snow."
          />
        </div>
      </section>
      <section>
        <div className="links">
          <Anchor src="https://github.com/GinaLeeAlfy" site="Github" />
          <Anchor src="https://twitter.com/GinaLeeAlfy" site="X/Twitter" />
          <Anchor src="https://icodethis.com/GinaLeeAlfy" site="iCodeThis" />
          <Anchor
            src="https://www.linkedin.com/in/ginaleealfy/"
            site="Linkedin"
          />
        </div>
      </section>
      <section>
        <h2>Gina Alfandary Magana</h2>
        <p>
          I am a web developer. I studied Human Biology at UCSC. In my free time
          I enjoy video/board games, horseback riding, racket sports, and anime.
        </p>
      </section>
      <section className="projects">
        <h3>Please take a look at my project:</h3>
        <div className="links">
          <Anchor src="https://wish.zeroleestudios.com/" site="Wish" />
        </div>
      </section>
    </div>
  );
};

export default Home;
