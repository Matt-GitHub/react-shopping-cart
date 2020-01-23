import React from "react";
import { Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import ProductList from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContextProvider from "./context/productContent";

function App() {
  // const [cart, setCart] = useState([]);

  // const addItem = item => {
  //   setCart([...cart, item]);
  // };

  return (
    <ProductContextProvider>
      <div className="App">
        <Navigation />

        {/* Routes */}
        <Route exact path="/" render={() => <ProductList />} />
        <Route path="/cart" render={() => <ShoppingCart />} />
      </div>
    </ProductContextProvider>
  );
}

export default App;
