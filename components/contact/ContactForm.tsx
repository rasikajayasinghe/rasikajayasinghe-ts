import React, { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

import { AiOutlineSend } from "react-icons/ai";
import Style from "../../styles/Contact.module.scss";

type Props = {};

const ContactForm = (props: Props) => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleButtonClick = () => {
    setIsAlertVisible(true);

    setTimeout(() => {
      setIsAlertVisible(false);
    }, 5000);
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    handleButtonClick();
    e.preventDefault();

    emailjs
      .sendForm("service_bulo4ui", "template_31n62vd", "wPX-O-ZL5CNT_q-1v")
      .then(
        (result) => {
          setStatusMessage("Email sent success");
        },
        (error) => {
          setStatusMessage(`${error.text} happened`);
        }
      );
  };
  return (
    <div className={Style.contact__content}>
      <h3 className={Style.contact__title}>Write me your project</h3>
      <form className={Style.contact__form}>
        {statusMessage && isAlertVisible && (
          <div className={Style.message__alert}>
            <p>{statusMessage}</p>
          </div>
        )}

        <div className={Style.contact__from_wrapper}>
          <label className={Style.contact__form_label}>Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className={Style.contact__form_input}
          />
        </div>
        <div className={Style.contact__from_wrapper}>
          <label className={Style.contact__form_label}>Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className={Style.contact__form_input}
          />
        </div>
        <div
          className={`${Style.contact__from_wrapper} ${Style.contact__form_area}`}
        >
          <label className={Style.contact__form_label}>Message *</label>
          <textarea
            name="message"
            cols={30}
            rows={10}
            required
            placeholder="Enter your message"
            className={Style.contact__form_input}
          ></textarea>
        </div>
        <button onSubmit={sendEmail} className="button button--flex">
          Send Message
          <AiOutlineSend
            className="button__icon"
            color="var(--container-color)"
          />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
