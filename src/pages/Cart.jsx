import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, addToCart } = useCart();

  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      removeFromCart(item.id);
    } else {
      // Simulate reduce quantity by removing and re-adding with one less
      removeFromCart(item.id);
      const newItem = { ...item, quantity: item.quantity - 1 };
      for (let i = 0; i < newItem.quantity; i++) {
        addToCart(newItem);
      }
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between p-4 border rounded shadow bg-white gap-4"
              >
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-600">
                      ₹{item.price} × {item.quantity} = ₹
                      {item.price * item.quantity}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item)}
                    className="bg-gray-200 px-3 py-1 rounded text-lg font-bold hover:bg-gray-300"
                  >
                    –
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-gray-200 px-3 py-1 rounded text-lg font-bold hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center border-t pt-4 gap-4">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
            >
              🗑 Clear Cart
            </button>

            <div className="text-right">
              <p className="text-xl font-semibold">Total: ₹{total}</p>
              <button
                className="mt-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Proceed to Checkout →
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
