import React from "react";
import style from "./styles.module.scss";
const index = () => {
  return (
    //=========Header Wrapper===========
    <header className={style.header_wrapper}>
      <div className={style.header_container}>
        {/* =========Main Header========= */}
        <div className={style.main_header}>
          {/* ========Header Left :) Logo Area */}
          <div className={style.header_left}>
            <div className={style.logo}>
              <h4 className={style.logo_text}>Tazbin Ahad</h4>
            </div>
          </div>
          {/* ========Header Right :) Menu Area */}
          <div className={style.header_right}>
            {/* ==========Menu========== */}
            <div className={style.header_menu}>
              <nav className={style.menu}>
                <ul className={style.menu_list}>
                  <li className={`${style.menu_item} ${style.active}`}>
                    <a href="#home" className={`${style.menu_link}`}>
                      Home
                    </a>
                  </li>
                  <li className={style.menu_item}>
                    <a href="#about" className={style.menu_link}>
                      Features
                    </a>
                  </li>
                  <li className={style.menu_item}>
                    <a href="#service" className={style.menu_link}>
                      Portfolio
                    </a>
                  </li>
                  <li className={style.menu_item}>
                    <a href="#portfolio" className={style.menu_link}>
                      Resume
                    </a>
                  </li>
                  <li className={style.menu_item}>
                    <a href="#contact" className={style.menu_link}>
                      Clients
                    </a>
                  </li>
                  <li className={style.menu_item}>
                    <a href="#contact" className={style.menu_link}>
                      Pricing
                    </a>
                  </li>
                  <li className={style.menu_item}>
                    <a href="#contact" className={style.menu_link}>
                      Blog
                    </a>
                  </li>
                  <li className={style.menu_item}>
                    <a href="#contact" className={style.menu_link}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* ==========Highlighted Button */}
            <a href="#" className={`btn ${style.menu_btn}`}>
              <span>Buy Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
