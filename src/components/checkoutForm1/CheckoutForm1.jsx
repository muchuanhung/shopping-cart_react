import React from "react";
import styles from "./CheckoutForm1.module.scss";

export const CheckoutForm1 = () => {
  return (
    <form action="" className={styles.Form}>
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
    </form>
  );
};
