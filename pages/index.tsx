import Head from "next/head";

import HomeHero from "../components/home/HomeHero";
import Social from "../components/shared/Social";
import Style from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rasika Jayasinghe | Official Website</title>
        <meta
          name="description"
          content="Rasika Jayasinghe Official Website & Blog"
        />
        <link rel="icon" href="/favicon.ico" />
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
}
