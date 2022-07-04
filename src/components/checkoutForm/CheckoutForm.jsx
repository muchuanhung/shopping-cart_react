import React from "react";
import { ProgressControl } from "../../components";
import styles from "./CheckoutForm.module.scss";

export function CheckoutForm() {
  return (
    <form action="" className={styles.Form}>
      <div className={styles["form-part"]}>
        <h2 className={styles["form-part__title"]}>寄送地址</h2>
        <div className={styles["form-part__form-row"]}>
          <div className={styles["form-part__form-row__flex-grow-1"]}>
            <label for="salutation">稱謂</label>
            <div className={styles["select-wrapper"]}>
              <select name="salutation" id="salutation">
                <option value="Mr">先生</option>
                <option value="Ms">小姐</option>
                <option value="Mx">Mx</option>
              </select>
            </div>
          </div>
          <div className={styles["form-part__form-row__flex-grow-2"]}>
            <label for="name">姓名</label>
            <input type="text" name="name" id="name" placeholder="請輸入姓名" />
          </div>
        </div>
        <div className={styles["form-part__form-row"]}>
          <div className={styles["form-part__form-row__flex-grow-1-pc"]}>
            <label for="phone">電話</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="請輸入行動電話"
            />
          </div>
          <div className={styles["form-part__form-row__flex-grow-1-pc"]}>
            <label for="email">E-Mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="請輸入電子郵件"
            />
          </div>
        </div>
        <div className={styles["form-part__form-row"]}>
          <div className={styles["form-part__form-row__flex-grow-1-pc"]}>
            <label for="city">縣市</label>
            <div className={styles["select-wrapper"]}>
              <select name="city" id="city" required>
                <option value="" selected disabled>
                  請選擇縣市
                </option>
                <option value="taipei">台北市</option>
                <option value="new-taipei">新北市</option>

                <option value="taichung">台中市</option>
                <option value="tainan">台南市</option>
                <option value="kaohsiung">高雄市</option>
                <option value="more">更多...</option>
              </select>
            </div>
          </div>
          <div className={styles["form-part__form-row__flex-grow-2-pc"]}>
            <label for="address">地址</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="請輸入地址"
            />
          </div>
        </div>
      </div>

      <div className={styles["form-part"]}>
        <h2 className={styles["form-part__title"]}>運送方式</h2>

        <div className={styles["form-part__form-row"]}>
          <input
            type="radio"
            name="shipping"
            id="standard-shipping"
            value="standard"
            checked
            required
          />
          <label
            for="standard-shipping"
            className={styles["form-part__form-shipping-option"]}
          >
            <div
              className={
                styles["form-part__form-shipping-option__radio-circle"]
              }
            ></div>
            <div
              className={
                styles[
                  "form-part__form-shipping-option__shipping-desc flex-grow-1"
                ]
              }
            >
              <span
                className={
                  styles[
                    "form-part__form-shipping-option__shipping-desc__shipping-subtitle"
                  ]
                }
              >
                標準運送
              </span>
              <span
                class="
                form-part__form-shipping-option__shipping-desc__shipping-time
              "
              >
                約 3-7 個工作天
              </span>
            </div>
            <div
              className={
                styles["form-part__form-shipping-option__shipping-fee"]
              }
            >
              {/* {{ 0 | showPriceLabel }} */}
            </div>
          </label>
        </div>
        <div className={styles["form-part__form-row"]}>
          <input
            type="radio"
            name="shipping"
            id="DHL-shipping"
            value="DHL"
            required
          />
          <label
            for="DHL-shipping"
            className={styles["form-part__form-shipping-option"]}
          >
            <div
              className={
                styles["form-part__form-shipping-option__radio-circle"]
              }
            ></div>
            <div
              className={
                styles[
                  "form-part__form-shipping-option__shipping-desc flex-grow-1"
                ]
              }
            >
              <span
                className={
                  styles[
                    "form-part__form-shipping-option__shipping-desc__shipping-subtitle"
                  ]
                }
              >
                DHL 貨運
              </span>
              <span
                className={
                  styles[
                    "form-part__form-shipping-option__shipping-desc__shipping-time"
                  ]
                }
              >
                48 小時內送達
              </span>
            </div>
            <div
              className={
                styles["form-part__form-shipping-option__shipping-fee"]
              }
            >
              {/* {{ 500 | showPriceLabel }} */}
            </div>
          </label>
        </div>
      </div>

      <div className={styles["form-part"]}>
        <h2 className={styles["form-part__title"]}>付款資訊</h2>
        <div className={styles["form-part__form-row"]}>
          <div className={styles["form-part__form-row__form-unit"]}>
            <label for="credit-card-holder">持卡人姓名</label>
            <input
              type="text"
              name="credit-card-holder"
              id="credit-card-holder"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className={styles["form-part__form-row"]}>
          <div className={styles["form-part__form-row__form-unit"]}>
            <label for="credit-card-no">卡號</label>
            <input
              type="text"
              name="credit-card-no"
              id="credit-card-no"
              placeholder="1111 2222 3333 4444"
            />
          </div>
        </div>
        <div className={styles["form-part__form-row"]}>
          <div className={styles["form-part__form-row__form-unit flex-grow-1"]}>
            <label for="credit-card-expiration">有效期限</label>
            <input
              type="text"
              name="credit-card-expiration"
              id="credit-card-expiration"
              placeholder="MM / YY"
            />
          </div>
          <div className={styles["form-part__form-row__form-unit flex-grow-1"]}>
            <label for="CVC-CCV">CVC / CCV</label>
            <input type="text" name="CVC-CCV" id="CVC-CCV" placeholder="123" />
          </div>
        </div>
      </div>

      <ProgressControl />
    </form>
  );
}
