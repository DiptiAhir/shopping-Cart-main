import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "../component/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          {/* Cart Summary Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-medium">Total Items:</span> {cart.length}
            </p>
            <p className="text-xl font-semibold text-green-600 mb-6">
              <span className="font-medium">Total Amount:</span> ${totalAmount.toFixed(2)}
            </p>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full">
              Check Out Now
            </button>
          </div>
        </div>
      ) : (
        // Empty Cart State
        <div className="flex flex-col items-center justify-center text-center mt-16 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h1>
          <Link to="/">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
