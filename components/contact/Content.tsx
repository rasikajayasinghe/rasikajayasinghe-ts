import Link from "next/link";
import React from "react";

import { FaRegEnvelope } from "react-icons/fa";
import { BsArrowRight, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import Style from "../../styles/Contact.module.scss";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className={Style.contact__content}>
      <h3 className={Style.contact__title}>Talk to me</h3>
      <div className={Style.contact__info}>
        <div className={Style.contact__card}>
          <FaRegEnvelope className={Style.card__icon} />
          <h3 className={Style.contact__card_title}>Email</h3>
          <span className={Style.contact__card_data}>
            rasikajayasinghe87@gmail.com
          </span>
          <Link href="#" className={Style.contact__button}>
            Write me <BsArrowRight className={Style.button__icon} />
          </Link>
        </div>

        <div className={Style.contact__card}>
          <BsWhatsapp className={Style.card__icon} />
          <h3 className={Style.contact__card_title}>Whatsapp</h3>
          <span className={Style.contact__card_data}>+94 70 336 8058</span>
          <Link href="#" className={Style.contact__button}>
            Message me <BsArrowRight className={Style.button__icon} />
          </Link>
        </div>

        <div className={Style.contact__card}>
          <AiOutlineMobile className={Style.card__icon} />
          <h3 className={Style.contact__card_title}>Mobile</h3>
          <span className={Style.contact__card_data}>+94 70 336 8058</span>
          <Link href="#" className={Style.contact__button}>
            Call me <BsArrowRight className={Style.button__icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
