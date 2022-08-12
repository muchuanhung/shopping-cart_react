import React from "react";
import styles from "./CheckoutForm1.module.scss";
import { useCartContext } from "../../context/CartContext";

type TransportMethodProps = {
  method: string,
  day: string,
  money: number,
  state: string,
};

const TransportMethod: React.FC<TransportMethodProps> = React.memo((props) => {
  const { method, day, money, state, onSelect } = props;
  const { setFare } = useCartContext();
  const atRadioChange = (e) => {
    onSelect(e.target.value);
    setFare(money);
  };
  return (
    <>
       <label
          htmlFor="standard-shipping"
          className={styles["form-part__form-shipping-option"]}
        >
      <div className={styles["form-part__form-row"]} >
   
        <input
          type="radio"
          value={method}
          checked={method === state}
          onChange={atRadioChange}
        />

        <div className="d-flex">
          <span className="inline-block text-black">{method}</span>
          <span>{day}</span>
        </div>

      </div>

      <div className={styles["form-part__form-shipping-option__shipping-fee"]}>
        <div className="d-flex">{money ? `$${money}` : "免費"}</div>
      </div>
      </label>

    </>
  );
});

const CheckoutForm1 = () => {
  const { fareState, setFareState } = useCartContext();
  return (
    <>
      <div className={styles["form-part"]}>
        <h2 className={styles["form-part__title"]}>運送方式</h2>

        <TransportMethod
          method="標準運送"
          day="約3~7個工作天"
          money={0}
          state={fareState}
          onSelect={setFareState}
        />
        <TransportMethod
          method="DHL 貨運"
          day="48小時內送達"
          money={500}
          state={fareState}
          onSelect={setFareState}
        />
      </div>
    </>
  );
};

export default React.memo(CheckoutForm1);
