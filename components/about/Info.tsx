import React from "react";

import { BsAward, BsBriefcase, BsHeadphones } from "react-icons/bs";
import Style from "../../styles/AboutInfo.module.scss";

const infoData = [
  {
    id: "1",
    icon: <BsAward className={Style.about__icon} />,
    title: "Experience",
    subTitle: "8 Years Working",
  },
  {
    id: "2",
    icon: <BsBriefcase className={Style.about__icon} />,
    title: "Completed",
    subTitle: "48+ Project",
  },
  {
    id: "3",
    icon: <BsHeadphones className={Style.about__icon} />,
    title: "Support",
    subTitle: "Online 24/7",
  },
];

type Props = {};

const Info = (props: Props) => {
  return (
    <div className={`grid ${Style.about__info}`}>
      {infoData.map((info, index) => (
        <div className={Style.about__box} key={info.id}>
          {info.icon}
          <h3 className={Style.about__title}>{info.title}</h3>
          <span className={Style.about__subtitle}>{info.subTitle}</span>
        </div>
      ))}
    </div>
  );
};

export default Info;
