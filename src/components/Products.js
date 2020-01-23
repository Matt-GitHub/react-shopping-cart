import React, { useContext } from "react";
import { ProductContext } from "../context/productContent";
// Components
import Product from "./Product";

const ProductList = () => {
  const { products, addItem, cart } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map(product => (
        <Product
          key={Math.random()}
          addItem={addItem}
          product={product}
          cart={cart}
        />
      ))}
    </div>
  );
};

export default ProductList;
