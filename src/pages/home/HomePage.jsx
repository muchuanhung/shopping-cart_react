import React from "react";
import {
  Header,
  Footer,
  CheckoutForm,
  CheckoutForm1,
  CheckoutForm2,
  CheckoutShoppingCart,
  Stepper,
} from "../../components";
import styles from "../../pages/home/HomePage.module.css";

export const HomePage = () => {
  const [step, setStep] = React.useState(1);
  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };
  const nextStep = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };
  return (
    <>
      <Header />
      <div className={styles["checkout-page"]}>
        <div className="w-100 me-3">
          <Stepper step={step} />
          {step === 1 && <CheckoutForm />}
          {step === 2 && <CheckoutForm1 />}
          {step === 3 && <CheckoutForm2 />}
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
          {/* <ProgressControl/> */}
        </div>
        <CheckoutShoppingCart />
      </div>

      <Footer />
    </>
  );
};
