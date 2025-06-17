/* eslint-disable no-unused-vars */
// src/pages/ProductsPage.jsx
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Navbar */}
      <Navbar cartCount={itemsCount} />
      {/* Main Content Placeholder */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 mx-auto text-center">Cart </h2>

        {/* Product cards will go here later */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
        <div className="gap-3 flex justify-center">
          
          <Link to="/products">
            <button className="cursor-pointer bg-zinc-700 p-2 rounded-full px-3 font-bold">
              Back to Shop
            </button>
          </Link>
          <button className="cursor-pointer bg-cyan-500 font-bold p-2 rounded-full px-3">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
