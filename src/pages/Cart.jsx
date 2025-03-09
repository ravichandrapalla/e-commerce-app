import { useContext, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
const CartListItem = lazy(() => import("../components/ui/CartListItem"));

export default function Cart() {
  const dispatch = useDispatch();
  const cartStore = useSelector(
    (state) => state.cartItems,
    (prev, next) => prev === next
  );

  return (
    <div>
      <div className="justify-between flex items-center mb-6">
        <span className="text-xl">Your Cart</span>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <Suspense fallback={<p>Loading...</p>}>
          {cartStore?.length > 0 ? (
            cartStore?.map((item) => <CartListItem key={item.id} item={item} />)
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </Suspense>
      </div>
    </div>
  );
}
