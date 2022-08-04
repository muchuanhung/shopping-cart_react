import React, { useState, useContext, useCallback } from "react";
import cx from "classnames";
import CartContext from "../../context/CartContext";
import LineItem from "./LineItem";
// import ProgressBar from "react-bootstrap/ProgressBar";
import style from "./CheckoutShoppingCart.module.scss";

// 由 Context 拿購物車資料
const CheckoutShoppingCart = React.memo((props) => {
  const data = useContext(CartContext);
  const [items, setItems] = useState(data.items);

  // Cart 裡的 LineItem.jsx，新增與減少鈕按功能要能正常使用
  const onChangeQuantity = useCallback(
    (id, num) => {
      const newItems = items.map((item) => {
        if (item.id === id && item.quantity + num > 0) {
          return {
            ...item,

            quantity: item.quantity + num,
          };
        }
        return item;
      });
      return setItems(newItems);
    },
    [items]
  );

  const onRemoveItem = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const total = items.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);

  const listItem = items.map((item) => {
    return (
      <LineItem
        key={item.id}
        name={item.name}
        image={item.img}
        initAmount={item.quantity}
        money={item.price}
        onChangeQuantity={onChangeQuantity}
        onRemoveItem={onRemoveItem}
      />
    );
  });

  return (
    <div className={cx(style.cart, "m-3")}>
      <div className="card border p-3 pb-0">
        <h6>購物欄</h6>
        <div className={cx(style.cart, "m-3")}>{listItem}</div>
        <div className="d-flex justify-content-between">
          <p>運費</p>
          <div className="fw-bolder">免費</div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p>小計</p>
          <div className="fw-bolder">
            &#36; <span id="total">{total}</span>
          </div>
        </div>
        <div className="col-lg-12 row align-items-center border-top pt-4 mb-4">
          <div className="mt-1">
            {/* <ProgressBar striped variant="warning" now={33 * data.step} /> */}
          </div>
        </div>
      </div>
    </div>
  );
});

export default React.memo(CheckoutShoppingCart);
