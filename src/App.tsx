import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/ui/Layout";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { useCallback, useEffect, useState } from "react";
import { AppContextProvider } from "./AppContext.jsx";

import Cart from "./pages/Cart";
import Counter from "./pages/Counter";

function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="no-route" element={<Counter />} />
        </Route>
      </Routes>
    </AppContextProvider>
  );
}

export default App;
