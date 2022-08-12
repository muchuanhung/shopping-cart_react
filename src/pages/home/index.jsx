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
import items from "../../data/items";
import {CartContext} from "../../context/CartContext";


const HomePage = () => {
  const initMoney = items
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b);
  const [step, setStep] = React.useState(1);
  const [total, setTotal] = React.useState(initMoney);
  const [fare, setFare] = React.useState(0);
  const [fareState, setFareState] = React.useState("標準運送");
  const providerValue = {
    items,
    total,
    setTotal,
    step,
    fare,
    setFare,
    fareState,
    setFareState,
  };

  const onChangeStep = (num) => {
    let finalStep = step + num;
    if (finalStep > 0 && finalStep < 4) setStep(finalStep);
  };

  // const downStep = () => {
  //   if (step > 1) setStep((prev) => prev - 1);
  // };
  // const upStep = () => {
  //   if (step < 3) setStep((prev) => prev + 1);
  // };

  return (
    <>
      <Header />
      <div className={styles["checkout-page"]}>
        <div className="w-100 me-3">
          <Stepper step={step} />
          {step === 1 && <CheckoutForm />}
          <CartContext.Provider value={providerValue}>
            {step === 2 && <CheckoutForm1 />}
          </CartContext.Provider>
          {step === 3 && <CheckoutForm2 />}
          <ProgressControl step={step} onChangeStep={onChangeStep} />
          {/* <ProgressControl
        step={step}
        onClickNext={upStep}
        onClickBack={downStep}
      /> */}
        </div>
        <CartContext.Provider value={providerValue}>
          <CheckoutShoppingCart />
        </CartContext.Provider>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
