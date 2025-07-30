import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.jpg';

export default function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();
 

  const onSubmit = async data => {
    console.log(data);
    await new Promise(r => setTimeout(r, 500));
    navigate("/");
  };
  

  return (

    
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 bg-blue-600 flex flex-col justify-center items-center text-white p-6">
        <img src={logo} alt="Logo" className="w-24 h-24 rounded-full mb-6 object-cover" />
        <h2 className="text-3xl font-bold mb-4 text-center">Welcome Back!</h2>
        <p className="text-center max-w-sm">
          Login to your OrganicAlaya account to explore fresh farm‑to‑doorstep
          produce, track orders, and get exclusive deals.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Logo" className="w-24 h-24 rounded-full object-cover" />
          </div>

          <h3 className="text-3xl font-semibold text-green-600 mb-6 text-center">Login</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-600 text-sm">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold"
            >
              {isSubmitting ? "Signing In…" : "Sign In"}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-green-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
