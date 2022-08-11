//  請將 step 與上週的購物車資料放到 Context 裡，並將檔名為 CartContext.js。
import React, { useContext } from "react";

const CartContext = React.createContext(null);

export default CartContext;

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (ctx == null) {
    throw new Error("useMyContext must be used inside a ContextProvider.");
  }
  return ctx;
}
