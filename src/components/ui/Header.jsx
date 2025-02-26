const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
