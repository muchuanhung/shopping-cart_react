import React from "react";
// import styles from "./ProgressControl.module.scss";

// export function ProgressControl() {
//   return (
//     <div className={styles["form-btn-groups"]}>
//       <div className={styles["form-btn-groups__btn-wrapper"]}>
//         <button className={styles["form-btn-groups__btn__btn-back"]}>
//           <span className={styles["arrow-symbol"]}>&#8592;</span> 上一步
//         </button>
//       </div>
//       <button className={styles["form-btn-groups__btn__btn-next"]}>
//         下一步 <span className={styles["arrow-symbol"]}>&#8594;</span>
//       </button>
//       <button
//         type="submit"
//         className={styles["form-btn-groups__btn__btn-submit"]}
//       >
//         確認下單
//       </button>
//     </div>
//   );
// }
type ProgressControlProps = {
  step: number,
  prevStep: Function,
  nextStep: Function,
};

export const ProgressControl: React.FC<ProgressControlProps> = ({
  step,
  nextStep,
  prevStep,
}) => {
  return (
    <section
      className={`border-top pt-4 d-flex ${
        step !== 1 ? "justify-content-between" : "justify-content-end"
      }`}
    >
      {step !== 1 && (
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={prevStep}
        >
          ← 上一步
        </button>
      )}

      <button type="button" className="btn btn-danger" onClick={nextStep}>
        {step !== 3 ? "→ 下一步" : "確認下單"}
      </button>
    </section>
  );
};
