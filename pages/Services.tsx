import React from "react";
import Head from "next/head";

import ServicesContent from "../components/services/ServicesContent";
import Style from "../styles/Services.module.scss";

type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <Head>
        <title>Rasika Jayasinghe | Services</title>
        <meta
          name="description"
          content="Rasika Jayasinghe Official Website & Blog"
        />
      </Head>
      <section className={`section ${Style.services}`} id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className={`container grid ${Style.services__container}`}>
          <ServicesContent />
        </div>
      </section>
    </>
  );
};

export default Services;
