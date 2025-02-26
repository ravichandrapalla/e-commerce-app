import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";

const Header = () => {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center px-4">
        <span className="text-2xl font-bold">My E-commerce</span>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-gray-300">
                Cart
              </a>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="bg-gray-200 text-black py-1 px-3 rounded hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
              >
                {theme == "light" ? "Dark Mode" : "Light Mode"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
