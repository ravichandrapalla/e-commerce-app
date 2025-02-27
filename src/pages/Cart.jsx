import { useContext } from "react";

import CartListItem from "../components/ui/CartListItem";

export default function Cart() {
  const cartItems = JSON.parse(localStorage.getItem("mycart"));
  console.log("cart items --> ", cartItems);

  return (
    <div>
      <h1 className="text-3xl  mb-6">Your Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {cartItems?.length > 0 ? (
          cartItems?.map((item) => <CartListItem key={item.id} item={item} />)
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
