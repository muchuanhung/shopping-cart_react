import React from "react";
import styles from "./Stepper.module.scss";

type StepItemProps = {
  step: number,
  name: string,
  stepCss: string,
  itemCss: string,
};

const StepItem: React.FC<StepItemProps> = (props) => {
  const { step, name, stepCss, itemCss } = props;
  return (
    <div className={`d-flex justify-content-start m-3 ${itemCss}`}>
      <div className={styles["step"]} data-step={stepCss}>
        {step}
      </div>
      <div>{name}</div>
    </div>
  );
};

export const Stepper = (props) => {
  const { step } = props;
  return (
    <>
      <div className={styles["circle-icons"]}>
        <StepItem
          step={step === 1 ? 1 : "✔"}
          name="寄送地址"
          stepCss={step === 1 ? "" : "finish"}
          itemCss=""
        />
        <div className={styles["lineDisable"]} />
        <StepItem
          step={step !== 3 ? 2 : "✔"}
          name="運送方式"
          stepCss={
            (step === 1 && "disable") ||
            (step === 2 && "") ||
            (step === 3 && "finish")
          }
          itemCss={step === 1 ? "stepItemDisable" : ""}
        />
        <div className={styles["lineDisable"]} />
        <StepItem
          step={3}
          name="付款資訊"
          stepCss={step === 3 ? "" : "disable"}
          itemCss={step === 3 ? "" : "stepItemDisable"}
        />
      </div>
    </>
  );
};

// export function Stepper() {
//   return (
//     <section className={styles.Stepper}>
//       <span className={styles["progress-group"]} data-phase="address">
//         <span className={styles["progress-icon"]}>
//           <span className={styles["text"]}>1</span>
//           {/* <img src={icons} alt="pg-complete" className="cursor-point" /> */}
//         </span>
//         <span className={styles["progress-label"]}>寄送地址</span>
//       </span>

//             <span className={styles["progress-bar"]} data-order="1"></span>
//       <span className={styles["progress-group"]} data-phase="shipping">
//         <span className={styles["progress-icon"]}>
//           <span className={styles["text"]}>2</span>
//           {/* <img src={icons} alt="pg-complete" className="cursor-point" /> */}
//         </span>
//         <span className={styles["progress-label"]}>運送方式</span>
//       </span>

//           <span className={styles["progress-bar"]} data-order="2"></span>
//       <span className={styles["progress-group"]} data-phase="credit-card">
//         <span className={styles["progress-icon"]}>
//           <span className={styles["text"]}>3</span>
//           {/* <img src={icons} alt="pg-complete" className="cursor-point" /> */}
//         </span>
//         <span className={styles["progress-label"]}>付款資訊</span>
//       </span>
//     </section>
//   )
// }
