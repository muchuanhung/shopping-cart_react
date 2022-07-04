import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMoon,
  faSearch,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/image/logo.svg";

export function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles["header__container"]}>
        <label className="burger-container d-none">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </span>
        </label>

        <nav>
          <div className={styles["navbar__nav-list"]}>
            <div className={styles["navbar__nav-list__nav-item"]}>
              <a
                href="/#"
                className={styles["navbar__nav-list__nav-item__nav-link"]}
                aria-current="page"
              >
                男款
              </a>
            </div>
            <span className={styles["navbar__nav-list__nav-item"]}>
              <a
                href="/#"
                className={styles["navbar__nav-list__nav-item__nav-link"]}
                aria-current="page"
              >
                女款
              </a>
            </span>
            <div className={styles["navbar__nav-list__nav-item"]}>
              <a
                href="/#"
                className={styles["navbar__nav-list__nav-item__nav-link"]}
                aria-current="page"
              >
                最新消息
              </a>
            </div>
            <div className={styles["navbar__nav-list__nav-item"]}>
              <a
                href="/#"
                className={styles["navbar__nav-list__nav-item__nav-link"]}
                aria-current="page"
              >
                聯絡我們
              </a>
            </div>
            <div className={styles["navbar__nav-list__nav-item"]}>
              <a
                href="/#"
                className={styles["navbar__nav-list__nav-item__nav-link"]}
                aria-current="page"
              >
                客製商品
              </a>
            </div>
          </div>
        </nav>

        <div className={styles["header-actions"]}>
          <a className="d-flex align-items-center" href="/#">
            <img src={logo} alt="logo" className="px-3" />
            <h4 className={styles["header__brand__shop-name"]}>ALPHA Shop</h4>
          </a>
        </div>

        <div className={styles["header-actions__dark-mode-toggle"]}>
          <a href="/#" class={styles["header-actions__header-link"]}>
            <span className={styles["nav-icon"]}>
              <FontAwesomeIcon icon={faSearch}> </FontAwesomeIcon>
            </span>
          </a>
          <a href="/#" class={styles["header-actions__header-link"]}>
            <span className={styles["nav-icon"]}>
              <FontAwesomeIcon icon={faCartShopping}> </FontAwesomeIcon>
            </span>
          </a>

          <span className={styles["nav-icon"]}>
            <FontAwesomeIcon icon={faMoon}> </FontAwesomeIcon>
          </span>
          <span className={styles["nav-icon"]}>
            <FontAwesomeIcon icon={faSun}> </FontAwesomeIcon>
          </span>
        </div>
      </div>
    </header>
  );
}
