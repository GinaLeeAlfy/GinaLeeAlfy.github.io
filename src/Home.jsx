import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";

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
          <a
            href="https://github.com/GinaLeeAlfy"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandGithub />
            Github
          </a>
          <a
            href="https://twitter.com/GinaLeeAlfy"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandX /> Twitter/X
          </a>
          <a
            href="https://icodethis.com/GinaLeeAlfy"
            target="_blank"
            rel="noreferrer"
          >
            iCodeThis
          </a>
        </div>
      </section>
      <section>
        <h2>Gina Alfandary Magana</h2>
        <p>
          I am an aspiring web developer. I studied Human Biology at UCSC. In my
          free time I enjoy video/board games, horseback riding, racket sports,
          and anime.
        </p>
      </section>
    </div>
  );
};

export default Home;
