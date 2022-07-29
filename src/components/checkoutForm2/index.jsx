import React from "react";
import styles from "./CheckoutForm2.module.scss";

const CheckoutForm2 = () => {
  return (
    <form action="" className={styles.Form}>
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
    </form>
  );
};

export default React.memo(CheckoutForm2);
