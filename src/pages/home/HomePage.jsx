import React from "react";
import {
  Header,
  Footer,
  CheckoutForm,
  CheckoutShoppingCart,
  Stepper,
} from "../../components";
import styles from "../../pages/home/HomePage.module.css";

export function HomePage() {
  return (
    <>
      <Header />
      <div className={styles["checkout-page"]}>
        <div className="w-100">
          <Stepper />
          <CheckoutForm />
        </div>
        <CheckoutShoppingCart />
      </div>

      <Footer />
    </>
  );
}
