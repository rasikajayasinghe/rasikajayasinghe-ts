import Head from "next/head";

import HomeHero from "../components/home/HomeHero";
import Social from "../components/shared/Social";
import Style from "../styles/Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="container">
      <Head>
        <title>Rasika Jayasinghe | Official Website</title>
        <meta
          name="description"
          content="Rasika Jayasinghe Official Website & Blog"
        />
      </Head>
      <section className={`section ${Style.home}`} id="home">
        <div className={`container grid ${Style.home__container}`}>
          <div className={`grid ${Style.home__content}`}>
            <Social />
            <div className={Style.home__img}></div>
            <HomeHero />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
