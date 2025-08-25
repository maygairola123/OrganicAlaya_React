// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <CartProvider>
        <App />
        <Toaster position="top-right" />
      </CartProvider>
    </BrowserRouter>

);
