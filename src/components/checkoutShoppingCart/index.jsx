import cx from "classnames";
import React from "react";
import LineItem from "./LineItem";
import style from "./CheckoutShoppingCart.module.scss";
import { useCartContext } from "../../context/CartContext";

// 由 Context 拿購物車資料
const CheckoutShoppingCart = (props) => {
  const { items, state } = useCartContext();
  return (
    <div className={cx(style.cart, "m-3")}>
      <h6>購物欄</h6>
      {items.map((item) => {
        return (
          <LineItem
            key={item.id}
            name={item.name}
            image={item.img}
            initAmount={item.quantity}
            money={item.price}
          />
        );
      })}

      <hr />
      <div className="d-flex justify-content-between">
        <p>運費</p>
        <p>{state.fare || '免費'}</p>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <p>小計</p>
        <p>{state.totalAmount + state.fare}</p>
      </div>
    </div>
  );
};

export default React.memo(CheckoutShoppingCart);
