import React from "react";
import Head from "next/head";
import Image from "next/image";

import AboutImg from "../assets/about.jpg";
import Info from "../components/about/Info";
import { BiDownload } from "react-icons/bi";
import Style from "../styles/About.module.scss";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Head>
        <title>Rasika Jayasinghe | About Me</title>
        <meta
          name="description"
          content="Rasika Jayasinghe Official Website & Blog"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={`section ${Style.about}`} id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className={`container grid ${Style.about__container}`}>
          <Image src={AboutImg} alt="" className={Style.about_img} priority />
          <div className={Style.about__data}>
            <Info />
            <p className={Style.about__description}>
              I am Interested in using technology to connect people and
              businesses and willing to take up any challenges to improve
              myself. I am an Artificial Intelligence enthusiast and I like to
              experiment with new and upcoming technologies during my free time.
              With the 6 years’ experience as a web developer I have hands on
              expertise of HTML5, CSS3, SASS, LESS, JavaScript, jQuery, Angular
              js, React js, Node js ,Grunt, bower, Bootstrap, Ruby, joomla,
              wordpress, magento, Zencart framework, php, Mysql, .net and I’m
              currently looking for an opportunity to work as a web developer in
              a company which helps to grow and extend personal horizons.
            </p>
            <a href="#" className="button button--flex">
              Download CV
              <BiDownload
                className="button__icon"
                color="var(--container-color)"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
