import React from "react";
import style from "./styles.module.scss";
import Image from "next/image";
import tazbinsingleimage from "../../assets/image/HeroSection/tazbinsingleimage.png";
import { FacebookIcon } from "@/assets/icon/icon";
const index = () => {
  return (
    <section className={`${style.hero_section} section_separator`}>
      <div className={`${style.hero_container}`}>
        <div className={style.hero_content_wrapper}>
          <div className={style.hero_content}>
            {/* ====Hero Content==== */}
            <div className={style.content_text}>
              <p className={style.subtitle}>Welcome to my world</p>
              <h1 className={style.title}>
                Hi, I’m <span className={"highlight_text"}>Tazbin Ahad</span>
                <br />
                <span className={"highlight_text"}>a </span>
                <span>Developer.</span>
              </h1>
              <p className={style.description}>
                I use animation as a third dimension by which to simplify
                experiences and kuiding thro each and every interaction. I’m not
                adding motion just to spruce things up, but doing it in ways
                that.
              </p>
            </div>
            <div className={style.content_links}>
              <div className={style.social_share_link}>
                <p className={style.title}>find with me</p>
                <ul className={style.social_share}>
                  <li className="facebook">
                    <a href="">{<FacebookIcon />}</a>
                  </li>
                  <li className="instagram">
                    <a href="">{<FacebookIcon />}</a>
                  </li>
                  <li className="linkedin">
                    <a href="">{<FacebookIcon />}</a>
                  </li>
                </ul>
              </div>
              <div className={style.skill_share_inner}>
                <p className={style.title}>best skill on</p>
                <ul className={style.social_share}>
                  <li className="facebook">
                    <a href="">{<FacebookIcon />}</a>
                  </li>
                  <li className="instagram">
                    <a href="">{<FacebookIcon />}</a>
                  </li>
                  <li className="linkedin">
                    <a href="">{<FacebookIcon />}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.hero_thumbnail}>
            <div className={style.hero_img}>
              <Image
                src={tazbinsingleimage}
                alt="hero"
                width={700}
                height={960}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
