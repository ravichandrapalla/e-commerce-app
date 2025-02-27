import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/ui/Layout";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { useCallback, useEffect, useState } from "react";
import { AppContextProvider } from "./AppContext.jsx";

import Cart from "./pages/Cart";

function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </AppContextProvider>
  );
}

export default App;
