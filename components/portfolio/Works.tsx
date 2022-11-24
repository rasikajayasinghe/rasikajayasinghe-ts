import React, { useEffect, useState } from "react";

import WorksItems from "./WorksItems";
import { projectsData, projectsNav } from "../../pages/Data";
import Style from "../../styles/Portfolio.module.scss";
import { StaticImageData } from "next/image";

interface Props {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
}

const Works = (props: Props) => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className={Style.work__filters}>
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? `${Style.active_work}` : ""} ${
                Style.work__item
              }`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className={`${Style.work__container} container grid`}>
        {projects.map((item, index) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
