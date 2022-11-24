import React from "react";

import { BsLinkedin, BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";
import Style from "../../styles/Social.module.scss";

const SocialMediaLins = [
  {
    id: "1",
    icon: <BsInstagram className={Style.icon} />,
    title: "Instagram",
    link: "https://www.instagram.com/rasikajayasinghe87/",
  },
  {
    id: "2",
    icon: <BsFacebook className={Style.icon} />,
    title: "Facebook",
    link: "https://www.facebook.com/rasikajayasingha",
  },
  {
    id: "3",
    icon: <BsLinkedin className={Style.icon} />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/rasika-jayasinghe/",
  },
  {
    id: "4",
    icon: <BsYoutube className={Style.icon} />,
    title: "Youtube",
    link: "https://www.youtube.com/channel/UCxNOHgGSCRYpLPXg34EWR7A",
  },
];

type Props = {};

const Social = (props: Props) => {
  return (
    <div className={Style.social}>
      {SocialMediaLins.map((socialLink, index) => (
        <a
          href={socialLink.link}
          className={Style.social__icon}
          target="_blank"
          rel="noreferrer"
          key={socialLink.id}
        >
          {socialLink.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
