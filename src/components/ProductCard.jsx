import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const [selectedWeight, setSelectedWeight] = useState(product.frontPrice?.quantity);

  const unitData =
    product.pricePerUnit.find((u) => u.quantity === selectedWeight) || product.frontPrice;

  const quantityParam = selectedWeight || product.frontPrice?.quantity;

  const handleAddToCart = () => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      image: product.image,
      purchaseQuantity: unitData.quantity,
      price: unitData.price,
      quantity: 1, // always +1 per click
      mrp:unitData.mrp,
      discount:unitData.discount

    };

    addToCart(itemToAdd); // ✅ toast handled inside context
  };

  return (
    <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-5 flex flex-col items-center">
      <Link to={`/product/${product.id}?quantity=${quantityParam}`} className="w-full">
        {/* Discount Badge */}
        {unitData.discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md z-10">
            {unitData.discount}% OFF
          </span>
        )}

        {/* New Arrival Badge */}
        {product.isNewArrival && (
          <span className="absolute top-10 right-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm z-10">
            🆕 New Arrival
          </span>
        )}

        {/* Best Seller Badge */}
        {product.isBestSeller && (
          <span className="absolute top-3 right-3 bg-yellow-400 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm z-10">
            🌟 Best Seller
          </span>
        )}

        {/* Image */}
        <div className="h-56 w-full overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="mt-4 text-center w-full">
          <h3 className="text-lg capitalize font-semibold text-gray-600">
            {product.name}
          </h3>
          <p className="text-sm text-gray-400">{selectedWeight}</p>

          <div className="flex justify-center items-center gap-2 mt-1">
            <span className="text-green-600 font-bold text-lg">₹{unitData.price}</span>
            {unitData.discount > 0 && (
              <span className="text-gray-400 line-through text-sm">₹{unitData.mrp}</span>
            )}
          </div>
        </div>
      </Link>

      {/* Weight Selector */}
      <div className="flex flex-wrap gap-2 mt-3 justify-center">
        {product.pricePerUnit.map((unit) => (
          <button
            key={unit.quantity}
            onClick={() => setSelectedWeight(unit.quantity)}
            className={`text-sm px-3 py-1 rounded border transition ${
              selectedWeight === unit.quantity
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            {unit.quantity}
          </button>
        ))}
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 hover:scale-105"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
