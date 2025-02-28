import { useContext } from "react";

import CartListItem from "../components/ui/CartListItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = JSON.parse(localStorage.getItem("mycart"));
  const cartStore = useSelector((state) => state.cartItems);
  console.log(cartItems);

  return (
    <div>
      <div className="justify-between flex items-center mb-6">
        <span className="text-xl">Your Cart</span>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        {cartStore?.length > 0 ? (
          cartStore?.map((item) => <CartListItem key={item.id} item={item} />)
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
