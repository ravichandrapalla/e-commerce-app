import { useContext, useEffect } from "react";
import { App_Context } from "../Context";
import ProductCard from "../components/ui/ProductCard";

export default function Products() {
  const { coffeeData } = useContext(App_Context);
  // useEffect(() => {
  //   console.log(cartItems);
  // }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coffeeData?.map((coffeeItem) => {
          return (
            <ProductCard
              coffeeItem={coffeeItem}
              // setCart={setCartItems}
              key={coffeeItem.id}
            />
          );
        })}
      </div>
    </div>
  );
}
