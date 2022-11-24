import React from "react";

import Skills from "./Skills";
import { FrameWorksSkillsData } from "../../lib/Data";
import Style from "../../styles/Skills.module.scss";

type Props = {};

const FrameWorks = (props: Props) => {
  return (
    <div className={Style.skills__content}>
      <h3 className={Style.skills__title}>Frame Works</h3>
      <div className={Style.skills__box}>
        <div className={Style.skills__group}>
          {FrameWorksSkillsData.map((frameWorkSkill, index) => (
            <Skills skillData={frameWorkSkill} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameWorks;
