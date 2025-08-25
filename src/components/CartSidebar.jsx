import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartSidebar = ({ isOpen, onClose }) => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const totalMRP = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.mrp,
    0
  );

  const totalDiscount = totalMRP - total;

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full md:rounded-l-3xl w-full xl:w-1/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
            <div className="flex items-center gap-2">
 <h2 className="text-lg font-bold">Your Cart</h2>
{cartItems.length >0 && <><span className="font-bold">·</span>
 <div>  {` ${cartItems.length} items`}</div></>}

            </div>
         
          <button onClick={onClose} className="text-xl font-bold">X</button>
        </div>

        <div className="h-[calc(100%-220px)] overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">Cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.id}-${item.purchaseQuantity}`}
                className="mb-4 border-b pb-3"
              >
                <div className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.purchaseQuantity}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id, item.purchaseQuantity)
                        }
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          increaseQuantity(item.id, item.purchaseQuantity)
                        }
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm mt-1 text-gray-700">
                      MRP: ₹{item.mrp} | Price: ₹{item.price} | Discount: ₹
                      {item.mrp - item.price}
                    </p>
                    <button
                      onClick={() =>
                        removeFromCart(item.id, item.purchaseQuantity)
                      }
                      className="text-sm text-red-500 mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-3">
          <div className="flex justify-between text-sm mb-1">
            <span>Total MRP</span>
            <span>₹{totalMRP}</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Discount</span>
            <span className="text-green-600">- ₹{totalDiscount}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <Link to="/checkout">
            <button
              className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              onClick={onClose}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default CartSidebar;
