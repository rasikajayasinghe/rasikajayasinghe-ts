import React from "react";
import Head from "next/head";

import Content from "../components/contact/Content";
import ContactForm from "../components/contact/ContactForm";
import Style from "../styles/Contact.module.scss";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <Head>
        <title>Rasika Jayasinghe | Contact me</title>
        <meta
          name="description"
          content="Rasika Jayasinghe Official Website & Blog"
        />
      </Head>
      <section className={`${Style.contact} section`} id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact me</span>

        <div className={`${Style.contact__container} container grid`}>
          <Content />
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
