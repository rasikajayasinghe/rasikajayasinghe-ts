import React from "react";

import { AiOutlineSend } from "react-icons/ai";
import Style from "../../styles/HomeHero.module.scss";

const heroContent = {
  name: "Rasika Jayasinghe",
  title: "Senior Front-End Developer",
  description: `Hi! My name is Rasika Jayasinghe. I am Senior Front-End Developer, and I'm very passionate and dedicated to my work. With 10th years experience as a professional UI/UX designer & Senior Front-End Developer, I have acquired the skills and knowledge necessary to make your project a success.`,
};

type Props = {};

const HomeHero = (props: Props) => {
  return (
    <div className={Style.home__hero_data}>
      <h1 className={Style.home__hero_title}>{heroContent.name}</h1>
      <h3 className={Style.home__hero_subtitle}>{heroContent.title}</h3>
      <p className={Style.home__hero_description}>{heroContent.description}</p>
      <a href="/contact" className="button button--flex">
        Say Hello{" "}
        <AiOutlineSend
          className="button__icon"
          color="var(--container-color)"
        />
      </a>
    </div>
  );
};

export default HomeHero;
