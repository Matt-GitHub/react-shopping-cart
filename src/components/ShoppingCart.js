import React, { useContext } from "react";
import { ProductContext } from "../context/productContent";
// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { cart, products } = useContext(ProductContext);
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.map(item => (
        <Item key={Math.random()} {...item} products={products} />
      ))}
      {cart.length < 1 ? (
        <h2 className="prompt">{`You currently have 0 Items in Cart`} </h2>
      ) : null}
      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        {cart.length < 1 ? null : <p>Number of Items: {cart.length}</p>}
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
