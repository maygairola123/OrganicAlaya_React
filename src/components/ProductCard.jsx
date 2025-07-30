import { useCart } from '../context/CartContext';
import { StarRating } from './StarRating';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const hasDiscount = product.discount && product.discount > 0;
  const discountedPrice = hasDiscount
    ? (product.price - (product.price * product.discount) / 100).toFixed(2)
    : product.price;

  return (
    
    <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-5 flex flex-col items-center">
      
      {/* Discount Badge */}
      {hasDiscount && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md z-10">
          {product.discount}% OFF
        </span>
      )}

{/* New Arrival Badge - top right */}
{product.isNewArrival && (
  <span className="absolute top-10 right-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm z-10">
    🆕 New Arrival
  </span>
)}
  
      {/* Best Seller Badge - opposite side */}
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
        <h3 className="text-lg capitalize font-semibold text-gray-600">{product.productName}</h3>

        {/* Ratings */}
        <div className="flex justify-center items-center gap-2 mt-1 mb-1">
         <StarRating rating={product.rating.rate}/>
         <div className='text-slate-500 text-sm'>{product.rating.count}</div>
        </div>

        <div className="flex justify-center gap-2">
          {hasDiscount ? (
            <div className='flex justify-center items-center gap-2'>
              <span className="text-green-600 font-bold text-lg">₹{discountedPrice}</span>
              <span className="text-gray-400 line-through text-sm">₹{product.price}</span>
            </div>
          ) : (
            <span className="text-green-600 font-bold text-lg">₹{product.price}</span>
          )}
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 hover:scale-105"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
