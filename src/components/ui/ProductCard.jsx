import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../../redux/slices/cartSlice";

export default function ProductCard({ coffeeItem, setCart, cart }) {
  const cartStore = useSelector((state) => state.cartItems);
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + "...";
  };
  // const cartItems = JSON.parse(localStorage.getItem("mycart"));
  const isCartItem = cartStore?.find((item) => item.id == coffeeItem.id);

  const dispatch = useDispatch();
  return (
    <div
      key={coffeeItem.id}
      className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={coffeeItem.image}
        alt={coffeeItem.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{coffeeItem.title}</h2>
        <p className="text-gray-600 mb-4">
          {truncateDescription(coffeeItem.description, 50)}
        </p>
        <button
          className={`text-white py-2 px-4 rounded bg-green-600 hover:bg-blue-600 transition-colors duration-300`}
          onClick={() => dispatch(addCartItem(coffeeItem))}
        >
          {isCartItem ? "Added" : "Add to Cart"}
        </button>
        {isCartItem && (
          <button
            className={`text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300`}
            onClick={() => dispatch(removeCartItem(coffeeItem))}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
