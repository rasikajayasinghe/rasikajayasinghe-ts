import React from "react";
import Style from "../../styles/Skills.module.scss";

interface Props {
  skillData: any;
}

const Skills = (props: Props) => {
  const { skillData } = props;

  return (
    <div className={Style.skills__data} key={skillData.id}>
      {skillData.icon}
      <div>
        <h3 className={Style.skills__name}>{skillData.skillName}</h3>
        <span className={Style.skills__level}>{skillData.skillLevel}</span>
      </div>
    </div>
  );
};

export default Skills;
