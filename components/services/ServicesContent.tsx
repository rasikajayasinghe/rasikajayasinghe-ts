import React, { useState } from "react";

import Modal from "../../components/shared/Modal";
import { servicesContentData } from "../../pages/Data";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";

import Style from "../../styles/Services.module.scss";
import ModalStyle from "../../styles/Modal.module.scss";

interface Props {}

const ServicesContent = (props: Props) => {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(false);

  const toggleItem = (servicesItem = null) => {
    setData(servicesItem);
    setVisible(servicesItem !== null);
  };
  return (
    <>
      {servicesContentData.map((services, index) => (
        <div className={Style.services__content} key={services.id}>
          <div>
            {services.icon}
            <h3 className={`${Style.services__title} ${Style.skills__name}`}>
              {services.category} <br />
              {services.serviceName}
            </h3>
            <span
              className={Style.services__button}
              onClick={() => toggleItem(services)}
            >
              View More <BsArrowRight className="button__icon" />
            </span>
          </div>
        </div>
      ))}
      {visible === true && data !== null && (
        <Modal closeModal={() => toggleItem()} data={data} show={visible}>
          <p className={ModalStyle.modal__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            ab aspernatur ut dolor dignissimos rem dolorem. Distinctio sit,
            tempore inventore reprehenderit cupiditate praesentium nobis id iste
            minima perferendis reiciendis animi.
          </p>
          <ul className={`${ModalStyle.modal__service} grid`}>
            {data.serviceList.map((item, index) => (
              <li className={ModalStyle.modal__service_list} key={item.id}>
                <AiOutlineCheckCircle className={ModalStyle.modal__icon} />
                <p className={ModalStyle.services__modal_info}>{item.title}</p>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </>
  );
};

export default ServicesContent;
