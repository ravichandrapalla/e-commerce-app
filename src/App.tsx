import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/ui/Layout";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { useCallback, useEffect, useState } from "react";
import { AppContextProvider } from "./AppContext.jsx";

import Cart from "./pages/Cart";

export const API_URL = "https://api.sampleapis.com/coffee/hot";

function App() {
  const [coffeeData, setCoffeeData] = useState([]);
  localStorage.setItem("cart", []);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCoffeeData(data))
      .finally(() => {
        console.log("api call happened");
      });
  }, []);

  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="products"
            element={<Products coffeeData={coffeeData} />}
          />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </AppContextProvider>
  );
}

export default App;
