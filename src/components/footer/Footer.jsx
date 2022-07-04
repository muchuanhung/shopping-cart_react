import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/image/logo.svg";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className="d-flex justify-content-between py-3">
        <div className="d-flex align-items-center">
          <a href="/#" className="d-flex align-items-center">
            <img src={logo} alt="logo" className="px-3" />
            <div class={styles["footer-container__brand-name"]}>ALPHA Shop</div>
          </a>
        </div>

        <div className={styles["footer-container__info-column"]}>
          <div className={styles["footer-container__info-column__title"]}>
            客戶服務
          </div>
          <ul className={styles["footer-container__info-column__info-list"]}>
            <li
              className={
                styles["footer-container__info-column__info-list__item"]
              }
            >
              <a
                href="/#"
                className={
                  styles["footer-container__info-column__info-list__item__link"]
                }
              >
                運送說明
              </a>
            </li>
            <li
              className={
                styles["footer-container__info-column__info-list__item"]
              }
            >
              <a
                href="/#"
                className={
                  styles["footer-container__info-column__info-list__item__link"]
                }
              >
                退換貨相關
              </a>
            </li>
            <li
              className={
                styles["footer-container__info-column__info-list__item"]
              }
            >
              <a
                href="/#"
                className={
                  styles["footer-container__info-column__info-list__item__link"]
                }
              >
                付款資訊
              </a>
            </li>
            <li
              className={
                styles["footer-container__info-column__info-list__item"]
              }
            >
              <a
                href="/#"
                className={
                  styles["footer-container__info-column__info-list__item__link"]
                }
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className={styles["footer-container__info-column"]}>
          <div className={styles["footer-container__info-column__title"]}>
            關於我們
          </div>
          <ul className={styles["footer-container__info-column__info-list"]}>
            <li
              className={
                styles["footer-container__info-column__info-list__item"]
              }
            >
              <a
                href="/#"
                className={
                  styles["footer-container__info-column__info-list__item__link"]
                }
              >
                品牌故事
              </a>
            </li>
            <li
              className={
                styles["footer-container__info-column__info-list__item"]
              }
            >
              <a
                href="/#"
                className={
                  styles["footer-container__info-column__info-list__item__link"]
                }
              >
                媒體聯繫
              </a>
            </li>
            <li
              className={
                styles["footer-container__info-column__info-list__item"]
              }
            >
              <a
                href="/#"
                className={
                  styles["footer-container__info-column__info-list__item__link"]
                }
              >
                Press kit
              </a>
            </li>
          </ul>
        </div>

        <div className={styles["footer-container__info-column"]}>
          <div className={styles["footer-container__info-column__title"]}>
            資訊
          </div>
          <ul className={styles["footer-container__info-column__info-list"]}>
            <li
              className={
                styles["footer-container__info-column__info-list__item"]
              }
            >
              <a
                href="/#"
                className={
                  styles["footer-container__info-column__info-list__item__link"]
                }
              >
                隱私權政策
              </a>
            </li>
            <li
              className={
                styles["footer-container__info-column__info-list__item"]
              }
            >
              <a
                href="/#"
                className={
                  styles["footer-container__info-column__info-list__item__link"]
                }
              >
                Cookie
              </a>
            </li>
            <li
              className={
                styles["footer-container__info-column__info-list__item"]
              }
            >
              <a
                href="/#"
                className={
                  styles["footer-container__info-column__info-list__item__link"]
                }
              >
                GDPR
              </a>
            </li>
          </ul>
        </div>

        <div className={styles["footer-container__info-column"]}>
          <div className={styles["footer-container__info-column__title"]}>
            追蹤 ALPHA Shop
          </div>
          <ul className={styles["footer-container__info-column__info-list"]}>
            <li
              className={
                styles["footer-container__info-column__info-list__item"]
              }
            >
              +886 02123-45678
            </li>
            <li
              className={
                styles["footer-container__info-column__info-list__item"]
              }
            >
              <a
                href="/#"
                className={
                  styles["footer-container__info-column__info-list__item__link"]
                }
              >
                <i className="fab fa-facebook-f me-3"></i>
              </a>
              <a
                href="/#"
                className={
                  styles["footer-container__info-column__info-list__item__link"]
                }
              >
                <i className="fab fa-instagram me-3"></i>
              </a>
              <a
                href="/#"
                className={
                  styles["footer-container__info-column__info-list__item__link"]
                }
              >
                <i className="fab fa-whatsapp me-3"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
