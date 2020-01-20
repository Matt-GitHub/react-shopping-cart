import React, { createContext, useState, useEffect } from "react";
import data from "../data";
export const ProductContext = createContext();
const ProductContextProvider = props => {
  // create initial state
  const [initialState, setInitialState] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  // use effect to update local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  });

  const [products] = useState(data);
  const [cart, setCart] = useState(initialState);
  console.log("cart", cart);
  console.log("product", products);
  const addItem = item => {
    // if item.id ? setcart : alert(you can only have one book)
    cart.find(itemObject => itemObject === item)
      ? setInitialState([...cart])
      : setCart([...cart, item]);
  };
  const removeItem = id => {
    setCart(cart.filter(product => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, cart, addItem, removeItem }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
