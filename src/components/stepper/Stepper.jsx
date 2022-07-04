import React from "react";
import styles from "./Stepper.module.scss";
import icons from "../../assets/icons/pg-complete.svg";

export function Stepper() {
  return (
    <section className={styles.Stepper}>
      <span className={styles["progress-group"]} data-phase="address">
        <span className={styles["progress-icon"]}>
          <span className={styles["text"]}>1</span>
          <img src={icons} alt="pg-complete" className="cursor-point" />
        </span>
        <span className={styles["progress-label"]}>寄送地址</span>
      </span>

      <span className={styles["progress-bar"]} data-order="1"></span>
      <span className={styles["progress-group"]} data-phase="shipping">
        <span className={styles["progress-icon"]}>
          <span className={styles["text"]}>2</span>
          <img src={icons} alt="pg-complete" className="cursor-point" />
        </span>
        <span className={styles["progress-label"]}>運送方式</span>
      </span>

      <span className={styles["progress-bar"]} data-order="2"></span>
      <span className={styles["progress-group"]} data-phase="credit-card">
        <span className={styles["progress-icon"]}>
          <span className={styles["text"]}>3</span>
          <img src={icons} alt="pg-complete" className="cursor-point" />
        </span>
        <span className={styles["progress-label"]}>付款資訊</span>
      </span>
    </section>
  );
}
