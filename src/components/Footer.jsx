import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
           <img src={logo} alt="Logo" className="w-24 h-24 rounded-full object-cover" />
          <h2 className="text-2xl font-bold text-green-100 mb-2">OrganicAlaya</h2>
          <p className="text-sm text-green-200">
            Delivering fresh, organic, and healthy produce from local farms to your doorstep.
          </p>
          <div className="flex mt-4 space-x-3">
            <a href="#" className="hover:text-green-300"><Facebook /></a>
            <a href="#" className="hover:text-green-300"><Instagram /></a>
            <a href="#" className="hover:text-green-300"><Twitter /></a>
          </div>  
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="text-sm space-y-2 text-green-200">
            <li className="flex items-start gap-2">
              <MapPin size={16} /> 123 Organic Street, Yamuna Valley,Purola Uttarakhand, 249185
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 8527328380
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@organicalaya.in, mayankgairola114@gmail.com
            </li>
          </ul>
           
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-2 text-green-200">
            <li><Link to="/" className="hover:text-green-300">Home</Link></li>
            <li><Link to="/shop" className="hover:text-green-300">Shop</Link></li>
            <li><Link to="/cart" className="hover:text-green-300">Cart</Link></li>
            <li><Link to="/checkout" className="hover:text-green-300">Checkout</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Customer Support</h3>
          <ul className="text-sm space-y-2 text-green-200">
            <li><a href="#" className="hover:text-green-300">FAQs</a></li>
            <li><a href="#" className="hover:text-green-300">Return Policy</a></li>
            <li><a href="#" className="hover:text-green-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-300">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
{/* Newsletter Signup */}
<div className="col-span-full mt-8 text-center">
  <h3 className="text-xl font-semibold mb-2 text-green-100">Subscribe to our Newsletter</h3>
  <p className="text-sm text-green-300 mb-4">
    Get updates on fresh arrivals, exclusive offers, and more.
  </p>
  <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
    <input
      type="email"
      required
      placeholder="Enter your email"
      className="px-4 py-2 rounded-md w-full sm:w-auto text-gray-800"
    />
  
    <button
      type="submit"
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
    >
      Subscribe
    </button>
  </form>
</div>

      <div className="text-center text-green-300 text-sm mt-10 border-t border-green-800 pt-6">
        © {new Date().getFullYear()} OrganicAlaya. All rights reserved.
      </div>
    </footer>
  );
}
