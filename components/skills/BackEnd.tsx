import React from "react";

import { DiPhp } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { IoLogoPython } from "react-icons/io";
import { BackEndSkillData } from "../../lib/Data";
import Skills from "./Skills";
import Style from "../../styles/Skills.module.scss";

type Props = {};

const BackEnd = (props: Props) => {
  return (
    <div className={Style.skills__content}>
      <h3 className={Style.skills__title}>Backend Developer</h3>
      <div className={Style.skills__box}>
        <div className={Style.skills__group}>
          {BackEndSkillData.map((BackEndSkill, index) => (
            <Skills skillData={BackEndSkill} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
