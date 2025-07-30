import { useEffect, useState } from "react";
import {
  Menu, X,
  Home, ShoppingBag, ShoppingCart, CreditCard,
  Sun, Moon
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from '../context/CartContext';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );


  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const { cartCount } = useCart();


  return (

    
   <header className="animate-fade-in fixed top-0 w-full bg-[#14532d] text-gray-900 dark:text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
       
        <Link to="/" className="text-2xl font-bold text-white-600">
          OrganicAlaya
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>

          <Link to="/cart" className="relative inline-block">
            🛒 Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to="/checkout" className="flex items-center space-x-1">
            <CreditCard size={18} />
            <span>Checkout</span>
          </Link>

          <button onClick={() => navigate("/login")}>
            Login
          </button>

    
        </nav>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#14532d] px-4 pb-4 animate-slide-down space-y-2">
          <NavLink href="/" label="Home" icon={<Home size={18} />} mobile />
          <NavLink href="/shop" label="Shop" icon={<ShoppingBag size={18} />} mobile />

          <NavLink
            href="/cart"
            label={
              <span className="relative">
                Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </span>
            }
            icon={<ShoppingCart size={18} />}
            mobile
          />

          <NavLink href="/checkout" label="Checkout" icon={<CreditCard size={18} />} mobile />

        
        </div>
      )}

      
    </header>
  );
}

// ✅ Reusable NavLink Component using <Link>
function NavLink({ href, label, icon, mobile }) {
  return (
    <Link
      to={href}
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
