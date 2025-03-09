import { useMemo, useState } from "react";
import { useCoffeeData } from "../queries/useCoffeData";
import ProductCard from "../components/ui/ProductCard";
import { useDebounce } from "../custom-hooks/getDebouncedFn";

export default function Products() {
  const { isLoading, data: coffeeData, error } = useCoffeeData();
  const [filter, setFilter] = useState("");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("mycart")) || []
  );
  const callDebouncdFn = useDebounce(setFilter, 3000);
  const getFilteredProducts = useMemo(() => {
    console.log("function read");
    const filteredProducts = filter
      ? coffeeData.filter((item) => item.title.toLowerCase().includes(filter))
      : coffeeData;
    return filteredProducts;
  }, [filter, coffeeData]);

  const handleAddCart = (item) => {
    try {
      // Get existing cart data from localStorage and parse it safely
      const prevCart = JSON.parse(localStorage.getItem("mycart")) || [];

      // Ensure prevCart is an array (to avoid issues if storage was corrupted)
      if (!Array.isArray(prevCart)) {
        console.error(
          "Invalid cart data found in localStorage. Resetting cart."
        );
        localStorage.setItem("mycart", JSON.stringify([]));
        return;
      }

      // Add the new item
      const newCart = [...prevCart, item];

      // Store updated cart in localStorage
      localStorage.setItem("mycart", JSON.stringify(newCart));
      setCart((prevCart) => [...prevCart, item]);

      // Retrieve and log the updated cart
      console.log(
        "my cart value is",
        JSON.parse(localStorage.getItem("mycart"))
      );
    } catch (error) {
      console.error("Error handling cart data:", error);
    }
  };
  if (error) {
    console.log(error.message);
    return;
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl  mb-6">Products</h1>
        <input
          type="text"
          placeholder="search for products"
          className="border border-gray-500 rounded-md p-1 px-2"
          onChange={(e) => callDebouncdFn(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          getFilteredProducts?.map((coffeeItem) => {
            return (
              <ProductCard
                coffeeItem={coffeeItem}
                setCart={handleAddCart}
                cart={cart}
                key={coffeeItem.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
