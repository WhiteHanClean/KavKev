import React from "react";
import wa from "../../assets/wa.png";
import ig from "../../assets/ig.png";
import ha from "../../assets/halal.png";
import cl from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

const footer_content = [
  {
    title: "Покупателям",
    links: [
      { link: "/", text: "Акционная газета" },
      { link: "/", text: "Акции и розыгрыши" },
      { link: "/", text: "Права покупателей" },
      { link: "/", text: "Карты лояльности" },
      { link: "/", text: "Подарочные сертификаты" },
      { link: "/", text: "Гарантии Фрунзе" },
    ],
  },
  {
    title: "Сотрудничество",
    links: [
      { link: "/", text: "Поставщикам" },
      { link: "/", text: "Корпоративным клиентам" },
      { link: "/", text: "Арендаторам" },
      { link: "/", text: "Рекламодателям" },
    ],
  },
  {
    title: "О нас",
    links: [
      { link: "/", text: "Поставщикам" },
      { link: "/", text: "Корпоративным клиентам" },
      { link: "/", text: "Арендаторам" },
      { link: "/", text: "Карты лояльности" },
      { link: "/", text: "Подарочные сертификаты" },
      { link: "/", text: "Гарантии Фрунзе" },
    ],
  },
];
const Footer = () => {
  return (
    <div className={cl.container}>
      <div className={cl.main}>
        {footer_content.map((item, index) => {
          return (
            <div className={cl.card}>
              <h2 className={cl.card__title}>{item.title}</h2>
              {item.links.map((link, linkIndex) => {
                return (
                  <Link href={link.link}>
                    <p className={cl.card__link}>{link.text}</p>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={cl.footer}>
        <div className={cl.footer__links}>
          <div className={cl.footer__link_img}>
            <Image src={wa} alt="Whatsap" />
          </div>
          <div className={cl.footer__link_img}>
            <Image src={ig} alt="instagram" />
          </div>
          <div className={cl.footer__link_img}>
            <Image src={ha} alt="Halal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
