import React from "react";

import Skills from "./Skills";
import { designSkillsData } from "./Data";
import Style from "../../styles/Skills.module.scss";

type Props = {};

const Design = (props: Props) => {
  return (
    <div className={Style.skills__content}>
      <h3 className={Style.skills__title}>Design, Video & Audio Tools</h3>
      <div className={Style.skills__box}>
        <div className={Style.skills__group}>
          {designSkillsData.map((designSkill, index) => (
            <Skills skillData={designSkill} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
