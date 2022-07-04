import React from "react";
import styles from "./CheckoutShoppingCart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import product1 from "../../assets/image/product-01.jpg";
import product2 from "../../assets/image/product-02.jpg";

export function CheckoutShoppingCart() {
  return (
    <div className={styles.CheckoutShoppingCart}>
      <div className={styles["shopping-cart__shopping-list"]}>
        <div className={styles["product-list"]} data-total-price="0">
          <div
            class={styles["product-container"]}
            data-count="0"
            data-price="3999"
          >
            <img
              class={styles["img-container"]}
              src={product1}
              alt="product1"
            />
            <div className={styles["product-info"]}>
              <div className={styles["product-name"]}>破壞補丁修身牛仔褲</div>
              <div className={styles["product-control-container"]}>
                <div className={styles["product-control"]}>
                  <span className={styles["product-action"]}>
                    <FontAwesomeIcon icon={faMinus}> </FontAwesomeIcon>
                  </span>
                  <span className={styles["product-count"]}>0</span>
                  <span className={styles["product-action"]}>
                    <FontAwesomeIcon icon={faPlus}> </FontAwesomeIcon>
                  </span>
                </div>
              </div>
              <div className={styles["price"]}>$3999</div>
            </div>
          </div>
          <div
            class={styles["product-container"]}
            data-count="0"
            data-price="1299"
          >
            <img
              class={styles["img-container"]}
              src={product2}
              alt="product2"
            />
            <div className={styles["product-info"]}>
              <div className={styles["product-name"]}>刷色直筒牛仔褲</div>
              <div className={styles["product-control-container"]}>
                <div className={styles["product-control"]}>
                  <span className={styles["product-action"]}>
                    <FontAwesomeIcon icon={faMinus}> </FontAwesomeIcon>
                  </span>
                  <span className={styles["product-count"]}>0</span>
                  <span className={styles["product-action"]}>
                    <FontAwesomeIcon icon={faPlus}> </FontAwesomeIcon>
                  </span>
                </div>
              </div>
              <div className={styles["price"]}>$1299</div>
            </div>
          </div>
        </div>

        <div className={styles["cart-info"]}>
          <div className={styles["text"]}>運費</div>
          <div className={styles["price"]}>免費</div>
        </div>
        <div className={styles["cart-info"]}>
          <div className={styles["text"]}>小計</div>
          <div className={styles["price"]}>0</div>
        </div>
      </div>
    </div>
  );
}
