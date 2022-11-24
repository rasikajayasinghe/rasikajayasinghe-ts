import React from "react";
import Link from "next/link";
import Style from "../../styles/Header.module.scss";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileDone,
} from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineEnvelope,
} from "react-icons/hi2";

type Props = {};

const NavMenuLinks = [
  {
    id: "1",
    icon: <AiOutlineHome size="28" className={Style.nav__icon} />,
    title: "Home",
    path: "/",
  },
  {
    id: "2",
    icon: <AiOutlineUser size="28" className={Style.nav__icon} />,
    title: "About",
    path: "/About",
  },
  {
    id: "3",
    icon: <AiOutlineFileDone size="28" className={Style.nav__icon} />,
    title: "Skills",
    path: "/Skills",
  },
  {
    id: "4",
    icon: <MdHomeRepairService size="28" className={Style.nav__icon} />,
    title: "Services",
    path: "/Services",
  },
  {
    id: "5",
    icon: (
      <HiOutlineClipboardDocumentList size="28" className={Style.nav__icon} />
    ),
    title: "Portfolio",
    path: "/Portfolio",
  },
  /*  {
    id: "6",
    icon: <UilBloggerAlt size="28" className={headerStyle.nav__icon} />,
    title: "Blog",
    path: "/blog",
  }, */
  {
    id: "7",
    icon: <HiOutlineEnvelope size="28" className={Style.nav__icon} />,
    title: "Contact",
    path: "/Contact",
  },
];

const Header = (props: Props) => {
  return (
    <header className={Style.header}>
      <nav className={`container ${Style.nav}`}>
        <Link href="/" className={Style.nav__logo}>
          Rasika Jayasinghe
        </Link>
        <div className={Style.nav__menu}>
          <ul className={`grid ${Style.nav__list} `}>
            {NavMenuLinks.map((menuItem, index) => (
              <li className={Style.nav__item} key={menuItem.id}>
                <Link
                  href={menuItem.path}
                  className={Style.nav__link}
                  title={menuItem.title}
                  aria-hidden={true}
                >
                  {menuItem.icon}
                  <span className={Style.item__name}>{menuItem.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
