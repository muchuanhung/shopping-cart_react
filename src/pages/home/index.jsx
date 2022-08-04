import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CheckoutForm from "../../components/checkoutForm";
import CheckoutForm1 from "../../components/checkoutForm1";
import CheckoutForm2 from "../../components/checkoutForm2";
import CheckoutShoppingCart from "../../components/checkoutShoppingCart";
import Stepper from "../../components/stepper";
import styles from "../../pages/home/HomePage.module.css";
import ProgressControl from "../../components/progressControl";

const HomePage = () => {
  const [step, setStep] = React.useState(1);

  const onChangeStep = (num) => {
    let finalStep = step + num;
    if (finalStep > 0 && finalStep < 4) setStep(finalStep);
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
          <ProgressControl step={step} onChangeStep={onChangeStep} />
        </div>
        <CheckoutShoppingCart />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
