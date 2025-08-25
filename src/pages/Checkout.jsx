import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [cart, setCart] = useState([]);
  const [totals, setTotals] = useState({
    mrp: 0,
    discount: 0,
    total: 0,
  });
console.log(cart)
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    const mrp = storedCart.reduce(
      (sum, item) => sum + item.mrp * item.quantity,
      0
    );

    const discount = storedCart.reduce((sum, item) => {
      const itemTotal = item.price * item.quantity;
      const itemDiscount = itemTotal * (item.discount / 100 || 0);
      return sum + itemDiscount;
    }, 0);

    const total = mrp - discount;

    setTotals({ mrp, discount, total });
  }, []);

  const generateCartHTML = (cart) => {
    return cart
      .map((item) => {
        const itemTotal = item.price * item.quantity;
        const itemDiscount = itemTotal * (item.discount / 100 || 0);
        return `
        <div style="display: flex; background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <img src="${item.image}" alt="${item.name}" style="width: 120px; height: auto; border-radius: 6px; margin-right: 15px;">
          <div>
            <h3 style="margin: 0;">${item.name}</h3>
            <p style="font-size: 14px; margin: 5px 0;">Weight: <strong>${item.purchaseQuantity}</strong> | Qty: <strong>${item.quantity}</strong></p>
            <p style="margin: 5px 0;">
              <strong>₹${(itemTotal - itemDiscount).toFixed(2)}</strong> 
              <span style="text-decoration: line-through; color: #888;">₹${itemTotal}</span>
            </p>
            <p style="color: green; font-size: 13px;">You saved ₹${itemDiscount.toFixed(2)}</p>
          </div>
        </div>
      `;
      })
      .join("");
  };

  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      email: [data.email, "mayankgairola114@gmail.com"],
      phone: data.phone,
      address: data.address,
      mrp: totals.mrp,
      discount: totals.discount,
      total: totals.total,
      cartItems: generateCartHTML(cart),
    };

    emailjs
      .send(
        "service_oouiicb",
        "template_x3mo0ha",
        templateParams,
        "WXAQcoELtb1XU2RbC"
      )
      .then(
        () => {
          alert("✅ Order placed & email sent!");
          reset();
        },
        (error) => {
          alert("❌ Failed to send email.");
          console.error(error);
        }
      );
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* 🧾 Order Summary */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="text-xl font-bold text-green-700">🧾 Order Summary</h2>
          {cart.map((item, index) => {
            const itemTotal = item.price * item.quantity;
            const itemDiscount = itemTotal * (item.discount / 100 || 0);
            const finalPrice = itemTotal - itemDiscount;
            return (
              <div
                key={index}
                className="flex items-start gap-4 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.purchaseQuantity} × {item.quantity}
                  </p>
                  <p className="text-sm">
                    ₹{finalPrice.toFixed(2)}{" "}
                    <span className="line-through text-gray-400">
                      ₹{itemTotal}
                    </span>
                  </p>
                  <p className="text-green-600 text-xs">
                    You saved ₹{itemDiscount.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Totals */}
          <div className="mt-4 text-sm space-y-1 border-t pt-4">
            <p>MRP Total: ₹{totals.mrp.toFixed(2)}</p>
            <p className="text-red-500">Discount: − ₹{totals.discount.toFixed(2)}</p>
            <p className="font-bold text-green-700 text-lg">
              Final Total: ₹{totals.total.toFixed(2)}
            </p>
            <span className="inline-block mt-1 text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
              🎉 You Saved ₹{totals.discount.toFixed(2)}
            </span>
          </div>
        </div>

        {/* 🧍 Customer Info */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-xl shadow p-6 space-y-4"
        >
          <h2 className="text-xl font-bold text-green-700 text-center">
            👤 Customer Info
          </h2>

          <input
            {...register("name", { required: true })}
            placeholder="Full Name"
            className="input"
          />
          {errors.name && <span className="text-red-500">Name is required</span>}

          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="input"
          />
          {errors.email && <span className="text-red-500">Email is required</span>}

          <input
            {...register("phone", { required: true })}
            placeholder="Phone Number"
            className="input"
          />
          {errors.phone && <span className="text-red-500">Phone is required</span>}

          <textarea
            {...register("address", { required: true })}
            placeholder="Delivery Address"
            className="input"
          />
          {errors.address && <span className="text-red-500">Address is required</span>}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            ✅ Place Order & Send Email
          </button>

          <div className="text-sm text-gray-600 text-center mt-2">
            📞 Support: <a href="tel:918527328380" className="text-green-700">+91 85273 28380</a> |{" "}
            <a
              href="https://wa.me/918527328380"
              target="_blank"
              rel="noreferrer"
              className="text-green-700"
            >
              WhatsApp us
            </a>
          </div>
        </form>
      </div>
      
    </div>
    
  );
};

export default Checkout;
