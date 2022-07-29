/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import cx from "classnames";
import style from "./CheckoutShoppingCart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

type LineItemProps = {
  name: string,
  image: string,
  amount: number,
  money: number,
};

const LineItem: React.FC<LineItemProps> = React.memo((props) => {
  const { name, image, initAmount, money } = props;
  const [amount, setAmount] = React.useState(initAmount);

  const addAmount = () => {
    setAmount(amount + 1);
  };

  const reduceAmount = () => {
    if (amount > 0) setAmount(amount - 1);
  };
  return (
    <div className="m-3 d-flex justify-content-between">
      <img className={style.product_img} alt="img fail" src={image} />
      <div className="d-flex flex-column justify-content-between mx-4 my-2">
        <p>{name}</p>
        <div
          className={cx(
            "d-flex",
            "justify-content-between",
            "align-items-center",
            style.amount_control
          )}
        >
          <FontAwesomeIcon icon={faPlus} onClick={addAmount}></FontAwesomeIcon>
          <div className="ml-3 mr-3">{amount}</div>
          <FontAwesomeIcon
            icon={faMinus}
            onClick={reduceAmount}
          ></FontAwesomeIcon>
        </div>
      </div>

      <div className="ml-3 mt-3">{money}</div>
    </div>
  );
});

export default LineItem;
