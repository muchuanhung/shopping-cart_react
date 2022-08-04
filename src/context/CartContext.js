//  請將 step 與上週的購物車資料放到 Context 裡，並將檔名為 CartContext.js。
import React from "react";

const CartContext = React.createContext({
  step: 1,

  items: [
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
  ],
});

export default CartContext;