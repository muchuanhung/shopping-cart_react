import React from "react";
import styles from "./CheckoutForm.module.scss";

const CheckoutForm = () => {
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
            <div className={styles["select-wrapper2"]}>
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
    </form>
  );
};

export default CheckoutForm;
