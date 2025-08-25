import { useState, useEffect } from "react";
import {
  Menu, X, ShoppingBag, ShoppingCart
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from '../context/CartContext';
import CartSidebar from "./CartSidebar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0); // Track scroll position

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

  const navigate = useNavigate();
  const { cartCount } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  // Track scroll to move header
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Running Search Bar (only visible at the very top) */}
      {scrollY < 50 && (
        <div className="bg-[#FFFDD0] py-1 overflow-hidden fixed top-0 left-0 w-full z-40">
          <div className="whitespace-nowrap animate-marquee text-center text-sm font-medium">
            🔍 Search: Fresh Organic Fruits • Vegetables • Grains • Dairy • No Chemicals • 100% Local Produce •
          </div>
        </div>
      )}

      {/* Header */}
      <header
        className={`animate-fade-in fixed pe-4  w-full bg-[#14532d] text-gray-900 dark:text-white shadow z-50 transition-all duration-300 ${
          scrollY < 50 ? "top-8" : "top-0"
        }`}
      >
        <div className="max-w-7xl mx-auto  md:px-4 flex justify-between items-center">
          <Link to="/" className="flex gap-2 items-center text-2xl font-bold font-poppins text-white">
            <img src="/organic_alaya_transparent.png" className="w-20" alt="OrganicAlaya" />
            <span className="hidden md:block">OrganicAlaya</span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="rounded-full px-4 py-2 w-48 md:w-64 text-sm text-black focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-600 text-white rounded-full px-3 py-2 text-sm"
            >
              Go
            </button>
          </form>

          <nav className="hidden md:flex items-center space-x-6">
            {/* <Link to="/">Home</Link> */}
            <Link to="/shop">Shop</Link>

            <button onClick={toggleCart} className="relative inline-block">
              <div className="flex items-center gap-2"><ShoppingCart size={18} /> Cart</div>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>


                   <button onClick={toggleCart} className="relative inline-block md:hidden">
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#14532d] px-4 pb-4 animate-slide-down space-y-2">
            <NavLink href="/shop" label="Shop" icon={<ShoppingBag size={18} />} mobile />
         
          </div>
        )}
      </header>

      <CartSidebar isOpen={cartOpen} onClose={toggleCart} />
    </>
  );
}

function NavLink({ href, label, icon, mobile, onClick }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`flex items-center space-x-2 ${
        mobile
          ? "block py-2 border-b border-gray-300 dark:border-gray-700"
          : "hover:text-green-600 dark:hover:text-green-300"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
