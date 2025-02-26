const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center mt-6">
      <div className="container mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} My E-commerce. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
