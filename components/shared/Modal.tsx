import React from "react";

import { IoClose } from "react-icons/io5";
import Style from "../../styles/Modal.module.scss";
interface Props {
  data: any;
  closeModal: any;
  show: boolean;
  children: any;
}

const Modal = (props: Props) => {
  const { data, closeModal, show, children } = props;
  const showHideClassName = show
    ? `${Style.modal} ${Style.open_modal}`
    : "modal ";

  return (
    <div className={showHideClassName}>
      <div className={Style.modal__content}>
        <IoClose className={Style.modal__close} onClick={closeModal} />
        <h3 className={Style.modal__title}>
          {`${data.category} ${data.serviceName}`}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default Modal;
