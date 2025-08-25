import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { products } from "../data/Products";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));
  const searchParams = new URLSearchParams(location.search);
  const selectedFromQuery = searchParams.get("quantity");

  const defaultOption =
    product.pricePerUnit.find((p) => p.quantity === selectedFromQuery) ||
    product.frontPrice;


  const [mainImage, setMainImage] = useState(product.images?.[0] || product.image);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [quantity, setQuantity] = useState(1);

  const finalPrice = selectedOption.price;

  const similarProducts = products.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  );

  useEffect(() => {
    // When URL changes or query changes
    setSelectedOption(defaultOption);
  }, [id, location.search]);

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 px-4 md:px-16 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="p-3 border border-gray-200 rounded-xl shadow-md bg-white mb-4">
            <img
              src={mainImage}
              alt={product.name}
              className="w-80 md:w-96 h-auto rounded-lg object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="flex gap-3">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i}`}
                onClick={() => setMainImage(img)}
                className={`w-16 h-16 object-cover border-2 rounded-md cursor-pointer ${
                  img === mainImage ? "border-green-600" : "border-transparent"
                } hover:border-green-400`}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-green-700">{product.name}</h1>
          <p className="text-gray-600">{product.description || "No description available."}</p>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-green-600">₹{finalPrice}</span>
            {selectedOption.discount > 0 && (
              <>
                <span className="text-sm line-through text-gray-400">₹{selectedOption.mrp}</span>
                <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                  {selectedOption.discount}% OFF
                </span>
              </>
            )}
          </div>

          {/* Quantity Count Selector */}
          <div className="mt-4">
            <p className="font-medium mb-2">Select Quantity:</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border border-gray-400 rounded text-lg"
              >
                −
              </button>
              <span className="min-w-[40px] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 border border-gray-400 rounded text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Weight Variant Selector */}
          <div className="mt-4">
            <p className="font-medium mb-2">Select Weight:</p>
            <div className="flex gap-4">
              {product.pricePerUnit.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`px-4 py-2 rounded border transition ${
                    selectedOption.quantity === option.quantity
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-gray-800 border-gray-300"
                  }`}
                >
                  {option.quantity}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() =>
         addToCart({
  id: product.id,
  name: product.name,
  image: product.image,
  purchaseQuantity: selectedOption.quantity,
  price: selectedOption.price,
  quantity: quantity, // use selector value
  mrp: selectedOption.mrp,
  discount: selectedOption.discount
})

            }
            className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-lg mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Similar Products */}
   {similarProducts.length > 0 && (
  <div className="mt-16">
    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Similar Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {similarProducts.map((item) => {
        const [selectedWeight, setSelectedWeight] = useState(item.frontPrice.quantity);
        const unitData =
          item.pricePerUnit.find((u) => u.quantity === selectedWeight) || item.frontPrice;
        return (
          <Link 
              to={`/product/${item.id}?quantity=${selectedWeight}`} 
          key={item.id}
            className="border rounded-lg shadow hover:shadow-md transition duration-300 p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-contain mb-3 rounded"
            />

            <h3 className="text-lg font-semibold text-green-700">{item.name}</h3>

            <p className="text-sm text-gray-500">{selectedWeight}</p>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-green-600 font-bold text-lg">₹{unitData.price}</span>
              {unitData.discount > 0 && (
                <span className="line-through text-gray-400 text-sm">₹{unitData.mrp}</span>
              )}
            </div>

            {/* Quantity selector */}
            <div className="flex flex-wrap gap-2 mt-3">
              {item.pricePerUnit.map((unit, idx) => (
                <button
                  key={idx}
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

            <button
                   onClick={() =>
         addToCart({
  id: product.id,
  name: product.name,
  image: product.image,
  purchaseQuantity: unitData.quantity,
  price: unitData.price,
  quantity: quantity, // use selector value
  mrp: unitData.mrp,
  discount: unitData.discount
})

            }
              className="inline-block mt-4 text-sm text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </Link>
        );
      })}
    </div>
  </div>
)}

    </div>
  );
};

export default ProductDetail;
