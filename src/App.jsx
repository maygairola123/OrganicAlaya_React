import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

import ProductDetail from "./pages/ProductDetail";
import AboutUs from "./components/AboutUs"; 
import CategoryProducts from "./pages/CategoryProducts.jsx";




function App() {
  return (
    <div className="font-poppins">
      <Header />
      {/* <HeroBanner/> */}
  
     
      <main className="pt-20 min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:slug" element={<CategoryProducts />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/product/:id" element={<ProductDetail />} />
           <Route path="/about" element={<AboutUs />} />

        </Routes>
        
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
