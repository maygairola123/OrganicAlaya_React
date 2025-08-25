import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

const addToCart = (product) => {
  const {
    id,
    name,
    image,
    purchaseQuantity,
    price,
    quantity = 1,
    mrp,
    discount,
  } = product;

  setCartItems((prev) => {
    const index = prev.findIndex(
      (item) => item.id === id && item.purchaseQuantity === purchaseQuantity
    );

    if (index !== -1) {
      const updatedCart = [...prev];
      updatedCart[index].quantity += quantity;
      toast.success(
        `${name} (${purchaseQuantity}) updated to ${updatedCart[index].quantity}`
      );
      return updatedCart;
    } else {
      toast.success(`${name} (${purchaseQuantity}) added to cart`);
      return [
        ...prev,
        {
          id,
          name,
          image,
          purchaseQuantity,
          price,
          quantity,
          mrp,
          discount,
        },
      ];
    }
  });
};


  const increaseQuantity = (id, purchaseQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.purchaseQuantity === purchaseQuantity
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id, purchaseQuantity) => {
    setCartItems((prev) =>
      prev.flatMap((item) => {
        if (item.id === id && item.purchaseQuantity === purchaseQuantity) {
          if (item.quantity === 1) {
            toast.success(`${item.name} (${purchaseQuantity}) removed from cart`);
            return [];
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );
  };

  const removeFromCart = (id, purchaseQuantity) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.purchaseQuantity === purchaseQuantity)
      )
    );
    toast.success("Item removed from cart");
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared 🗑️");
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
