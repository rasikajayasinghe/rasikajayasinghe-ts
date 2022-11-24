import React from "react";
import Link from "next/link";
import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";
import Style from "../../styles/Portfolio.module.scss";
interface Props {
  item: any;
}

const WorksItems = (props: Props) => {
  const { item } = props;
  return (
    <div className={Style.work__card} key={item.id}>
      <Image src={item.image} alt="" className={Style.work__img} priority />
      <h3 className={Style.work__title}>{item.title}</h3>
      <Link href="#" className={Style.work__button}>
        Demo <BsArrowRight className={Style.button__icon} />
      </Link>
    </div>
  );
};

export default WorksItems;
