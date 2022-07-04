import React from "react";
import styles from "./ProgressControl.module.scss";

export function ProgressControl() {
  return (
    <div className={styles["form-btn-groups"]}>
      <div className={styles["form-btn-groups__btn-wrapper"]}>
        <button className={styles["form-btn-groups__btn__btn-back"]}>
          <span className={styles["arrow-symbol"]}>&#8592;</span> 上一步
        </button>
      </div>
      <button className={styles["form-btn-groups__btn__btn-next"]}>
        下一步 <span className={styles["arrow-symbol"]}>&#8594;</span>
      </button>
      <button
        type="submit"
        className={styles["form-btn-groups__btn__btn-submit"]}
      >
        確認下單
      </button>
    </div>
  );
}
