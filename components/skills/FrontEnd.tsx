import React from "react";

import Skills from "./Skills";
import { FrontEndSkillsData } from "./Data";
import Style from "../../styles/Skills.module.scss";

type Props = {};

const FrontEnd = (props: Props) => {
  return (
    <div className={Style.skills__content}>
      <h3 className={Style.skills__title}>Frontend Developer</h3>
      <div className={Style.skills__box}>
        <div className={Style.skills__group}>
          {FrontEndSkillsData.map((FrontEndSkill, index) => (
            <Skills skillData={FrontEndSkill} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
