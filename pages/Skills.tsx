import React, { useEffect, useState } from "react";
import Head from "next/head";

import SkillList from "../components/skills/SkillList";
import Style from "../styles/Skills.module.scss";

import FrontEnd from "../components/skills/FrontEnd";
import BackEnd from "../components/skills/BackEnd";
import Design from "../components/skills/Design";
import FrameWorks from "../components/skills/FrameWorks";

type Props = {};

const Skills = (props: Props) => {
  return (
    <>
      {}
      <Head>
        <title>Rasika Jayasinghe | Skills</title>
        <meta
          name="description"
          content="Rasika Jayasinghe Official Website & Blog"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={`section ${Style.skill}s`} id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className={`container grid ${Style.skills__container} `}>
          <FrontEnd />
          <BackEnd />
          <FrameWorks />
          <Design />
        </div>
      </section>
    </>
  );
};

export default Skills;
