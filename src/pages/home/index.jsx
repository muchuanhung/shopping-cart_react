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
import { CartContext } from "../../context/CartContext";
import useShoppingCart from "../../hooks/useShoppingCart";
import {
  actionUpdateMoney,
  actionSetInitMoney,
  actionSetFare,
} from "../../hooks/actions";

const HomePage = () => {
  const [state, dispatch] = useShoppingCart();
  const atUpdateMoney = React.useCallback(
    (money) => {
      dispatch(actionUpdateMoney(money));
    },
    [dispatch]
  );

  const atSetInitMoney = React.useCallback(
    (initMoney) => {
      dispatch(actionSetInitMoney(initMoney));
    },
    [dispatch]
  );

  const atSetFare = React.useCallback(
    (fare, fareState) => {
      dispatch(actionSetFare(fare, fareState));
    },
    [dispatch]
  );

  React.useEffect(() => {
    const initMoney = items
      .map((item) => item.price * item.quantity)
      .reduce((a, b) => a + b);
    atSetInitMoney(initMoney);
    return () => {
      atSetInitMoney(0);
    };
  }, [atSetInitMoney]);

  const [step, setStep] = React.useState(1);
  const providerValue = {
    items,
    step,
    state,
    onUpdateMoney: atUpdateMoney,
    onSetFare: atSetFare,
  };

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
          <CartContext.Provider value={providerValue}>
            {step === 2 && <CheckoutForm1 />}
          </CartContext.Provider>
          {step === 3 && <CheckoutForm2 />}
          <ProgressControl step={step} onChangeStep={onChangeStep} />
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
