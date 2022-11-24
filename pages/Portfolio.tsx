import React from "react";
import Head from "next/head";

import Works from "../components/portfolio/Works";
import Style from "../styles/Portfolio.module.scss";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <>
      <Head>
        <title>Rasika Jayasinghe | Portfolio</title>
        <meta
          name="description"
          content="Rasika Jayasinghe Official Website & Blog"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>
        <Works />
      </section>
    </>
  );
};

export default Portfolio;
