import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CheckoutForm from "../../components/checkoutForm";
import CheckoutForm1 from "../../components/checkoutForm1";
import CheckoutForm2 from "../../components/checkoutForm2";
import CheckoutShoppingCart from "../../components/checkoutShoppingCart";
import Stepper from "../../components/stepper";
import styles from "../../pages/home/HomePage.module.css";

const cartItems = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

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
        <CheckoutShoppingCart items={cartItems} />
      </div>

      <Footer />
    </>
  );
};
